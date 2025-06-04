<script setup>
import Sidebar from "~/components/Layouts/Sidebar";
import { useProductsStore } from "@/stores/Products";

const store = useProductsStore();
const products = computed(() => store.getProducts);
</script>

<template>
  <div class="flex gap-8 mx-2 md:mx-16 lg:mx-32">
    <Sidebar />

    <div class="flex-1 min-w-0">
      <Swiper
        v-if="products.length > 1"
        :slides-per-view="1"
        :loop="products.length > 1"
        :pagination="{ clickable: true }"
        :navigation="true"
        :lazy="true"
        :autoplay="{ delay: 3000 }"
      >
        <SwiperSlide v-for="product in products" :key="product.id">
          <div
            class="grid grid-cols-2 gap-4 bg-black text-white p-8 items-center justify-between h-[300px]"
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
                loading="eager"
                class="m-auto w-[100px] md:w-[150px] object-fit"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>
