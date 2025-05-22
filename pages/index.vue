<script setup>
const store = useProductsStore();

onMounted(() => {
  store.fetchProducts();
});
</script>

<template>
  <template>
    <PagesHome />
  </template>
</template>
