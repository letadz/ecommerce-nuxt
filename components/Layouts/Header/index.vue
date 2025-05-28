<script setup>
import SearchInput from "~/components/ui/Inputs/SearchInput";
import FaIcon from "~/components/ui/FaIcon";

const route = useRoute();

const isActive = (path) => route.path === path;
</script>

<template>
  <div class="p-4 border-b border-gray-200">
    <nav class="hidden lg:flex justify-between items-center mx-32">
      <div>
        <h1 class="text-2xl font-bold">Exclusive</h1>
      </div>

      <div class="flex items-center gap-6 md:gap-10 text-lg">
        <NuxtLink
          to="/"
          :class="[
            'transition duration-200 hover:underline hover:underline-offset-8',
            isActive('/')
              ? 'text-black underline underline-offset-8'
              : 'text-gray-500',
          ]"
        >
          Home
        </NuxtLink>
        <NuxtLink
          to="/contact"
          :class="[
            'transition duration-200 hover:underline hover:underline-offset-8',
            isActive('/contact')
              ? 'text-black underline underline-offset-8'
              : 'text-gray-500',
          ]"
        >
          Contact
        </NuxtLink>
        <NuxtLink
          to="/about"
          :class="[
            'transition duration-200 hover:underline hover:underline-offset-8',
            isActive('/about')
              ? 'text-black underline underline-offset-8'
              : 'text-gray-500',
          ]"
        >
          About
        </NuxtLink>
        <NuxtLink
          to="/sign-in"
          :class="[
            'transition duration-200 hover:underline hover:underline-offset-8',
            isActive('/sign-in')
              ? 'text-black underline underline-offset-8'
              : 'text-gray-500',
          ]"
        >
          Sign In
        </NuxtLink>
      </div>

      <div class="flex items-center gap-4">
        <SearchInput placeholder="What are you looking for?" />
        <FaIcon
          icon="heart"
          class="text-gray-500 cursor-pointer hover:text-gray-700 transition duration-200 w-6 h-6"
        />
        <FaIcon
          icon="cart-shopping"
          class="text-gray-500 cursor-pointer hover:text-gray-700 transition duration-200 w-6 h-6"
        />
      </div>
    </nav>
  </div>
</template>
