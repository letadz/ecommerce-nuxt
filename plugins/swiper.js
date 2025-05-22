import { defineNuxtPlugin } from "#app";
import { Swiper, SwiperSlide } from "swiper/vue";

// ✅ Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// ✅ Import modules properly from swiper/modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import SwiperCore from "swiper";

// ✅ Install modules
SwiperCore.use([Navigation, Pagination, Autoplay]);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("Swiper", Swiper);
  nuxtApp.vueApp.component("SwiperSlide", SwiperSlide);
});
