<script setup>
import Details from "./components/Details";
import Contact from "./components/Contact";

const { $L } = useNuxtApp();

onMounted(() => {
  const map = $L.map("map").setView([14.585, 121.06], 19);

  $L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors",
  }).addTo(map);

  $L.marker([14.585, 121.06])
    .addTo(map)
    .bindPopup("Executive Office")
    .openPopup();
});
</script>

<template>
  <div class="mx-2 md:mx-16 lg:mx-32">
    <div class="flex flex-col xl:flex-row gap-6">
      <Details />
      <Contact />
    </div>

    <div id="map" class="w-full h-96 mt-10" />
  </div>
</template>
