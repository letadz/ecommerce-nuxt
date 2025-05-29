<script setup>
defineProps({
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
  <section class="border-b border-gray-200 pb-12">
    <div class="flex items-center gap-3">
      <div class="rounded-md w-5 h-10 bg-destructive" />
      <h2 class="text-base font-bold text-red-500">{{ title }}</h2>
    </div>

    <div class="my-6 flex justify-between items-center">
      <div>
        <h2 class="text-2xl md:text-3xl font-semibold leading-tight">
          {{ description }}
        </h2>
      </div>

      <div class="flex gap-4 mr-32">
        <slot name="custom-button" />
      </div>
    </div>

    <slot name="content" />

    <div class="grid place-items-center">
      <slot name="button" />
    </div>
  </section>
</template>
