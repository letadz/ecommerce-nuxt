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
      <h1 class="text-2xl font-semibold">{{ title }}</h1>
      <h6 class="text-sm">{{ description }}</h6>
    </div>
  </div>
</template>
