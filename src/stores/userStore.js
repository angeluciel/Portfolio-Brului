import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    isLoggedIn: false,
    username: "",
    profilePictureUrl: "",
  }),

  getter: {
    hasProfilePicture(state) {
      return state.profilePictureUrl !== "";
    },
  },

  actions: {
    logIn(username, profilePictureUrl) {
      this.isLoggedIn = true;
      this.username = username;
      this.profilePictureUrl = profilePictureUrl;
    },

    logOut() {
      this.isLoggedIn = false;
      this.username = "";
      this.profilePictureUrl = "";
    },
  },
});
