import dotenv from "dotenv";
dotenv.config();

export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  // devtools: { enabled: process.env.NODE_ENV == "dev" },
  devtools: { enabled: true },
  // ssr: false,
  app: {
    head: {
      title: "E-commerce",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: "E-commerce" },
        { name: "author", content: "Letadz" },
        { name: "keywords", content: "E-commerce" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
      script: [
        {
          src: "https://accounts.google.com/gsi/client",
          async: true,
          defer: true,
        },
      ],
    },
  },
  css: [
    "~/assets/scss/base/_fonts.scss",
    "~/assets/scss/app.scss",
    "animate.css",
    "vue3-carousel/dist/carousel.css",
  ],
  modules: ["@pinia/nuxt", "@nuxtjs/tailwindcss"],
  pinia: {
    storesDirs: ["./stores/**"],
  },
  components: true,

  runtimeConfig: {
    public: {
      apiBaseUrl:
        process.env.NUXT_PUBLIC_API_BASE_URL || "https://fakestoreapi.com",
      supabaseUrl: process.env.NUXT_PUBLIC_SUPABASE_URL,
      supabaseKey: process.env.NUXT_PUBLIC_SUPABASE_KEY,
      googleClientId:
        process.env.NUXT_PUBLIC_CLIENT_ID ||
        "159151109716-3r65mu5rvonifut819ujchia558v31h3.apps.googleusercontent.com",
    },
  },
});
