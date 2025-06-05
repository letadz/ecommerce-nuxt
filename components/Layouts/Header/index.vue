<script setup>
import SearchInput from "~/components/Common/Inputs/SearchInput";

const route = useRoute();
const isActive = (path) => route.path === path;
const store = useAuthStore();
</script>

<template>
  <div class="p-4 border-b border-gray-200">
    <nav
      class="hidden lg:flex justify-between items-center mx-2 md:mx-16 lg:mx-32"
    >
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
          v-if="!store.userDetails?.data?.accessToken"
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

        <button
          v-else
          type="button"
          class="text-sm text-gray-500 transition duration-200 hover:underline hover:underline-offset-8 font-medium"
          @click="store.logout"
        >
          Logout
        </button>
      </div>

      <div class="flex items-center gap-4">
        <SearchInput placeholder="What are you looking for?" />

        <Heart
          class="text-black hover:text-gray-600 cursor-pointer h-4 w-4 transition duration-200"
        />

        <ShoppingCart
          class="text-black hover:text-gray-600 cursor-pointer h-4 w-4 transition duration-200"
        />
      </div>
    </nav>
  </div>
</template>
