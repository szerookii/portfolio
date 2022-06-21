<template>
    <div id="loading">
      <div id="spinner"></div>
    </div>
</template>

<script>
export default {
  name: 'Loader',
  mounted() {
    setTimeout(function() {
      document.getElementById("loading").classList.add("animated");
      document.getElementById("loading").classList.add("fadeOut");
      setTimeout(function() {
        document.getElementById("loading").classList.remove("animated");
        document.getElementById("loading").classList.remove("fadeOut");
        document.getElementById("loading").style.display = "none";
      }, 800);
    }, 1500);
  }
}
</script>
