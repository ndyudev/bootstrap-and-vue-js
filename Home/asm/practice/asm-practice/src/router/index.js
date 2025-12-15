import { createRouter, createWebHistory } from "vue-router";
import Lesson1 from "../components/Lesson1.vue";
import JobList from "../components/JobList.vue";
import JobDetail from "../components/JobDetail.vue";
import JobForm from "../components/JobForm.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "job-list",
      component: JobList,
    },
    {
      path: "/job/:id",
      name: "job-detail",
      component: JobDetail,
    },
    {
      path: "/job-form/:id?",
      name: "job-form",
      component: JobForm,
    },
    {
      path: "/lesson1",
      name: "lesson1",
      component: Lesson1,
    },
  ],
});

export default router;
