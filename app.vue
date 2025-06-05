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
import UpButton from "~/components/Common/Button/UpButton";
</script>
