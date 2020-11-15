import { createRouter, createWebHashHistory } from "vue-router";
import Contacts from "../views/Contacts.vue";

const routes = [
  {
    path: "/",
    name: "Contacts",
    component: Contacts,
  },
  {
    path: "/contact/:contactId(\\d+)",
    name: "ContactInfo",
    component: () => import("../views/ContactInfo.vue"),
    props: true,
  },
  {
    path: "/:catchAll(.*)*",
    name: "NotFound",
    redirect: () => {
      return { path: "/" };
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
