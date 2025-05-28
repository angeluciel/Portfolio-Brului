import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import BaseButton from "@/components/base/baseButton.vue";

describe("BaseButton Component", () => {
  // Test 1: button render with text
  it("renders button with correct text", () => {
    const wrapper = mount(BaseButton, {
      props: {
        text: "Click Me",
      },
    });

    // Check if the button shows the text passed
    expect(wrapper.find("input").element.value).toBe("Click Me");
  });

  // Test 2: apply the right CSS classes
  it("applies correct CSS classes for login variant", () => {
    const wrapper = mount(BaseButton, {
      props: {
        text: "Login",
        variant: "filled",
        color: "login",
      },
    });

    const button = wrapper.find("input");
    // Check if it has the violet background class (login color)
    expect(button.classes()).toContain("bg-violet-500");
  });

  // Test 3: Does it handle different colors?
  it("applies correct classes for forms color", () => {
    const wrapper = mount(BaseButton, {
      props: {
        text: "Submit",
        variant: "filled",
        color: "forms",
      },
    });

    const button = wrapper.find("input");
    expect(button.classes()).toContain("bg-red-300");
  });

  // Test 4: outline variant work
  it("applies outline styles correctly", () => {
    const wrapper = mount(BaseButton, {
      props: {
        text: "Outline Button",
        variant: "outline",
        color: "login",
      },
    });

    const button = wrapper.find("input");
    expect(button.classes()).toContain("border-violet-600");
  });

  // Test 5: check cursor pointer class
  it("has cursor-pointer class", () => {
    const wrapper = mount(BaseButton, {
      props: { text: "Test" },
    });

    expect(wrapper.find("input").classes()).toContain("cursor-pointer");
  });
});
