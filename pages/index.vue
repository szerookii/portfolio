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
    <Profile username="szerookii"/>

    <div class="content">
      <ProjectGrid username="szerookii"></ProjectGrid>
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

      @media (max-width: 800px){
        height: max-content;
      }

      display: flex;
      align-items: center;
      flex-direction: column;

      @media (min-width: 800px){
        overflow-y: scroll;

        &::-webkit-scrollbar {
          width: 0px;
        }
      }
    }
  }
</style>
