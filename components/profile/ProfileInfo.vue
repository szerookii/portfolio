<script>
  export default {
    name: "ProfileInfo",
    props: ["ghData", "links"] // TODO: links is not used
  }
</script>

<template>
  <div>
    <p id="username">{{ this.ghData.name }}</p>
    <p id="userbio" style="display: block;">{{ this.ghData.bio }}</p>
  </div>
</template>

<style lang="scss">
  p {
    margin: 0;
  }

  #username {
    font-size: 2rem;
    font-weight: bold;
  }

  #userbio {
    font-size: 1.2rem;
  }
</style>