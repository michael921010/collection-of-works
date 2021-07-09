import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";

export const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    alias: "/home",
  },
  {
    path: "/about",
    name: "About",
    // redirect: "/",

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/About.vue"),
  },
  {
    path: "/users/:userId(\\d+)",
    name: "User",
    component: () => import("@/views/User.vue"),
    children: [
      {
        // /users/:id/posts - 取得指定 User 的 post 內容
        path: "posts",
        component: () => import("@/views/Post.vue"),
        props: true,
        // this will render the User for these 3 URLs
        // - /id
        // - /users/id
        // - /users/id/posts
        // alias: ["", "/:userId"],
      },
    ],
  },
  {
    path: "/vuex",
    name: "Vuex",
    component: () => import("@/views/Vuex.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
