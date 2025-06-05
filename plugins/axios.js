import axios from "axios";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  const api = axios.create({
    baseURL: config.public.apiBaseUrl,
  });

  api.interceptors.request.use((config) => {
    console.log("config", config);
    return config;
  });

  nuxtApp.provide("api", api);
});
