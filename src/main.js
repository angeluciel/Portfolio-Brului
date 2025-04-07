import "@/assets/main.css";

import { createApp } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
//TODO: REMOVE FORTAWESOME WE DONT NEED IT
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import PrimeVue from "primevue/config";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";

library.add(fas, fab);

const app = createApp(App);

app.component("fa", FontAwesomeIcon);

app.use(createPinia());
app.use(router);
app.use(PrimeVue);

app.mount("#app");
