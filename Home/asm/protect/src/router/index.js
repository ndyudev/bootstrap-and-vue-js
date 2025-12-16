import { createRouter, createWebHistory } from "vue-router";
import TourList from "../components/TourList.vue";
import TourDetail from "../components/TourDetail.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "tour-list",
      component: TourList,
    },
    {
      path: "/ranking/:tourCode",
      name: "ranking",
      component: TourDetail,
    },
  ],
});

export default router;
