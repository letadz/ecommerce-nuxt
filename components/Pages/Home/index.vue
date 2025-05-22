<script setup>
import Hero from "./components/Hero";
import FlashSales from "./components/FlashSales";
</script>

<template>
  <div>
    <div class="w-full max-w-6xl mx-auto py-8">
      <Hero />
    </div>
    <FlashSales />
    <!-- <Carousel v-bind="carouselConfig" class="rounded-lg overflow-hidden">
      <Slide v-for="product in products" :key="product.id">
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
 
          <div class="hidden md:block">
            <img
              :src="product.image"
              alt="Product"
              class="w-[200px] md:w-[300px]"
            />
          </div>
        </div>
      </Slide>

      <template #addons>
        <Pagination />
      </template>
    </Carousel> -->
  </div>
</template>
