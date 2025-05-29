<script setup>
import ServiceCard from "~/components/Reusable/Cards/ServiceCard";

import { RATINGS } from "~/constants/icon";

const ratings = computed(() =>
  RATINGS.map((rating) => ({
    ...rating,
  }))
);
</script>

<template>
  <div class="flex flex-wrap justify-center gap-6 px-4 my-24">
    <div
      v-for="(rating, index) in ratings"
      :key="index"
      class="border rounded-lg p-6 w-full sm:w-[300px] md:w-[250px] hover:bg-destructive hover:text-white transition-transform duration-300"
    >
      <ServiceCard
        :src="rating.logo"
        :title="rating.title"
        :description="rating.description"
      />
    </div>
  </div>
</template>
