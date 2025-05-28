import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { flushPromises, mount } from "@vue/test-utils";
import { createPinia } from "pinia";
import baseInput from "@/components/base/baseInput.vue";
import baseButton from "@/components/base/baseButton.vue";

// Mock PrimeVue toast
vi.mock("primevue/usetoast", () => ({
  useToast: () => ({
    add: vi.fn(),
  }),
}));

// Mock Supabase
vi.mock("@/lib/supabase", () => ({
  supabase: {
    auth: {
      signInWithPassword: vi.fn(),
    },
  },
}));

import { supabase } from "@/lib/supabase";
import LoginView from "@/views/login/LoginView.vue";

describe("LoginView", () => {
  let wrapper;
  let pinia;

  beforeEach(() => {
    pinia = createPinia();

    // Mount with all required providers
    wrapper = mount(LoginView, {
      global: {
        plugins: [pinia],
        stubs: {
          "router-link": true,
          Breadcrumb: true,
          Icon: true,
        },
        components: {
          baseButton: true,
          baseInput: true,
        },
        mocks: {
          $toast: {
            add: vi.fn(),
          },
        },
      },
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("logs in successfully with valid credentials", async () => {
    const fakeUser = { id: "123", email: "test@example.com" };
    supabase.auth.signInWithPassword.mockResolvedValue({
      data: { user: fakeUser, session: {} },
      error: null,
    });

    const emailInput = wrapper.findComponent({
      name: "baseInput",
      ref: "emailInput",
    });
    const passwordInput = wrapper.findComponent({
      name: "baseInput",
      ref: "passwordInput",
    });

    await emailInput.vm.$emit("update:modelValue", "test@example.com");
    await passwordInput.vm.$emit("update:modelValue", "correct-password");

    // Trigger form submission
    await wrapper.find("form").trigger("submit");
    await flushPromises();

    expect(supabase.auth.signInWithPassword).toHaveBeenCalledWith({
      email: "test@example.com",
      password: "correct-password",
    });
  });
});
