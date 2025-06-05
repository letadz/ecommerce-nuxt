<script setup>
import SidebarItem from "./components/SidebarItem";
import { SIDEBAR_ITEMS } from "~/constants/sidebar-items";

const sidebarItems = computed(() =>
  SIDEBAR_ITEMS.map((item) => ({
    ...item,
    children: item.children ? [...item.children] : undefined,
  }))
);
</script>

<template>
  <div class="w-[200px] border-r border-gray-200">
    <SidebarItem
      v-for="({ title, icon, to, children }, index) in sidebarItems"
      :key="index"
      :title="title"
      :icon="icon"
      :to="to"
      :children="children"
    />
  </div>
</template>
