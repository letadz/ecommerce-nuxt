<script setup>
import FaIcon from "~/components/Common/FaIcon";

const showIcon = ref(false);

const handleScroll = () => {
  showIcon.value = window.scrollY > 100;
};

const handleClick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

onMounted(() => {
  handleScroll();
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <Transition
    enter-active-class="transition-opacity duration-300 ease-out"
    leave-active-class="transition-opacity duration-300 ease-in"
    enter-from-class="opacity-0"
    leave-to-class="opacity-0"
  >
    <div
      v-if="showIcon"
      class="fixed bottom-4 right-4 z-50 bg-destructive hover:bg-destructive/90 rounded-full p-2 shadow-lg"
    >
      <FaIcon
        icon="chevron-up"
        class="text-white h-6 w-6 cursor-pointer"
        @click="handleClick"
      />
    </div>
  </Transition>
</template>
