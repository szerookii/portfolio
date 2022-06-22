<script>
  export default {
    name: "ProjectGrid",
    props: ["username"],
    data() {
      return {
        repos: []
      }
    },
    mounted() {
      this.getData()
    },
    methods: {
      async getData() {
        const repos = await this.$axios.$get(`https://api.github.com/users/${this.username}/repos`);

        const sortedRepos = repos.sort((a, b) => Number(Date.parse(b.updated_at)) - Number(Date.parse(a.updated_at)));

        this.repos = sortedRepos;
      }
    }
  }
</script>

<template>
  <div class="project-container">
    <h1>What I worked on ?</h1>

    <div class="projects">
      <ProjectCard v-for="project in repos" :projectData="project" :key="project.id"/>
    </div>
  </div>
</template>

<style lang="scss">
  .project-container {
    width: 90%;

    .projects {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
      grid-gap: 30px;

      @media (max-width: 850px){
        grid-template-columns: repeat(auto-fit, minmax(90%, 1fr));
      }
    }
  }
</style>