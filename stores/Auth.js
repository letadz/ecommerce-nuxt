import { defineStore } from "pinia";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
} from "firebase/auth";
import { toast } from "vue3-toastify";

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
  getters: {
    isAuthenticated(state) {
      return (
        state.userDetails.data?.accessToken ||
        state.googleUserDetails.data?.accessToken
      );
    },
  },
  actions: {
    async signIn(payload) {
      this.userDetails.fetch = true;
      this.userDetails.error = null;

      const { $firebase, $router, $api } = useNuxtApp();
      const { email, password } = payload;

      try {
        const data = await signInWithEmailAndPassword(
          $firebase?.auth,
          email,
          password
        );
        const accessToken = data.user.accessToken;

        this.userDetails.data = data.user;
        this.userDetails.fetch = false;
        this.userDetails.error = null;

        localStorage.setItem("user", JSON.stringify(data.user));

        $api.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
        $api.defaults.headers.common["Content-Type"] = "application/json";

        toast.success("Successful!");
        $router.push("/");
        return data;
      } catch (error) {
        toast.error(error.message);
        this.userDetails.fetch = false;
        this.userDetails.error = error.message;

        throw error;
      }
    },

    // async googleSignIn(payload) {
    //   this.googleUserDetails.fetch = true;
    //   this.googleUserDetails.error = null;

    //   const { $router } = useNuxtApp();
    //   const { auth, provider } = payload;

    //   try {
    //     const result = await signInWithPopup(auth, provider);

    //     this.googleUserDetails.data = result.user;
    //     this.googleUserDetails.fetch = false;
    //     this.googleUserDetails.error = null;

    //     $router.push("/");
    //   } catch (error) {
    //     this.googleUserDetails.data = null;
    //     this.googleUserDetails.fetch = false;
    //     this.googleUserDetails.error = error.message;
    //   }
    // },

    async googleSignIn(payload) {
      this.googleUserDetails.fetch = true;
      this.googleUserDetails.error = null;

      const { $router, $api } = useNuxtApp();
      const { auth, provider } = payload;

      try {
        const data = await signInWithPopup(auth, provider);
        const accessToken = data.user.accessToken;

        console.log("data google", data);

        this.googleUserDetails.data = data.user;
        this.googleUserDetails.fetch = false;
        this.googleUserDetails.error = null;

        localStorage.setItem("user", JSON.stringify(data.user));
        $api.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
        $api.defaults.headers.common["Content-Type"] = "application/json";

        await nextTick(() => {
          $router.push("/");
        });
      } catch (error) {
        console.error("googleSignIn: Sign-in failed!", error);
        toast.error(error.message);

        this.googleUserDetails.data = null;
        this.googleUserDetails.fetch = false;
        this.googleUserDetails.error = error.message;
      } finally {
        console.log("googleSignIn: Action finished.");
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

      const { $firebase, $router, $api } = useNuxtApp();

      try {
        await signOut($firebase?.auth);

        this.userDetails.fetch = null;
        this.userDetails.error = null;
        this.userDetails.data = null;

        this.googleUserDetails.fetch = null;
        this.googleUserDetails.error = null;
        this.googleUserDetails.data = null;

        localStorage.removeItem("user");
        delete $api.defaults.headers.common["Authorization"];
        delete $api.defaults.headers.common["Content-Type"];

        toast.success("Logout");
        $router.push("/sign-in");
      } catch (error) {
        this.userDetails.fetch = null;
        this.userDetails.data = null;
        this.userDetails.error = error.message;

        this.googleUserDetails.fetch = null;
        this.googleUserDetails.error = null;
        this.googleUserDetails.data = error.message;

        toast.message(error.message);
      }
    },
  },
});
