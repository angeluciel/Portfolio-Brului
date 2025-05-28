// cypress/support/mount-with-full-setup.ts
import { createPinia } from "pinia";
import PrimeVue from "primevue/config";
import ToastService from "primevue/toastservice";
import Toast from "primevue/toast";
import Breadcrumb from "primevue/breadcrumb";
import { Icon } from "@iconify/vue";
import { ensureFontsLoaded } from "./font-loader";

import "../../src/assets/main.css";

export async function createFullTestSetup() {
  await ensureFontsLoaded();

  await new Promise((resolve) => setTimeout(resolve, 100));

  return {
    global: {
      plugins: [PrimeVue, ToastService, createPinia()],
      components: {
        Toast,
        Breadcrumb,
        Icon, // Register the Iconify Icon component globally for tests
      },
    },
  };
}
