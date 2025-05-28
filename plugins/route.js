import { defineNuxtPlugin } from "#app";
import { useRoute } from "vue-router";

export default defineNuxtPlugin((nuxtApp) => {
  const route = useRoute();
  nuxtApp.provide("myRoute", route);
});
