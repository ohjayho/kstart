import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./firebase/initializeFirebase";
//just importing firebase will triggers initialization

const app = createApp(App);
app.use(router);
app.mount("#app");
