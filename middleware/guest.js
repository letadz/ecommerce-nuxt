// middleware/guest.js
export default defineNuxtRouteMiddleware((to, from) => {
  const store = useAuthStore();

  if (
    store.userDetails?.data?.accessToken ||
    store.googleUserDetails?.data?.accessToken
  ) {
    return navigateTo("/");
  }
});
