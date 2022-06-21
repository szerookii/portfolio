<template>
    <a v-if="!projectData.fork" :href="this.projectData.html_url" target="_blank">
        <section>
            <div class="section_title">{{ this.projectData.name }}</div>
            <div class="about_section">
                <span style="display:block;">{{ this.projectData.description || "No description" }}</span>
            </div>
            <div class="bottom_section">
                <span style="display:inline-block;">
                    <font-awesome-icon :icon="['fas', 'fa-code']"></font-awesome-icon>&nbsp; {{
                            this.projectData.language || "Unknown"
                    }}
                </span>
            </div>
        </section>
    </a>
</template>

<script>
export default {
    name: "ProjectCard",
    props: ['projectData'],
    mounted() {
        console.log(this.projectData);
    },
}
</script>