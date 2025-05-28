<script setup>
import { useSidebarItemProps } from "~/composables/SidebarItemComposable";

const { $store, $myRoute } = useNuxtApp();

const props = defineProps(useSidebarItemProps());

const sidebarItemClass = computed(() => {
  return $myRoute.path === props.to
    ? "bg-gray-100 text-gray-900"
    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100";
});

const toggleSidebar = (type) => {
  type === "close"
    ? $store.commit("SET_SIDEBAR_STATE", false)
    : $store.commit("SET_SIDEBAR_STATE", true);
};
</script>

<template>
  <NuxtLink
    :to="to"
    :class="[mobile ? 'text-base' : 'text-sm', sidebarItemClass]"
    class="group flex items-center px-2 py-1.5 font-medium rounded-md text-gray-900"
    @click="toggleSidebar('close')"
  >
    {{ title }}
  </NuxtLink>
</template>
