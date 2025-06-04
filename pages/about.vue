<script setup>
import Wrapper from "~/components/Common/Wrapper";

definePageMeta({
  middleware: "auth",
});
</script>

<template>
  <Wrapper previousPath="Home" currentPath="About">
    <template #content>
      <PagesAbout />
    </template>
  </Wrapper>
</template>
