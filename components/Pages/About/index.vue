<script setup>
import OurStory from "./components/OurStory";
import Ratings from "./components/Ratings";
import Positions from "./components/Positions";
import Services from "./components/Services";
</script>

<template>
  <div
    class="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10"
  >
    <OurStory />

    <div>
      <img
        src="/images/about-us.png"
        alt="About Us"
        class="w-full h-3/5 px-4 md:p-0 rounded-lg object-cover"
        draggable="false"
      />
    </div>
  </div>

  <Ratings />
  <Positions />
  <Services />
</template>
