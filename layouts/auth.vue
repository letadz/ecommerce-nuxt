<script setup>
// import Header from "~/components/Layouts/Header";
import Footer from "~/components/Layouts/Footer";
</script>

<template>
  <div class="antialiased">
    <div class="flex flex-col flex-1 h-screen">
      <!-- <Header /> -->

      <div class="p-4 border-b border-gray-200">
        <div class="mx-32">
          <h1 class="text-2xl font-bold">Exclusive</h1>
        </div>
      </div>
      <main class="flex flex-col flex-1 my-6">
        <NuxtPage />
      </main>

      <Footer />
    </div>
  </div>
</template>
