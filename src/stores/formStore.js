import { defineStore } from "pinia";

export const useFormStore = defineStore("formStore", {
  state: () => ({
    step1: {
      phone: "",
      email: "",
      twitter: "",
      instagram: "",
    },
    step2: {
      colorPalette: "",
      physicalTraits: "",
      pane: "",
      referenceImages: [],
    },
    step3: {
      pose: "",
      emotion: "",
      extraDetails: "",
      referenceImages: "",
    },
    step4: {
      mainDetails: "",
      warning: "",
      extraPreferences: "",
      extraComments: "",
    },
  }),
  getters: {
    isStep1Complete: (state) => {
      return state.step1.email !== "";
    },
  },

  actions: {
    setStep1(data) {
      this.step1 = data;
    },
    setStep2(data) {
      this.step2 = data;
    },
    setStep3(data) {
      this.step3 = data;
    },
    setStep4(data) {
      this.step4 = data;
    },
  },
});
