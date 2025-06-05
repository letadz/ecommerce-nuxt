<template>
  <div
    v-if="isLoading"
    class="fixed inset-0 z-[9999] flex items-center justify-center bg-white transition-opacity duration-500"
    :class="{ 'opacity-0 invisible': !isLoading }"
  >
    <div class="flex flex-col items-center gap-8">
      <div
        class="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-red-500"
      />
      <div class="text-xl font-semibold text-gray-700">Loading...</div>
    </div>
  </div>
</template>

<script setup>
const isLoading = ref(true);

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 500);
});
</script>
