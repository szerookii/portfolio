export default {
  server: {
    port: process.env.PRODUCTION ? 80 : 3000
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'szeroki - Portfolio',
    htmlAttrs: {
      lang: 'fr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'og:title', name: 'og:title', content: 'szeroki' },
      { hid: 'description', name: 'description', content: 'szeroki, backend developer and reverse engineer.' },
      { hid: 'og:description', name: 'og:description', content: 'szeroki, backend developer and reverse engineer.' },
      { hid: 'og:image', name: 'og:image', content: 'https://avatars.githubusercontent.com/u/36236750?v=4' },
      { hid: 'theme-color', name: 'theme-color', content: '#E7A854' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/img/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/static/css/main.scss",
    "~/static/css/animate.min.css",
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/fontawesome.js' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['vue-fontawesome']
  }
}
