// middleware/auth.js
export default defineNuxtRouteMiddleware(async (to, from) => {
  const store = useAuthStore();

  if (!store.isAuthenticated) {
    return navigateTo("/sign-in");
  }
});
