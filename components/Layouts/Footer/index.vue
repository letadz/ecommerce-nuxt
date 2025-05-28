<script setup>
import EmailInput from "~/components/ui/Inputs/EmailInput";

// const date = new Date();
// const year = date.getFullYear();
</script>

<template>
  <div class="flex flex-col justify-center items-center bg-black p-2 md:p-4">
    <footer
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mx-4 md:mx-10 my-14 text-white justify-center"
    >
      <!-- EXCLUSIVE -->
      <div class="flex flex-col items-start gap-4">
        <h1 class="text-lg font-bold">Exclusive</h1>

        <h2 class="text-md font-bold">Subscribe</h2>

        <h3>Get 10% off your first order</h3>

        <EmailInput placeholder="Enter your email" />
      </div>

      <!-- SUPPORT -->
      <div class="flex flex-col items-start gap-4">
        <h1 class="text-lg font-bold">Support</h1>

        <h3 class="text-md word-break">
          Omm Citra Building, Pasig City, Metro Manila, Philippines
        </h3>

        <h3>exclusive@gmail.com</h3>
        <h3>+63 912 345 7890</h3>
      </div>

      <!-- ACCOUNT -->
      <div class="flex flex-col items-start gap-4">
        <h1 class="text-lg font-bold">Account</h1>

        <NuxtLink
          to="/sign-in"
          class="transition duration-200 hover:text-gray-300"
        >
          Login / Register
        </NuxtLink>

        <NuxtLink
          to="/cart"
          class="transition duration-200 hover:text-gray-300"
        >
          Cart
        </NuxtLink>

        <NuxtLink
          to="/wishlist"
          class="transition duration-200 hover:text-gray-300"
        >
          Wishlist
        </NuxtLink>

        <NuxtLink
          to="/shop"
          class="transition duration-200 hover:text-gray-300"
        >
          Shop
        </NuxtLink>
      </div>

      <!-- QUICK LINKS -->
      <div class="flex flex-col items-start gap-4">
        <h1 class="text-lg font-bold">Quick Links</h1>

        <NuxtLink
          to="/privacy-policy"
          class="transition duration-200 hover:text-gray-300"
        >
          Privacy Policy
        </NuxtLink>

        <NuxtLink
          to="/terms-of-use"
          class="transition duration-200 hover:text-gray-300"
        >
          Terms of Use
        </NuxtLink>

        <NuxtLink to="/faq" class="transition duration-200 hover:text-gray-300">
          FAQ
        </NuxtLink>

        <NuxtLink
          to="/contact"
          class="transition duration-200 hover:text-gray-300"
        >
          Contact
        </NuxtLink>
      </div>

      <!-- DOWNLOAD APP -->
      <div class="flex flex-col items-start gap-4">
        <h1 class="text-lg font-bold">Download App</h1>

        <h4 class="text-sm text-gray-400 font-medium">
          Save ₱150 with App New User Only
        </h4>

        <div class="flex items-center gap-4">
          <img src="/public/icon/qr-code.png" alt="QR Code" class="w-[6rem]" />

          <div class="flex flex-col items-start gap-4">
            <img
              src="/public/icon/google-play.png"
              alt="Google Play"
              class="w-[7rem]"
            />

            <img
              src="/public/icon/app-store.png"
              alt="App Store"
              class="w-[7rem]"
            />
          </div>
        </div>
      </div>
    </footer>

    <span class="text-xs text-gray-400">
      © Copyright Exclusive {{ new Date().getFullYear() }}. All right
      reserved</span
    >
  </div>
</template>
