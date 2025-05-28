<script setup>
import Wrapper from "~/components/ui/Wrapper";
</script>

<template>
  <Wrapper previousPath="Home" currentPath="Error">
    <template #content>
      <PagesError />
    </template>
  </Wrapper>
</template>
