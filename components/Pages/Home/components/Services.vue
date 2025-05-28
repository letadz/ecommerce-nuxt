<script setup>
import ServiceCard from "~/components/ui/Cards/ServiceCard";

import { SERVICES } from "~/constants/icon";

const services = computed(() =>
  SERVICES.map((service) => ({
    ...service,
  }))
);
</script>

<template>
  <div class="flex flex-wrap justify-center gap-6 md:gap-14 px-4 my-16">
    <div v-for="(service, index) in services" :key="index">
      <ServiceCard
        :src="service.logo"
        :title="service.title"
        :description="service.description"
      />
    </div>
  </div>
</template>
