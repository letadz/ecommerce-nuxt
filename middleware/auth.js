// middleware/auth.js
export default defineNuxtRouteMiddleware(async (to, from) => {
  const store = useAuthStore();

  if (!store.userDetails?.data?.accessToken) {
    return navigateTo("/sign-in");
  }
});
