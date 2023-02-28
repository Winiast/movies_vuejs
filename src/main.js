import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import Home from "./views/HomeView.vue";
import Details from "./views/DetailsView.vue";

const app = createApp(App);

const routes = [
  {
    path: "/",
    name: "HomeView",
    component: Home,
  },
  {
    path: "/details",
    name: "DetailsView",
    component: Details,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

app.use(router);
app.mount("#app");
