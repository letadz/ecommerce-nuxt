<script setup>
const store = useProductsStore();

onMounted(() => {
  store.fetchProducts();
});
</script>

<template>
  <PagesHome />
</template>
