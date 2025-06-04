<script setup>
definePageMeta({
  layout: "auth",
  middleware: "auth",
});

const store = useProductsStore();

onMounted(() => {
  store.fetchProducts();
});
</script>

<template>
  <PagesHome />
</template>
