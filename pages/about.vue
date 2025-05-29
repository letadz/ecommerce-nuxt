<script setup>
import Wrapper from "~/components/Reusable/Wrapper";
</script>

<template>
  <Wrapper previousPath="Home" currentPath="About">
    <template #content>
      <PagesAbout />
    </template>
  </Wrapper>
</template>
