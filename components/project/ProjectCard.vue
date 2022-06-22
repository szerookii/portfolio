<script>
  export default {
    name: "ProjectCard",
    props: ['projectData']
  }
</script>

<template>
  <a v-if="!projectData.fork" :href="this.projectData.html_url" target="_blank">
    <h3>{{ this.projectData.name }}</h3>

    <p>{{ this.projectData.description || "No description" }}</p>

    <div class="language">
      <font-awesome-icon :icon="['fas', 'fa-code']"/>
      <p>{{ this.projectData.language || "Unknown" }}</p>
    </div>
  </a>
</template>

<style lang="scss">
  a {
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 15px;

    background-color: #141414;

    border-radius: 8px;

    text-decoration: none;
    color: white;

    padding: 25px 20px;

    &:hover {
      transform: scale(1.02);
      transition: transform 500ms;
    }
    
    h3, p {
      margin: 0;
    }

    h3 {
      font-size: 1.5rem;
    }

    .language {
      display: flex;
      align-items: center;
      gap: 6px;
    }
  }
</style>