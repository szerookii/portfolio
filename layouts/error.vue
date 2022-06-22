<script>
export default {
  props: ["error"],
  head() {
    return {
      title: `${this.error.statusCode}: ${this.error.message}`
    }
  }
}
</script>

<template>
  <div>
    <Loader />
    <div class="error-container">
      <h1 v-if="error.statusCode === 404">Page not found</h1>
      <h1 v-else>An error occurred</h1>
      <NuxtLink class="link" to="/">Back to home</NuxtLink>
    </div>
  </div>
</template>

<style lang="scss">
.error-container {
  position: absolute;
  top: 50%;
  left: 50%;

  text-align: center;
  transform: translate(-50%, -50%);

  h1 {
    text-align: center;
  }
}
</style>