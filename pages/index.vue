<script>
  import Vue from "vue";

  export default Vue.extend({
      name: "IndexPage",
  })
</script>

<template>
  <div class="container">
    <!-- Special element -->
    <Loader/>

    <!-- Page content -->
    <Profile username="Seyz123"/>

    <div class="content">
      <ProjectGrid username="Seyz123"></ProjectGrid>
      <Footer/>
    </div>
  </div>
</template>

<style lang="scss">
  .container {
    display: flex;

    @media (max-width: 800px){
      flex-direction: column;
    }

    .content {
      height: 100vh;
      width: 100%;

      display: flex;
      align-items: center;
      flex-direction: column;

      overflow-y: scroll;

      &::-webkit-scrollbar {
        width: 0px;
      }
    }
  }
</style>