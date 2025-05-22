<script setup>
import Header from "~/components/Layouts/Header";
import Footer from "~/components/Layouts/Footer";
</script>

<template>
  <div class="antialiased w-svw h-svh">
    <div class="flex flex-col flex-1">
      <Header />

      <main class="flex-1">
        <div class="md:py-5 py-4">
          <NuxtPage />
        </div>
      </main>

      <Footer />
    </div>
  </div>
</template>
