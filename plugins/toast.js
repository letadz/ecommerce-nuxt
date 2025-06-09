// plugins/vue3-toastify.client.ts
import Vue3Toastify, { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

export default defineNuxtPlugin((nuxtApp) => {
  const options = {
    position: toast.POSITION.BOTTOM_LEFT,
    theme: "colored",
  };

  nuxtApp.vueApp.use(Vue3Toastify, options);

  return {
    provide: {
      toast: toast,
    },
  };
});
