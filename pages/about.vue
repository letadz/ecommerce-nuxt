<script setup>
import Wrapper from "~/components/ui/Wrapper";
</script>

<template>
  <Wrapper previousPath="Home" currentPath="About">
    <template #content>
      <PagesAbout />
    </template>
  </Wrapper>
</template>
