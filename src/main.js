import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { firebase } from "./firebase";

const app = createApp(App);
app.use(router);
app.mount("#app");
