import { createRouter, createWebHistory } from "vue-router";
import { createTestingPinia } from "@pinia/testing";
import { vi } from "vitest";

// Create a mock router for testing
export function createMockRouter() {
  return createRouter({
    history: createWebHistory(),
    routes: [
      { path: "/", name: "home", component: { template: "<div>Home</div>" } },
      {
        path: "/login",
        name: "login",
        component: { template: "<div>Login</div>" },
      },
      {
        path: "/profile/:display_name",
        name: "userProfile",
        component: { template: "<div>Profile</div>" },
      },
    ],
  });
}

// Create a testing Pinia with mocked stores
export function createTestingPiniaWithAuth() {
  return createTestingPinia({
    createSpy: vi.fn,
    initialState: {
      auth: {
        user: null,
        loading: false,
      },
    },
  });
}

// Helper to mount components with all necessary providers
export function mountWithProviders(component, options = {}) {
  const router = createMockRouter();
  const pinia = createTestingPiniaWithAuth();

  return mount(component, {
    global: {
      plugins: [router, pinia],
    },
    ...options,
  });
}
