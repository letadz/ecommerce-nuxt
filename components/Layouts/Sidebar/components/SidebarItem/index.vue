<script setup>
import SidebarSingleItem from "./components/SingleItem/SidebarSingleItem";
import SidebarNestedItem from "./components/NestedItem/SidebarNestedItem";

import { useSidebarItemProps } from "~/composables/SidebarItemComposable";

defineProps(useSidebarItemProps());
</script>

<template>
  <div>
    <SidebarSingleItem v-if="!children" :title="title" :to="to" :icon="icon" />

    <SidebarNestedItem
      v-else
      :title="title"
      :to="to"
      :icon="icon"
      :children="children"
    />
  </div>
</template>
