<script setup>
import SidebarSingleItem from "../SingleItem/SidebarSingleItem";
import FaIcon from "~/components/Common/FaIcon";

import { useSidebarItemProps } from "~/composables/SidebarItemComposable";

const { $myRoute } = useNuxtApp();

const props = defineProps(useSidebarItemProps());

const showChild = ref(false);

watch($myRoute, (newRoute) => {
  showChild.value = props.children
    .map((child) => child.to)
    .includes(newRoute.path);
});

onMounted(() => {
  showChild.value = props.children
    .map((child) => child.to)
    .includes($myRoute.path);
});
</script>

<template>
  <div :class="[mobile ? 'text-base' : 'text-md']">
    <a
      class="flex items-center justify-between px-2 py-2 font-medium rounded-md text-gray-900 cursor-pointer"
      @click="showChild = !showChild"
    >
      <div class="flex items-center gap-4">
        {{ title }}
        <FaIcon
          v-if="icon"
          :icon="'chevron-right'"
          :class="[
            'text-gray-900 flex-shrink-0 h-3 w-3 transition-transform duration-300 ease-in-out',
            { 'rotate-90': showChild },
          ]"
        />
      </div>
    </a>

    <div v-show="showChild" class="flex-row">
      <SidebarSingleItem
        v-for="(child, index) in children"
        :key="index"
        class="flex justify-start pl-8 items-center transition-transform duration-300 ease-in-out"
        :to="child.to"
        :title="child.title"
      />
    </div>
  </div>
</template>
