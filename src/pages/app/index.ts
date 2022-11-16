import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
const CardButtonComponent = () =>
  import("../../components/CardButtonComponent");

const routes = [
  {
    path: "/card-buttons/note",
    component: CardButtonComponent,
  },
];

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
});

const app = createApp(App).use(router);
app.mount("#root");
