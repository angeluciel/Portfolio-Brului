import "@/assets/main.css";

import { createApp } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import PrimeVue from "primevue/config";
import Aura from "@primeuix/themes/aura";
import App from "./App.vue";
import router from "./router";

library.add(fas, fab);

const app = createApp(App);

app.component("fa", FontAwesomeIcon);

app.use(router);
app.use(PrimeVue);
app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
});

app.mount("#app");
