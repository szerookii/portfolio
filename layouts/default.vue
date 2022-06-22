<script>
export default {
  head() {
    return {
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
    }
  }
}
</script>

<template>
  <Nuxt />
</template>