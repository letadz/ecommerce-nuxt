<script setup>
defineProps({
  icon: {
    type: String,
    required: true,
  },
  spin: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <font-awesome-icon
    :icon="['fa', icon]"
    class="flex-shrink-0"
    :class="{ 'fa-spin': spin }"
  />
</template>
