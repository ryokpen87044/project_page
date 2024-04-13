import { createRouter, createWebHashHistory } from "vue-router";

const BASE_TITLE = "PPP project2024 | ";
const routes = [
  {
    path: "/",
    component: () => import("./components/pages/home.vue"),
    meta: { title: BASE_TITLE + "home" },
  },
  {
    path: "/about",
    component: () => import("./components/pages/about.vue"),
    meta: { title: BASE_TITLE + "about" },
  },
  {
    path: "/member",
    component: () => import("./components/pages/member.vue"),
    meta: { title: BASE_TITLE + "member" },
  },
  {
    path: "/active",
    component: () => import("./components/pages/active.vue"),
    meta: { title: BASE_TITLE + "active" },
  },
  {
    path: "/content",
    component: () => import("./components/pages/content.vue"),
    meta: { title: BASE_TITLE + "content" },
  },
  {
    path: "/:pathMatch(.*)*",
    component: () => import("./components/pages/notFound.vue"),
    meta: { title: BASE_TITLE + "404 not found" },
  },
  {
    path: "/:pathMatch(.*)",
    component: () => import("./components/pages/notFound.vue"),
    meta: { title: BASE_TITLE + "404 not found" },
  },
];

const router = new createRouter({
  history: createWebHashHistory(),
  routes,
});

const DEFAULT_TITLE = "PPP project2024";
router.afterEach((to, from) => {
  document.title = to.meta.title || DEFAULT_TITLE;
});

export default router;
