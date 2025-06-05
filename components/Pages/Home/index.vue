<script setup>
import Hero from "./components/Hero";
import FlashSales from "./components/FlashSales";
import Category from "./components/Category";
import Services from "./components/Services";
</script>

<template>
  <Hero />

  <FlashSales />
  <Category />
  <Services />

  <!-- <div class="my-product-page">
    <h1 class="text-3xl font-bold mb-6">Awesome Product</h1>

    <div
      class="product-image-wrapper w-[250px] h-[350px] mx-auto border rounded-lg shadow-md overflow-hidden"
    >
      <ClientOnly>
        <InnerImageZoom
          src="/images/about-us.png"
          zoomSrc="/images/about-us.png"
          :zoomScale="2"
          zoomType="hover"
          moveType="pan"
          :fadeDuration="150"
          :hideHint="true"
          class="w-full h-full object-contain"
        />
        <template #fallback>
          <img
            src="/loading.gif"
            alt="Loading image..."
            class="w-full h-full object-contain"
          />
        </template>
      </ClientOnly>
    </div>

    <p class="text-center mt-4 text-gray-600">
      Hover over the image to zoom in!
    </p>
  </div> -->
</template>
