import "./assets/main.css";

import { createApp } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { RiShoppingBag2Fill } from "oh-vue-icons/icons";
import { RiShoppingBag2Line } from "oh-vue-icons/icons";

import App from "./App.vue";
import router from "./router";

library.add(fas, fab);

const app = createApp(App);

app.component("fa", FontAwesomeIcon);

app.use(router);

app.mount("#app");
