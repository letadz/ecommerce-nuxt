<script setup>
definePageMeta({
  middleware: "auth",
});

const store = useProductsStore();

onMounted(() => {
  console.log("store", store.fetchProducts());
  store.fetchProducts();
});
</script>

<template>
  <PagesHome />
</template>
