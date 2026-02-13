// plugins/valibot-i18n.client.ts or similar
import * as v from 'valibot';
import '@valibot/i18n/ru';

export default defineNuxtPlugin(() => {
  // FIXME: fix if the app has more than one language
  v.setGlobalConfig({ lang: 'ru' });
});
