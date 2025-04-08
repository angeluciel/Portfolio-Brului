// src/stores/user.js
import { defineStore } from "pinia";

export const useMailStore = defineStore("user", {
  state: () => ({
    email: "",
  }),
  actions: {
    setEmail(newEmail) {
      this.email = newEmail;
    },
  },
});
