<script setup>
defineProps({
  src: {
    type: String,
    default: "",
  },
  alt: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div class="flex flex-col justify-center items-center gap-4 w-full">
    <img
      :src="src"
      :alt="alt"
      class="w-24 h-24 rounded-full object-cover"
      draggable="false"
    />

    <div class="text-center">
      <h2 class="text-lg font-semibold text-gray-900">{{ title }}</h2>
      <span class="text-sm text-gray-900">{{ description }}</span>
    </div>
  </div>
</template>
