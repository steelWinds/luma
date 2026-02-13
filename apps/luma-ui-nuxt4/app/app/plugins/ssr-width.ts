import { provideSSRWidth } from '@vueuse/core';

export default defineNuxtPlugin((nuxtApp: any) => {
  provideSSRWidth(1024, nuxtApp.vueApp);
});
