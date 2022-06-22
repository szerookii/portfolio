<script>
  export default {
    name: "ProfileImg",
    props: ["url"]
  }
</script>

<template>
  <img :src="this.url" alt="profil picture">
</template>

<style lang="scss">
  img {
    height: 180px;
    width: 180px;

    border-radius: 20px;
  }
</style>