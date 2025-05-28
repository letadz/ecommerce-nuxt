<script setup>
const props = defineProps({
  previousPath: {
    type: String,
    default: "",
  },
  currentPath: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div>
    <div class="mx-0 md:mx-32 p-4">
      <NuxtLink to="/" class="text-sm tracking-wide font-medium text-gray-500">
        {{ previousPath }} /
      </NuxtLink>
      <span class="text-sm tracking-wide font-medium text-gray-800">
        {{ currentPath }}
      </span>
    </div>

    <div class="mx-auto">
      <div class="my-4 bg-white">
        <slot name="content" />
      </div>
    </div>
  </div>
</template>
