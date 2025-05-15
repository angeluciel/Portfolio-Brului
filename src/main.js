import "@/assets/main.css";

import { createApp } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
//TODO: REMOVE FORTAWESOME WE DONT NEED IT (we do)
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

// TODO: PRIMEVUE (just used todo cuz its pretty)
import PrimeVue from "primevue/config";
import ToastService from "primevue/toastservice";
import Toast from "primevue/toast";
import Tooltip from "primevue/tooltip";
import { Breadcrumb } from "primevue";
import nora from "@primeuix/themes/nora";

import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";

library.add(fas, fab);

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(PrimeVue, {
  theme: {
    preset: nora,
  },
});
app.use(ToastService);

app.directive("tooltip", Tooltip);
app.component("fa", FontAwesomeIcon);
app.component("Toast", Toast);
app.component("Breadcrumb", Breadcrumb);

app.mount("#app");
