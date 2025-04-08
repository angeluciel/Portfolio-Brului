import { ref, watch } from "vue";
import { useFormStore } from "@/stores/formStore";

export function useFormField(fieldKey) {
  const formStore = useFormStore();
  const fieldValue = ref(formStore.getAnswer(fieldKey) || "");

  watch(fieldValue, (newVal) => {
    formStore.updateAnswer(fieldKey, newVal);
  });

  return { fieldValue };
}
