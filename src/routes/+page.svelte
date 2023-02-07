<script>
    import AboutSection from "$lib/components/section/AboutSection.svelte";
    import Divider from "$lib/components/Divider.svelte";
    import SkillSection from "$lib/components/section/SkillSection.svelte";
</script>

<svelte:head>
    <title>szeroki</title>

    <!-- Add meta tags for social media here -->
</svelte:head>

<section class="min-h-screen scroll-smooth text-white">
    <AboutSection />

    <Divider />

    <SkillSection />

    <Divider />
</section>