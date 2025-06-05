<script setup>
import CustomCard from "@/components/Common/Cards/CustomCard";

import { CATEGORIES, CATEGORIES_SECONDARY } from "@/constants/icon";

const categories = computed(() =>
  CATEGORIES.map((category) => ({
    ...category,
  }))
);

const hoveredCategoryIndex = ref(null);

const setHoveredCategory = (index) => {
  hoveredCategoryIndex.value = index;
};

const clearHoveredCategory = () => {
  hoveredCategoryIndex.value = null;
};

const getCategoryLogo = (category, index) => {
  if (hoveredCategoryIndex.value === index) {
    const secondaryCategory = CATEGORIES_SECONDARY.find(
      (e) => e.title === category.title
    );
    return secondaryCategory ? secondaryCategory.logo : category.logo;
  }
  return category.logo;
};
</script>

<template>
  <CustomCard
    title="Categories"
    description="Browse By Category"
    class="my-12 mx-2 md:mx-16 lg:mx-32"
  >
    <template #content>
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6 gap-4 justify-between items-center p-4"
      >
        <div
          role="button"
          v-for="(category, index) of categories"
          :key="index"
          class="border rounded-lg p-4 mx-auto w-[200px] hover:bg-destructive hover:text-white transition-transform duration-300"
          @mouseenter="setHoveredCategory(index)"
          @mouseleave="clearHoveredCategory"
        >
          <img
            :src="getCategoryLogo(category, index)"
            :alt="category.title"
            class="m-auto w-12 h-12 object-cover mb-4 rounded-md"
            loading="eager"
          />
          <h6 class="text-center">
            {{ category.title }}
          </h6>
        </div>
      </div>
    </template>
  </CustomCard>
</template>
