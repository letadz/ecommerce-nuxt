<script setup>
import FormInput from "~/components/Common/Inputs/FormInput";
import FormInputIcon from "~/components/Common/Inputs/FormInputIcon";
import Button from "@/components/Common/Button/ColoredButton";

const { $config } = useNuxtApp();
const store = useAuthStore();

const email = ref("");
const password = ref("");

onMounted(() => {
  window.google.accounts.id.initialize({
    client_id: $config.public.googleClientId,
    callback: handleCredential,
  });

  window.google.accounts.id.renderButton(
    document.getElementById("g_id_signin"),
    {
      theme: "outline",
      size: "large",
    }
  );
});

const handleCredential = (response) => {
  const decoded = parseJwt(response.credential);
  store.$state.userDetails.user = decoded;

  console.log("decoded", decoded);
  localStorage.setItem("google_user", JSON.stringify(decoded));
  console.log("store.$state.authCredentials:", store.$state.userDetails.user);
};

const parseJwt = (token) => {
  try {
    return JSON.parse(atob(token.split(".")[1]));
  } catch (e) {
    return null;
  }
};
</script>

<template>
  <div class="grid grid-cols-2 place-items-center mx-32 p-4">
    <div />
    <form class="w-1/2 p-4 shadow-lg rounded-lg">
      <h1>Sign In</h1>

      <div class="flex flex-col gap-4 mt-6">
        <FormInput
          id="email"
          v-model="email"
          type="email"
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

        <div id="g_id_signin" />

        <span class="text-xs text-gray-900 self-center">
          Don't have an account?
          <a href="/sign-up" class="text-xs text-blue-600 hover:text-blue-800">
            Sign Up
          </a>
        </span>
      </div>
    </form>
  </div>
</template>
