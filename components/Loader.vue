<script>
  export default {
    name: "Loader",

    mounted() {
      setTimeout(() => document.getElementById("loading").classList.add("animated", "fadeOut"), 1500);
    }
  }
</script>

<template>
  <span id="loading"><span id="spinner"></span></span>
</template>

<style lang="scss">
  #loading {
    height: 100vh;
    width: 100vw;

    position: fixed;
    top: 0; left: 0;
    
    background: var(--bg-color);

    z-index: 10;

    display: grid;
    place-content: center;
  }

  #spinner {
    height: 50px;
    width: 50px;

    animation: rotate 0.5s infinite linear;

    border: 2px solid var(--bg-color);
    border-bottom: 2px solid var(--text-color);
    border-radius: 50%;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
</style>