<script>
    import '$lib/app.css';

    import Loader from "$lib/components/Loader.svelte";
</script>

<svelte:head>
    <title>szeroki</title>
    <meta name="title" content="szeroki">
    <meta name="description" content="Développeur C++ & Golang et rétro-ingénieur.">
    <meta name="theme-color" content="#FFFFFF" />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:title" content="szeroki">
    <meta property="og:description" content="Développeur C++ & Golang et rétro-ingénieur.">
    <meta property="og:image" content="szeroki.png">

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:title" content="szeroki">
    <meta property="twitter:description" content="Développeur C++ & Golang et rétro-ingénieur.">
    <meta property="twitter:image" content="szeroki.png">
</svelte:head>

<div class="app">
    <Loader/>

    <main>
        <slot/>
    </main>

    <!-- Footer -->
</div>

<style>
    :global(body) {
        background-color: black;
    }
</style>