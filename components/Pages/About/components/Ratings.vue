<script setup>
import ServiceCard from "~/components/Common/Cards/ServiceCard";

import { RATINGS, RATINGS_SECONDARY } from "~/constants/icon";

const ratings = computed(() =>
  RATINGS.map((rating) => ({
    ...rating,
  }))
);

const hoveredRatingIndex = ref(null);

const setHoveredRating = (index) => {
  hoveredRatingIndex.value = index;
};

const clearHoveredRating = () => {
  hoveredRatingIndex.value = null;
};

const getRatingLogo = (rating, index) => {
  if (hoveredRatingIndex.value === index) {
    const secondaryRating = RATINGS_SECONDARY.find(
      (e) => e.title === rating.title
    );
    return secondaryRating ? secondaryRating.logo : rating.logo;
  }
  return rating.logo;
};
</script>

<template>
  <div class="flex flex-wrap justify-center gap-6 px-4 my-14 lg:my-24">
    <div
      v-for="(rating, index) in ratings"
      :key="index"
      class="border rounded-lg p-6 w-full sm:w-[300px] md:w-[250px] hover:bg-destructive text-gray-900 hover:text-white transition-transform duration-300"
      @mouseenter="setHoveredRating(index)"
      @mouseleave="clearHoveredRating"
    >
      <ServiceCard
        :src="getRatingLogo(rating, index)"
        :title="rating.title"
        :description="rating.description"
        loading="eager"
      />
    </div>
  </div>
</template>
