<script setup>
import Wrapper from "~/components/ui/Wrapper";
</script>

<template>
  <Wrapper previousPath="Home" currentPath="Contact">
    <template #content>
      <PagesContact />
    </template>
  </Wrapper>
</template>
