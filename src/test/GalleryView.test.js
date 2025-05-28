import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { flushPromises, mount } from "@vue/test-utils";
import { createPinia } from "pinia";
import GalleryView from "@/views/GalleryView.vue";
import { supabase } from "@/lib/supabase";
import { useAuthStore } from "@/stores/authStore";

// Mock functions
const mockAdd = vi.fn();
const mockList = vi.fn();
const mockUpload = vi.fn();
const mockGetPublicUrl = vi.fn();
const mockIs = vi.fn();
const mockFetchCurrentUser = vi.fn();

// Mock toast
vi.mock("primevue/usetoast", () => ({
  useToast: () => ({
    add: mockAdd,
  }),
}));

// Mock supabase
vi.mock("@/lib/supabase", () => ({
  supabase: {
    storage: {
      from: vi.fn(() => ({
        list: mockList,
        upload: mockUpload,
        getPublicUrl: mockGetPublicUrl,
      })),
    },
  },
}));

// Mock auth store
vi.mock("@/stores/authStore", () => ({
  useAuthStore: vi.fn(() => ({
    user: null,
    is: mockIs,
    fetchCurrentUser: mockFetchCurrentUser,
  })),
}));

describe("GalleryView", () => {
  let wrapper;
  let pinia;
  const mockImages = [
    { name: "image1.jpg", metadata: { mimetype: "image/jpeg" } },
    { name: "image2.jpg", metadata: { mimetype: "image/jpeg" } },
  ];

  beforeEach(() => {
    pinia = createPinia();
    // Reset all mocks before each test
    vi.clearAllMocks();

    // Set default mock return values
    mockIs.mockReturnValue(false);
    mockList.mockResolvedValue({ data: [], error: null });
  });

  afterEach(() => {
    if (wrapper) {
      wrapper.unmount();
    }
  });

  it("shows loading state initially", () => {
    wrapper = mount(GalleryView, {
      global: {
        plugins: [pinia],
        stubs: {
          HeaderBar_mobile: true,
          FooterBar: true,
          Icon: true,
          UseSkeleton: true,
        },
      },
    });

    expect(wrapper.find('[data-cy="skeleton-loader"]').exists()).toBe(true);
    expect(wrapper.find('[data-cy="gallery-container"]').exists()).toBe(false);
  });

  it("hides upload zone for non-artist users", async () => {
    mockIs.mockReturnValue(false);

    wrapper = mount(GalleryView, {
      global: {
        plugins: [pinia],
        stubs: {
          HeaderBar_mobile: true,
          FooterBar: true,
          Icon: true,
          UseSkeleton: true,
        },
      },
    });

    await flushPromises();
    // Use consistent selector - check your component for the correct attribute
    expect(wrapper.find('[data-testid="dropzone"]').exists()).toBe(false);
  });

  it("shows upload zone for artist users", async () => {
    mockIs.mockReturnValue(true);

    wrapper = mount(GalleryView, {
      global: {
        plugins: [pinia],
        stubs: {
          HeaderBar_mobile: true,
          FooterBar: true,
          Icon: true,
          UseSkeleton: true,
        },
      },
    });

    await flushPromises();
    expect(wrapper.find('[data-testid="dropzone"]').exists()).toBe(true);
  });

  it("loads and displays images successfully", async () => {
    mockList.mockResolvedValue({
      data: mockImages,
      error: null,
    });

    wrapper = mount(GalleryView, {
      global: {
        plugins: [pinia],
        stubs: {
          HeaderBar_mobile: true,
          FooterBar: true,
          Icon: true,
          UseSkeleton: true,
        },
      },
    });

    await wrapper.vm.getImages();
    await flushPromises();

    expect(wrapper.find('[data-cy="skeleton-loader"]').exists()).toBe(false);
    expect(wrapper.findAll(".gallery-image")).toHaveLength(mockImages.length);
  });

  it("handles file upload successfully", async () => {
    // Set up mocks for artist user
    mockIs.mockReturnValue(true);
    mockUpload.mockResolvedValue({
      data: { path: "gallery/test-image.jpg" },
      error: null,
    });
    mockGetPublicUrl.mockReturnValue({
      data: { publicUrl: "https://example.com/test-image.jpg" },
    });
    mockList.mockResolvedValue({
      data: mockImages,
      error: null,
    });

    wrapper = mount(GalleryView, {
      global: {
        plugins: [pinia],
        stubs: {
          HeaderBar_mobile: true,
          FooterBar: true,
          Icon: true,
          UseSkeleton: true,
        },
      },
    });

    const file = new File(["test content"], "test-image.jpg", {
      type: "image/jpeg",
    });
    await wrapper.vm.handleFiles([file]);
    await flushPromises();

    expect(mockUpload).toHaveBeenCalled();
    expect(mockAdd).toHaveBeenCalledWith(
      expect.objectContaining({
        severity: "success",
        summary: "Image uploaded",
      })
    );
  });

  it("handles upload errors correctly", async () => {
    mockIs.mockReturnValue(true);
    mockUpload.mockResolvedValue({
      data: null,
      error: new Error("Upload failed"),
    });

    wrapper = mount(GalleryView, {
      global: {
        plugins: [pinia],
        stubs: {
          HeaderBar_mobile: true,
          FooterBar: true,
          Icon: true,
          UseSkeleton: true,
        },
      },
    });

    const file = new File(["test content"], "test-image.jpg", {
      type: "image/jpeg",
    });
    await wrapper.vm.handleFiles([file]);
    await flushPromises();

    expect(mockAdd).toHaveBeenCalledWith(
      expect.objectContaining({
        severity: "error",
        summary: "Error",
      })
    );
  });
});
