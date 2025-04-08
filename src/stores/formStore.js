import { defineStore } from "pinia";

export const useFormStore = defineStore("form", {
  state: () => ({
    // Hold the  answers keyed by form identifier
    answers: {},
  }),
  actions: {
    // Save or update an answer for a specific form
    updateAnswer(formId, answer) {
      this.answers[formId] = answer;
    },
    getAnswer(formId) {
      return this.answers[formId] || "";
    },
  },
});
