export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'lodzkiealpaki',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { hid: 'keywords', name: 'keywords', content: 'łódzki alpaki, alpaki głaskanie, alpakoterapia alpaki terapia, alpaki wojewódstwo łódzkie, ' },
      { hid: 'robots', name: 'robots', content: 'index, follow' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/sass/main.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    "bootstrap-vue/nuxt",
    // Simple usage
    'nuxt-leaflet',

    // With options
    ['nuxt-leaflet', { /* module options */ }],
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    vendor: ["vue2-google-maps"]
  }
}
