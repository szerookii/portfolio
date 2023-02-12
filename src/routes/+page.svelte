<script>
    import AboutSection from "$lib/components/section/AboutSection.svelte";
    import Divider from "$lib/components/Divider.svelte";
    import SkillSection from "$lib/components/section/SkillSection.svelte";
    import ExperienceSection from "$lib/components/section/ExperienceSection.svelte";
</script>

<svelte:head>
    <title>szeroki</title>

    <!-- Add meta tags for social media here -->
</svelte:head>

<section class="min-h-screen scroll-smooth">
    <AboutSection/>

    <Divider/>

    <SkillSection/>

    <Divider/>

    <ExperienceSection/>
</section>