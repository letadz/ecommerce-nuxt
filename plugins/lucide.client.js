import { defineNuxtPlugin } from "#app";
import {
  Heart,
  ShoppingCart,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-vue-next";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("Heart", Heart);
  nuxtApp.vueApp.component("ShoppingCart", ShoppingCart);
  nuxtApp.vueApp.component("Twitter", Twitter);
  nuxtApp.vueApp.component("Instagram", Instagram);
  nuxtApp.vueApp.component("Linkedin", Linkedin);
});
