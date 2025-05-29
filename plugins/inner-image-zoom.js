import InnerImageZoom from "vue-inner-image-zoom";
// import "vue-inner-image-zoom/lib/vue-inner-image-zoom.css";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("InnerImageZoom", InnerImageZoom);
});
