// middleware/guest.js
export default defineNuxtRouteMiddleware((to, from) => {
  const store = useAuthStore();

  console.log("Guest middleware triggered for:", to.path);
  console.log("Current userDetails:", store.userDetails);
  console.log("Is email verified?", store.userDetails?.user);

  if (store.userDetails?.user) {
    console.log("User is logged in and email verified. Redirecting to /");
    return navigateTo("/");
  }
  console.log(
    "User is NOT logged in or email NOT verified. Staying on guest page."
  );
});
