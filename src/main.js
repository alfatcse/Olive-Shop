import { createApp } from "vue";
import App from "./App.vue";
import * as VueRouter from "vue-router";
import ShoppingCartPage from "./pages/ShoppingCartPage.vue";
import ProductsPage from "./pages/ProductsPage.vue";
import ProductDetailPage from "./pages/ProductDetailPage.vue";
import NotFoundPage from "./pages/NotFoundPage.vue";
import "./main.css";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWkvtsxhNuJZj8Hy_XuG9InBTRciZUvOQ",
  authDomain: "vue-site-3a967.firebaseapp.com",
  projectId: "vue-site-3a967",
  storageBucket: "vue-site-3a967.appspot.com",
  messagingSenderId: "108873823176",
  appId: "1:108873823176:web:1a23e081f08f1a7a33c6fd",
};

// Initialize Firebase
initializeApp(firebaseConfig);
createApp(App)
  .use(
    VueRouter.createRouter({
      history: VueRouter.createWebHistory(process.env.BASE_URL),
      routes: [
        {
          path: "/cart",
          component: ShoppingCartPage,
        },
        {
          path: "/products",
          component: ProductsPage,
        },
        {
          path: "/products/:productId",
          component: ProductDetailPage,
        },
        {
          path: "/:pathMatch(.*)*",
          component: NotFoundPage,
        },
      ],
    })
  )
  .mount("#app");
