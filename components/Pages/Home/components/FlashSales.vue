<script setup>
import { useProductsStore } from "@/stores/Products";
const store = useProductsStore();
const products = computed(() => store.getProducts);
</script>

<template>
  <Section class="my-12">
    <div class="flex items-center gap-4">
      <div class="rounded-md w-6 h-10 bg-red-500" />
      <h2 class="text-base font-bold text-red-500">Today's</h2>
    </div>

    <div class="my-8">
      <h2 class="text-3xl md:text-5xl font-bold leading-tight">Flash Sales</h2>
      <p class="text-gray-500 text-sm">Limited time offer. Hurry up!</p>
    </div>
  </Section>
</template>
