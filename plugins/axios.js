import axios from "axios";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  const instance = axios.create({
    baseURL: config.public.apiBaseUrl,
  });

  instance.interceptors.request.use((config) => {
    return config;
  });

  nuxtApp.provide("axios", instance);
});
