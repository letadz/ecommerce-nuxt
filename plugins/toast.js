// plugins/toast.js
import ToastPlugin from "vue-toastification";
import "vue-toastification/dist/index.css";

export default defineNuxtPlugin((nuxtApp) => {
  const options = {
    position: "bottom-left",
    timeout: 3000,
    draggablePercent: 0.6,
    rtl: false,
  };

  nuxtApp.vueApp.use(ToastPlugin, options);

  const { useToast } = ToastPlugin;
  nuxtApp.provide("toast", useToast());
});
