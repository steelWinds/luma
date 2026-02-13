// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  devtools: { enabled: true },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
    },
  },

  dir: {
    pages: './app/routes',
    layouts: './app/layouts',
    assets: './app/assets',
    plugins: './app/plugins',
  },

  css: [
    './app/app/assets/css/tailwind.css',
    './app/app/assets/css/preflight.css',
  ],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  postcss: {
    plugins: {
      '@csstools/postcss-global-data': {
        files: [
          './app/app/assets/css/tailwind.css',
        ],
      },
      'postcss-nested': {},
      'postcss-custom-media': {},
      'postcss-preset-env': {
        stage: 1,
        features: {
          'nesting-rules': true,
          'color-mix': true,
        },
      },
      'postcss-pxtorem': {
        rootValue: 16,
        propList: ['*'],
      },
    },
  },

  fonts: {
    defaults: {
      weights: [300, 400, 500, 600, 700],
      styles: ['normal', 'italic'],
    },
  },

  i18n: {
    locales: [
      { code: 'ru', language: 'ru-RU', file: 'ru.json' },
      { code: 'en', language: 'en-EN', file: 'en.json' },
    ],
    defaultLocale: 'ru',
  },

  eslint: {
    checker: true,
    config: {
      standalone: false,
    },
  },

  image: {
    format: ['webp'],
  },

  shadcn: {
    prefix: 'Shad',
    componentDir: '@/shared/ui',
  },

  modules: [
    '@nuxt/a11y',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/hints',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    '@artmizu/nuxt-prometheus',
    '@nuxtjs/i18n',
    '@nuxtjs/seo',
    '@pinia/nuxt',
    'shadcn-nuxt',
    '@vueuse/nuxt',
    'nuxt-swiper',
    [
      '@vee-validate/nuxt',
      {
        autoImports: false,
      },
    ],
  ],
});
