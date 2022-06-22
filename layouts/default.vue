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

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Poppins");

@import url("https://fonts.googleapis.com/css?family=Questrial");

/* Variables */

:root {
  --bg-color: rgb(10, 10, 10);
  --text-color: #fff;
  --blog-gray-color: rgb(180, 180, 180);
  --background-image: linear-gradient(90deg, rgba(10, 10, 10, 0.3), rgb(10, 10, 10, 1)), url("https://cdn.discordapp.com/attachments/365226311674888193/661738706897731594/f1e33ea2f317cd6a3178646431099534-min.png");
  --background-background: linear-gradient 0deg, rgba(10, 10, 10, 1), rgba(10, 10, 10, 0.6) url("https://cdn.discordapp.com/attachments/365226311674888193/661738706897731594/f1e33ea2f317cd6a3178646431099534-min.png") center center fixed;
  --height: 50vh;
}

@media (max-width: 800px) {
  :root {
    --background-image: linear-gradient(0deg, rgba(10, 10, 10, 1), rgba(10, 10, 10, 0)), url("https://cdn.discordapp.com/attachments/365226311674888193/661738706897731594/f1e33ea2f317cd6a3178646431099534-min.png") !important;
  }
}

/* Resets / default values */

html {
  box-sizing: border-box;
}

* {
  box-sizing: inherit;

  &:before,
  &:after {
    box-sizing: inherit;
  }
}

body {
  margin: 0;
  padding: 0;
  background: var(--bg-color);
  color: var(--text-color);
  font-family: "Poppins", sans-serif;
}

/* Scrollbar */

::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}

::-webkit-scrollbar-track {
  background: var(--bg-color);
}

::-webkit-scrollbar-thumb {
  background: var(--text-color);
}

/* Selection */

::selection {
  color: var(--bg-color);
  background: var(--text-color);
}
</style>