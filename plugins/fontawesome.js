import { library, config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
// import {  } from "@fortawesome/free-brands-svg-icons";
import {
  faShoppingCart,
  faMagnifyingGlass,
  faPaperPlane,
  faHeart,
  faCartShopping,
  faArrowRight,
  faArrowLeft,
  faChevronRight,
  faChevronDown,
  faChevronLeft,
  faUsersCog,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faShoppingCart,
  faMagnifyingGlass,
  faPaperPlane,
  faHeart,
  faCartShopping,
  faArrowRight,
  faArrowLeft,
  faChevronRight,
  faChevronDown,
  faChevronLeft,
  faUsersCog
);

config.autoAddCss = false;

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("font-awesome-icon", FontAwesomeIcon);
});
