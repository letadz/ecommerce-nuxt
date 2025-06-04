<script setup>
import Wrapper from "~/components/Common/Wrapper";

definePageMeta({
  middleware: "auth",
});

</script>

<template>
  <Wrapper previousPath="Home" currentPath="Contact">
    <template #content>
      <PagesContact />
    </template>
  </Wrapper>
</template>
