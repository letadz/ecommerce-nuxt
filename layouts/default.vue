<script setup>
import Header from "~/components/Layouts/Header";
import Footer from "~/components/Layouts/Footer";
</script>

<template>
  <div class="antialiased">
    <div class="flex flex-col flex-1 h-screen">
      <Header />

      <main class="flex flex-col flex-1 my-6">
        <NuxtPage />
      </main>

      <Footer />
    </div>
  </div>
</template>
