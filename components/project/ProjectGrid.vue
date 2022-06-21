<template>
<div id="work">
  <h1>What I worked on ?</h1>

  <div class="projects" id="work_section">
    <magic-grid :maxCols.number="2" :maxColWidth.num="480" :gap.number="38" :wrapper="work_section">
      <ProjectCard v-for="project in repos" :projectData="project" :key="project.id"></ProjectCard>
    </magic-grid>
  </div>
</div>
</template>

<script>
export default {
  name: 'ProjectGrid',
  props: ['username'],
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
      this.repos = repos;
    }
  }
}
</script>