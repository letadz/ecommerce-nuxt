<script setup>
import { PERSONS } from "~/constants/profile";

const persons = computed(() => PERSONS);
</script>

<template>
  <div class="mx-2 md:mx-16 lg:mx-32">
    <Swiper
      v-if="persons.length > 1"
      :loop="persons.length > 1"
      :pagination="{ clickable: true }"
      :navigation="true"
      :lazy="true"
      :autoplay="{ delay: 3000 }"
      :breakpoints="{
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }"
    >
      <SwiperSlide v-for="person in persons" :key="person.id">
        <div
          class="flex flex-col flex-wrap items-start justify-center gap-4 text-gray-900 p-4 rounded-lg"
        >
          <img
            :src="person.image"
            :alt="person.title"
            loading="eager"
            class="bg-gray-400 w-full md:w-[350px] h-[350px] object-fit"
          />

          <div class="leading-4">
            <h1 class="text-xl font-semibold">{{ person.name }}</h1>
            <h6 class="text-sm">{{ person.job_position }}</h6>
          </div>

          <div class="flex gap-4">
            <a :href="person.twitter_link">
              <Twitter class="w-4 h-4 cursor-pointer" />
            </a>
            <Instagram class="w-4 h-4 cursor-pointer" />
            <Linkedin class="w-4 h-4 cursor-pointer" />
          </div>
        </div>
      </SwiperSlide>

      <div class="mt-12" />
    </Swiper>
  </div>
</template>
