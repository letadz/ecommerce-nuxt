import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
 
//   const analytics = getAnalytics(firebaseApp);

export default defineNuxtPlugin(() => {
  const firebaseConfig = {
    apiKey: "AIzaSyD0D5BPTmJslxYKuaMB1vl5jEST4qxx5To",
    authDomain: "ecommerce-nuxt-94628.firebaseapp.com",
    projectId: "ecommerce-nuxt-94628",
    storageBucket: "ecommerce-nuxt-94628.firebasestorage.app",
    messagingSenderId: "32736853263",
    appId: "1:32736853263:web:68f39b908f88d51b9c127a",
    measurementId: "G-L9KDQH2LZD",
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  return {
    provide: {
      firebase: {
        auth,
        provider,
      },
    },
  };
});
