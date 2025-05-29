<script setup>
import Button from "@/components/Reusable/Button/ColoredButton";
</script>

<template>
  <div class="flex justify-center">
    <div class="flex flex-col items-center gap-4 mt-20">
      <h1 class="text-4xl font-bold text-gray-900">404 - Page Not Found</h1>
      <p class="text-lg text-gray-600">
        The page you are looking for does not exist.
      </p>

      <Button variant="destructive"> Go back to Home </Button>
    </div>
  </div>
</template>
