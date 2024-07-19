import { createRouter, createWebHistory } from "vue-router/auto";
import { routes } from "vue-router/auto-routes";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.onError(
  (err: { message: string | string[] }, to: { fullPath: string | URL }) => {
    if (
      err?.message?.includes?.("Failed to fetch dynamically imported module")
    ) {
      if (!localStorage.getItem("vuetify:dynamic-reload")) {
        localStorage.setItem("vuetify:dynamic-reload", "true");
        location.assign(to.fullPath);
      }
    }
  }
);

router.isReady().then(() => {
  localStorage.removeItem("vuetify:dynamic-reload");
});

export default router;
