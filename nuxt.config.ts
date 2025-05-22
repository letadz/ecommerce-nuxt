import dotenv from "dotenv";
dotenv.config();

export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
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
    },
  },
  css: [
    "~/assets/scss/base/_fonts.scss",
    "~/assets/scss/app.scss",
    "animate.css",
    "vue3-carousel/dist/carousel.css",
  ],
  modules: ["shadcn-nuxt", "@pinia/nuxt", "@nuxtjs/tailwindcss"],
  pinia: {
    storesDirs: ["./stores/**"],
  },
  tailwindcss: {
    config: {
      content: [
        "./components/**/*.{vue,js,ts}",
        "./layouts/**/*.{vue,js,ts}",
        "./pages/**/*.{vue,js,ts}",
        "./app.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
      ],
      theme: {
        extend: {
          colors: {
            primary: "#6366f1",
            secondary: "#f3f4f6",
            destructive: "#ef4444",
            ring: "#6366f1",
            accent: "#f1f5f9",
            background: "#ffffff",
            input: "#d1d5db",
          },
        },
      },
      plugins: [],
    },
  },

  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.NUXT_PUBLIC_API_BASE_URL,
      supabaseUrl: process.env.NUXT_PUBLIC_SUPABASE_URL,
      supabaseKey: process.env.NUXT_PUBLIC_SUPABASE_KEY,
    },
  },
});
