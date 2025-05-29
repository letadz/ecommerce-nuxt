<script setup>
import Wrapper from "~/components/Reusable/Wrapper";
</script>

<template>
  <Wrapper previousPath="Home" currentPath="Contact">
    <template #content>
      <PagesContact />
    </template>
  </Wrapper>
</template>
