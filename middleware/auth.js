export default defineNuxtRouteMiddleware((to, from) => {
  const store = useAuthStore();

  if (!store.userDetails?.user?.email_verified) {
    return navigateTo("/sign-in");
  }
});
