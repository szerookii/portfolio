<template>
<div id="work">
  <h1>What I worked on ?</h1>

  <div class="projects" id="work_section">
    <magic-grid>
      <ProjectCard v-for="project in data" :project="project" :key="project.id"></ProjectCard>
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
      data: {}
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    async getData() {
      const data = this.$axios.$get(`https://api.github.com/users/${this.username}/repos`);
      this.data = data;
    }
  }
}
</script>