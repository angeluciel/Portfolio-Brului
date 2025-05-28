import { describe, it, expect, beforeEach, vi } from "vitest";
import { setActivePinia, createPinia } from "pinia";
import { useAuthStore } from "@/stores/authStore";
import { supabase } from "@/lib/supabase";

// Mock Supabase to avoid real API calls during tests
vi.mock("@/lib/supabase", () => ({
  supabase: {
    auth: {
      signUp: vi.fn(),
      signInWithPassword: vi.fn(),
      signOut: vi.fn(),
      getSession: vi.fn(),
    },
    from: vi.fn(() => ({
      insert: vi.fn(),
      select: vi.fn(() => ({
        eq: vi.fn(() => ({
          single: vi.fn(),
        })),
      })),
    })),
  },
}));

describe("Auth Store", () => {
  beforeEach(() => {
    // Create a fresh Pinia instance for each test
    setActivePinia(createPinia());

    // Clear all mocks
    vi.clearAllMocks();
  });

  // Test 1: Initial state
  it("starts with correct initial state", () => {
    const auth = useAuthStore();

    expect(auth.user).toBe(null);
    expect(auth.loading).toBe(null);
    expect(auth.isLoggedIn).toBe(false);
  });

  // Test 2: isLoggedIn computed property
  it("isLoggedIn returns true when user exists", () => {
    const auth = useAuthStore();

    // Manually set a user (simulating login)
    auth.user = { id: "123", email: "test@example.com" };

    expect(auth.isLoggedIn).toBe(true);
  });

  // Test 3: Role checking
  it("checks user roles correctly", () => {
    const auth = useAuthStore();

    // Set user with admin role
    auth.user = { id: "123", role: "admin" };

    expect(auth.is("admin")).toBe(true);
    expect(auth.is("client")).toBe(false);
  });

  // Test 4: Permission checking
  it("checks permissions correctly", () => {
    const auth = useAuthStore();

    // Set user with admin role
    auth.user = { id: "123", role: "admin" };

    expect(auth.can("upload")).toBe(true);
    expect(auth.can("deleteUser")).toBe(true);

    // Change to client role
    auth.user = { id: "123", role: "client" };

    expect(auth.can("viewGallery")).toBe(true);
    expect(auth.can("deleteUser")).toBe(false);
  });

  // Test 5: Logout functionality
  it("logout clears user data", async () => {
    const auth = useAuthStore();

    // Set initial user
    auth.user = { id: "123", email: "test@example.com" };

    // Mock successful logout
    supabase.auth.signOut.mockResolvedValue({ error: null });

    await auth.logout();

    expect(auth.user).toBe(null);
    expect(supabase.auth.signOut).toHaveBeenCalled();
  });
});
