import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    userDetails: {
      user: null,
    },
  }),
  actions: {},
});
