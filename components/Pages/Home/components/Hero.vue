<script setup>
import { useProductsStore } from "@/stores/Products";
const store = useProductsStore();
const products = computed(() => store.getProducts);
</script>

<template>
  <Swiper
    :slides-per-view="1"
    :loop="true"
    :pagination="{ clickable: true }"
    :navigation="true"
    :autoplay="{ delay: 3000 }"
  >
    <SwiperSlide v-for="product in products.slice(0, 5)" :key="product.id">
      <div
        class="grid grid-cols-2 gap-4 bg-black text-white p-8 items-center justify-between h-[300px] md:h-[400px]"
      >
        <div class="max-w-sm space-y-4">
          <div class="flex items-center gap-2">
            <span class="text-sm">{{ product.title }}</span>
          </div>
          <h2 class="text-3xl md:text-5xl font-bold leading-tight">
            Up to 10%<br />off Voucher
          </h2>
          <button
            class="mt-4 inline-flex items-center gap-2 border-b border-white hover:text-gray-300 transition"
          >
            Shop Now
            <span class="material-icons text-sm">-></span>
          </button>
        </div>

        <div class="bg-transparent hidden md:block">
          <img
            :src="product.image"
            :alt="product.title"
            loading="lazy"
            class="m-auto w-[100px] md:w-[200px] object-fit"
          />
        </div>
      </div>
    </SwiperSlide>
  </Swiper>
</template>
