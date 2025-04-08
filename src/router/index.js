import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/gallery",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/GalleryView.vue"),
    },
    {
      path: "/contacts",
      name: "contacts",
      component: () => import("../views/ContactsView.vue"),
    },
    {
      path: "/prices",
      name: "prices",
      component: () => import("../views/PricesView.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/login/LoginView.vue"),
    },
    {
      path: "/login/createAccount",
      name: "createAccount",
      component: () => import("../views/login/newAccView.vue"),
    },
    {
      path: "/login/forgot-password",
      name: "resetPassword",
      component: () => import("../views/login/passwordReset.vue"),
    },
    {
      path: "/login/confirm-email",
      name: "confirmEmail",
      component: () => import("../views/login/confirmEmail.vue"),
    },
    {
      path: "/prices/newComission",
      name: "newComission",
      component: () => import("../views/user/wizardForm.vue"),
    },
    {
      path: "/profile",
      name: "userProfile",
      component: () => import("../views/user/profileView.vue"),
    },
  ],
});

export default router;
