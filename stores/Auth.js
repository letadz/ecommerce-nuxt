import { defineStore } from "pinia";
import { useToast } from "vue-toastification";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
} from "firebase/auth";

const toast = useToast();

export const useAuthStore = defineStore("auth", {
  state: () => ({
    userDetails: {
      data: null,
      fetch: false,
      error: null,
    },
    googleUserDetails: {
      data: null,
      fetch: false,
      error: null,
    },
    signUpDetails: {
      user: null,
      fetch: false,
      error: null,
    },
  }),
  actions: {
    async signIn(payload) {
      this.userDetails.fetch = true;
      this.userDetails.error = null;

      const { $firebase, $router } = useNuxtApp();
      const { email, password } = payload;

      try {
        const data = await signInWithEmailAndPassword(
          $firebase?.auth,
          email,
          password
        );
        console.log("Login Successful:", data);
        this.userDetails.data = data.user;
        this.userDetails.fetch = false;
        this.userDetails.error = null;

        localStorage.setItem("user", JSON.stringify(data.user));

        toast.success("Login Successful");
        $router.push("/");
        return data;
      } catch (error) {
        toast.error(error.message);
        this.userDetails.fetch = false;
        this.userDetails.error = error.message;

        throw error;
      }
    },

    async googleSignIn(payload) {
      this.googleUserDetails.fetch = true;
      this.googleUserDetails.error = null;

      const { $router } = useNuxtApp();
      const { auth, provider } = payload;

      try {
        const result = await signInWithPopup(auth, provider);

        this.googleUserDetails.data = result.user;
        this.googleUserDetails.fetch = false;
        this.googleUserDetails.error = null;

        $router.push("/");
      } catch (error) {
        this.googleUserDetails.data = null;
        this.googleUserDetails.fetch = false;
        this.googleUserDetails.error = error.message;
      }
    },

    async signUp(payload) {
      this.signUpDetails.fetch = true;
      this.signUpDetails.error = null;

      const { $firebase, $router } = useNuxtApp();
      const { email, password } = payload;

      try {
        const data = await createUserWithEmailAndPassword(
          $firebase?.auth,
          email,
          password
        );
        this.signUpDetails.data = data.user;
        this.signUpDetails.fetch = false;
        this.signUpDetails.error = null;

        toast.success("Create Successful!");
        $router.push("/sign-in");
      } catch (error) {
        toast.error(error.message);

        this.signUpDetails.data = null;
        this.signUpDetails.fetch = false;
        this.signUpDetails.error = error.message;
      }
    },

    async logout() {
      this.userDetails.fetch = true;
      this.userDetails.error = null;

      const { $firebase, $router } = useNuxtApp();

      try {
        await signOut($firebase?.auth);

        this.userDetails.fetch = null;
        this.userDetails.error = null;
        this.userDetails.data = null;

        localStorage.removeItem("user");
        toast.success("Logout");
        $router.push("/sign-in");
      } catch (error) {
        this.userDetails.fetch = null;
        this.userDetails.data = null;
        this.userDetails.error = error.message;

        toast.message(error.message);
      }
    },
  },
});
