import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    return { top: 0, behavior: "smooth" };
  },
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/gallery",
      name: "gallery",
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
      path: "/profile/:display_name",
      name: "userProfile",
      component: () => import("../views/user/profileLayout.vue"),
      props: true,
      children: [
        {
          path: "details",
          name: "details",
          component: () => import("@/views/user/userOverview.vue"),
        },
        {
          path: "edit",
          name: "edit",
          component: () => import("@/views/user/userEdit.vue"),
        },
        {
          path: "security",
          name: "security",
          component: () => import("@/views/user/userSecurity.vue"),
        },
        {
          path: "privacy",
          name: "privacy",
          component: () => import("@/views/user/userPrivacy.vue"),
        },
        {
          path: "comissions",
          name: "comissions",
          component: () => import("@/views/user/userComissions.vue"),
        },
        {
          path: "favorites",
          name: "favorites",
          component: () => import("@/views/user/userFavorites.vue"),
        },
      ],
    },
    {
      path: "/user/:id",
      name: "userView",
      component: () => import("../views/user/userOverview.vue"),
    },
  ],
});

export default router;
