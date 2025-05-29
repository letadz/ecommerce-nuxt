import { defineNuxtPlugin } from "#app";
import { Heart, ShoppingCart } from "lucide-vue-next";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("Heart", Heart);
  nuxtApp.vueApp.component("ShoppingCart", ShoppingCart);
});
