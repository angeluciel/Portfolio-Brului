import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import BaseInput from "@/components/base/baseInput.vue";

describe("BaseInput Component", () => {
  // Test 1: Basic rendering
  it("renders input with title and placeholder", () => {
    const wrapper = mount(BaseInput, {
      props: {
        title: "Email",
        placeholder: "Enter your email",
      },
    });

    // Check if title (label) is rendered
    expect(wrapper.find("label").text()).toBe("Email");

    // Check if placeholder is set
    const input = wrapper.find("input");
    expect(input.attributes("placeholder")).toBe("Enter your email");
  });

  // Test 2: Two-way binding (v-model)
  it("updates value when user types", async () => {
    const wrapper = mount(BaseInput, {
      props: {
        title: "Username",
        modelValue: "",
      },
    });

    const input = wrapper.find("input");

    // Simulate user typing
    await input.setValue("john_doe");

    // Check if the component emitted the update event
    expect(wrapper.emitted("update:modelValue")).toBeTruthy();
    expect(wrapper.emitted("update:modelValue")[0]).toEqual(["john_doe"]);
  });

  // Test 3: Different input types
  it("sets correct input type", () => {
    const wrapper = mount(BaseInput, {
      props: {
        type: "password",
      },
    });

    const input = wrapper.find("input");
    expect(input.attributes("type")).toBe("password");
  });

  // Test 4: CSS variants
  it("applies correct styles for login variant", () => {
    const wrapper = mount(BaseInput, {
      props: {
        variant: "login",
      },
    });

    const input = wrapper.find("input");
    expect(input.classes()).toContain("border-violet-200");
  });

  // Test 5: Profile variant has smaller height
  it("applies smaller height for profile variant", () => {
    const wrapper = mount(BaseInput, {
      props: {
        variant: "profile",
      },
    });

    const input = wrapper.find("input");
    expect(input.classes()).toContain("!h-10");
  });
});
