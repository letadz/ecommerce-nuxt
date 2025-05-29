<template>
  <div>
    <SplashScreen />

    <UpButton />

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
import SplashScreen from "~/components/SplashScreen";
import UpButton from "~/components/Reusable/Button/UpButton";
</script>
