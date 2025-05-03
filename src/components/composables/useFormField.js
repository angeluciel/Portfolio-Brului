import { ref, readonly } from "vue";

function useState(initialValue) {
  const state = ref(initialValue);

  const setState = (newValue) => {
    if (typeof newValue === "function") {
      state.value = newValue(state.value);
    } else {
      state.value = newValue;
    }
  };

  return [readonly(state), setState];
}
