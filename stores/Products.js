import { defineStore } from "pinia";

export const useProductsStore = defineStore("products", {
  state: () => ({
    products: [],
    fetch: false,
    error: null,
  }),
  getters: {
    getProducts: (state) => {
      if (state.products.length > 0) {
        return state.products.map((product) => {
          return { ...product };
        });
      }
      return [];
    },
  },
  actions: {
    async fetchProducts() {
      this.fetch = true;
      this.error = null;
      try {
        const response = await useNuxtApp().$api.get("/products");
        this.products = response.data;
        console.log("Products fetched successfully:", this.products);
      } catch (error) {
        this.error = error;
        console.log("error", error);
      } finally {
        this.fetch = false;
      }
    },
  },
});
