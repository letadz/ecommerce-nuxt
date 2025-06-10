<script setup>
import { useProductsStore } from "@/stores/Products";

import Button from "@/components/Common/Button/ColoredButton";
import CustomCard from "@/components/Common/Cards/CustomCard";
import FaIcon from "@/components/Common/FaIcon";

const store = useProductsStore();
const products = computed(() => store.getProducts);
</script>

<template>
  <CustomCard title="Today's" description="Flash Sales" class="mt-24 ml-32">
    <template #custom-button>
      <button
        class="swiper-button-prev-custom p-3 rounded-full bg-gray-200 hover:bg-gray-300 transition"
      >
        <FaIcon icon="arrow-left" class="h-4 w-4 text-gray-700" />
      </button>
      <button
        class="swiper-button-next-custom p-3 rounded-full bg-gray-200 hover:bg-gray-300 transition"
      >
        <FaIcon icon="arrow-right" class="h-4 w-4 text-gray-700" />
      </button>
    </template>

    <template #content>
      <Swiper
        :slides-per-view="4"
        :space-between="20"
        :lazy="true"
        :navigation="{
          prevEl: '.swiper-button-prev-custom',
          nextEl: '.swiper-button-next-custom',
        }"
        ref="swiperRef"
      >
        <SwiperSlide v-for="product in products" :key="product.id">
          <div class="bg-gray-100 shadow-sm p-4 h-full">
            <div class="!flex-shrink-0">
              <img
                :src="product.image"
                :alt="product.title"
                class="m-auto w-40 h-40 object-cover mb-4 rounded-md"
                loading="eager"
              />
            </div>
            <div>
              <h6 class="truncate font-medium">
                {{ product.title }}
              </h6>
            </div>

            <div class="flex-shrink-0 mt-2">
              <p class="text-red-500 font-bold">₱ {{ product.price }}</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </template>

    <template #button>
      <Button :variant="'destructive'" class="mt-10">View All Products</Button>
    </template>
  </CustomCard>

  <!-- <Section class="my-24 ml-32 border-b border-gray-200 pb-12">
    <div class="flex items-center gap-4">
      <div class="rounded-md w-6 h-10 bg-destructive" />
      <h2 class="text-base font-bold text-red-500">Today's</h2>
    </div>

    <div class="my-8 flex justify-between items-center">
      <div>
        <h2 class="text-3xl md:text-5xl font-bold leading-tight">
          Flash Sales
        </h2>
        <p class="text-gray-500 text-sm">Limited time offer. Hurry up!</p>
      </div>
      <div class="flex gap-4 mr-32">
        <button
          class="swiper-button-prev-custom p-3 rounded-full bg-gray-200 hover:bg-gray-300 transition"
        >
          <FaIcon icon="arrow-left" class="h-4 w-4 text-gray-700" />
        </button>
        <button
          class="swiper-button-next-custom p-3 rounded-full bg-gray-200 hover:bg-gray-300 transition"
        >
          <FaIcon icon="arrow-right" class="h-4 w-4 text-gray-700" />
        </button>
      </div>
    </div>

    <div>
      <Swiper
        :slides-per-view="4"
        :space-between="20"
        :lazy="true"
        :navigation="{
          prevEl: '.swiper-button-prev-custom',
          nextEl: '.swiper-button-next-custom',
        }"
        ref="swiperRef"
      >
        <SwiperSlide v-for="product in products" :key="product.id">
          <div class="bg-gray-100 shadow-sm p-4 h-full">
            <div class="!flex-shrink-0">
              <img
                :src="product.image"
                :alt="product.title"
                class="m-auto w-40 h-40 object-cover mb-4 rounded-md"
                loading="eager"
              />
            </div>
            <div>
              <h6 class="truncate font-medium">
                {{ product.title }}
              </h6>
            </div>

            <div class="flex-shrink-0 mt-2">
              <p class="text-red-500 font-bold">₱ {{ product.price }}</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>

    <div class="grid place-items-center">
      <button
        class="mt-10 px-6 py-4 bg-destructive text-white rounded-md hover:bg-red-600 transition"
      >
        View All Products
      </button>
    </div>
  </Section> -->
</template>
