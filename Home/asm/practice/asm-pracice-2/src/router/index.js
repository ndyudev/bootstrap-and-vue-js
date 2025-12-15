import { createRouter, createWebHistory } from "vue-router";
import ListStudent from "../components/ListStudent.vue";
import StudentDetail from "../components/StudentDetail.vue";
import StudentForm from "../components/StudentForm.vue";
import Lesson2 from "../components/Lesson2.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "student-list",
      component: ListStudent,
    },
    {
      path: "/student/:id",
      name: "student-detail",
      component: StudentDetail,
    },
    {
      path: "/student-form/:id?",
      name: "student-form",
      component: StudentForm,
    },
    {
      path: "/lesson2",
      name: "lesson2",
      component: Lesson2,
    },
  ],
});

export default router;
