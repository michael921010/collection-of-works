import { createRouter, createWebHistory } from "vue-router";

export const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home"),
    alias: "/home",
  },
  {
    label: "Curve Outside Effects Navigation Indicator",
    path: "/curve-outside-effects-navigation-indicator",
    name: "CurveOutsideEffectsNavigationIndicator",
    component: () => import("@/views/CurveOutsideEffectsNavigationIndicator"),
  },
  {
    label: "Fluorescent Loading Indicator",
    path: "/fluorescent-loading-indicator",
    name: "FluorescentLoadingIndicator",
    component: () => import("@/views/FluorescentLoadingIndicator"),
  },
  {
    label: "Blinking Animation Text",
    path: "/blinking-animation-text",
    name: "BlinkingAnimationText",
    component: () => import("@/views/BlinkingAnimationText"),
  },
  {
    label: "Ambient Light Glowing Cube",
    path: "/ambient-light-glowing-cube",
    name: "AmbientLightGlowingCube",
    component: () => import("@/views/AmbientLightGlowingCube"),
  },
  {
    label: "Custom Dropdown Menu",
    path: "/custom-dropdown-menu",
    name: "CustomDropdownMenu",
    component: () => import("@/views/CustomDropdownMenu"),
  },
  {
    label: "Ribbon Shape Of Card",
    path: "/ribbon-shape-of-card",
    name: "RibbonShapeOfCard",
    component: () => import("@/views/RibbonShapeOfCard"),
  },
  {
    label: "Color Rain",
    path: "/color-rain",
    name: "ColorRain",
    component: () => import("@/views/ColorRain"),
  },
  {
    label: "Squid Game Responsive Website",
    path: "/squid-game-responsive-website",
    name: "SquidGameResponsiveWebsite",
    component: () => import("@/views/SquidGameResponsiveWebsite"),
  },
  {
    label: "CSS Only Keyboard Keys UI Design",
    path: "/css-only-keyboard-keys-ui-design",
    name: "CSSOnlyKeyboardKeysUIDesign",
    component: () => import("@/views/CSSOnlyKeyboardKeysUIDesign"),
  },

  {
    label: "Started",
    path: "/started",
    name: "Started",
    component: () => import("@/views/Started"),
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
        // /users/:id/posts - ???????????? User ??? post ??????
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
