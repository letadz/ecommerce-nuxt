<script setup>
import FormInput from "~/components/Common/Inputs/FormInput";
import FormInputIcon from "~/components/Common/Inputs/FormInputIcon";
import Button from "@/components/Common/Button/ColoredButton";

const { $toast } = useNuxtApp();
const store = useAuthStore();

const email = ref("");
const password = ref("");

const handleSignUp = (e) => {
  e.preventDefault();

  if (!email.value || !password.value) {
    return $toast.error("Fill in the fields");
  }

  store.signUp({
    email: email.value,
    password: password.value,
  });
};
</script>

<template>
  <div class="grid grid-cols-2 place-items-center mx-32 p-4">
    <div />
    <form class="w-1/2 p-4 shadow-lg rounded-lg" @submit="handleSignUp">
      <h1>Sign Up</h1>

      <div class="flex flex-col gap-4 mt-6">
        <FormInput
          id="email"
          v-model="email"
          type="email"
          name="email"
          placeholder="Email"
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
          Sign Up
        </Button>

        <div class="flex items-center gap-4 my-4">
          <hr class="flex-grow border-t border-gray-300" />
          <span class="text-gray-500 text-sm">OR</span>
          <hr class="flex-grow border-t border-gray-300" />
        </div>

        <div id="g_id_signin" />

        <span class="text-xs text-gray-900 self-center">
          Already have account?
          <a href="/sign-in" class="text-xs text-blue-600 hover:text-blue-800">
            Sign In
          </a>
        </span>
      </div>
    </form>
  </div>
</template>
