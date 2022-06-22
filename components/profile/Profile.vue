<script>
  export default {
    name: "Profile",
    props: ["username"],
    data() {
      return {
        data: {}
      };
    },
    mounted() {
      this.getData();
    },
    methods: {
      async getData() {
        const data = await this.$axios.$get(`https://api.github.com/users/${this.username}`);
        this.data = data;
      }
    }
  }
</script>

<template>
  <div class="profile">
    <ProfileImg :url="data.avatar_url"></ProfileImg>
    <ProfileInfo :ghData="data"></ProfileInfo>

    <div>
      <span v-if="data.company != null">
        <font-awesome-icon :icon="['fas', 'fa-user']"></font-awesome-icon>&nbsp;{{ this.data.company }}
      </span>

      <span v-if="data.email != null">
        <font-awesome-icon :icon="['fas', 'fa-envelope']"></font-awesome-icon>&nbsp;{{ this.data.email }}
      </span>

      <span v-if="data.location != null">
        <font-awesome-icon :icon="['fas', 'fa-map-marker-alt']"></font-awesome-icon>&nbsp;{{ this.data.location }}
      </span>

      <span v-if="data.hireable != null">
        <font-awesome-icon :icon="['fas', 'fa-user-tie']"></font-awesome-icon>&nbsp;Available for hire
      </span>
    </div>
  </div>
</template>

<style lang="scss">
  .profile {
    height: 100vh;
    width: 400px;

    padding: 0 30px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 18px;

    @media (max-width: 800px){
      width: 100%;

      align-items: center;

      text-align: center;
    }
    
    background: var(--background-image) center center;
    background-size: cover !important;
    background-repeat: no-repeat;
  }
</style>