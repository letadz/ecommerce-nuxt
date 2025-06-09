<script setup>
import FormInput from "~/components/Common/Inputs/FormInput";
import FormInputIcon from "~/components/Common/Inputs/FormInputIcon";
import Button from "@/components/Common/Button/ColoredButton";

const { $firebase, $router } = useNuxtApp();
const store = useAuthStore();

const email = ref("");
const password = ref("");

const handleGoogleLogin = async (e) => {
  e.preventDefault();

  if (!store.googleUserDetails.error) {
    await store.googleSignIn({
      auth: $firebase.auth,
      provider: $firebase.provider,
    });
  }
};

const handleLogin = async () => {
  await store.signIn({
    email: email.value,
    password: password.value,
  });
};
</script>

<template>
  <div class="grid grid-cols-2 place-items-center mx-32 p-4">
    <div />
    <form class="w-1/2 p-4 shadow-lg rounded-lg" @submit.prevent="handleLogin">
      <h1>Sign In</h1>

      <div class="flex flex-col gap-4 mt-6">
        <FormInput
          id="email"
          v-model="email"
          type="text"
          name="email"
          placeholder="Enter your email"
        />

        <FormInputIcon
          id="password"
          v-model="password"
          type="password"
          placeholder="Password"
          is-show-password
          required
          block
        />

        <Button type="submit" variant="destructive" class="mt-4">
          Sign In
        </Button>

        <a href="#" class="text-xs text-blue-600 hover:text-blue-800 self-end">
          Forgot Password?
        </a>

        <div class="flex items-center gap-4 my-4">
          <hr class="flex-grow border-t border-gray-300" />
          <span class="text-gray-500 text-sm">OR</span>
          <hr class="flex-grow border-t border-gray-300" />
        </div>

        <div
          role="button"
          class="flex justify-center items-center gap-4 border border-gray-300 rounded-lg p-3 cursor-pointer"
          @click="handleGoogleLogin"
        >
          <img src="/icon/google.png" alt="Google" class="w-6 h-6" />

          <span>Google</span>
        </div>

        <span class="text-xs text-gray-900 self-center mt-2">
          Don't have an account?
          <a href="/sign-up" class="text-xs text-blue-600 hover:text-blue-800">
            Sign Up
          </a>
        </span>
      </div>
    </form>
  </div>
</template>
