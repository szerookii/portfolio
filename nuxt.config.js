export default {
  server: {
    port: 8000
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
      { hid: 'description', name: 'description', content: 'szeroki, backend developer and reverse engineer.' },
      { hid: 'og:description', name: 'description', content: 'szeroki, backend developer and reverse engineer.' },
      { hid: 'og:image', name: 'og:image', content: 'https://cdn.discordapp.com/attachments/365226311674888193/661738706897731594/f1e33ea2f317cd6a3178646431099534-min.png' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/img/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/static/css/main.css",
    "~/static/css/animate.min.css",
    '@fortawesome/fontawesome-svg-core/styles.css'
    ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src: '~/plugins/magicgrid.js'},
    {src: '~/plugins/fontawesome.js'}
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
    transpile: ['vue-magic-grid', 'vue-fontawesome'],
  }
}
