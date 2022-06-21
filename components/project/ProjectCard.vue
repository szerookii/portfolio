<template>
<div>
    <a :href="projectData.html_url" target="_blank">
        <section>
            <div class="section_title">{{ projectData.name }}</div>
            <div class="about_section">
                <span style="display:block;">{{ projectData.description || "No description"}}</span>
            </div>
            <div class="bottom_section">
                <span style="display:inline-block;"><i class="fas fa-code"></i>&nbsp; {{ projectData.language || "Unknown" }}</span>
            </div>
        </section>
    </a>
</div>
</template>

<script>
export default {
    name: "ProjectCard",
    props: ['projectData']
}
</script>