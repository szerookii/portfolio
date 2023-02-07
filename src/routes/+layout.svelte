<script>
    import '$lib/app.css';

    import Loader from "$lib/components/Loader.svelte";
    import Szeroki from "$lib/images/szeroki.png"
</script>

<svelte:head>
    <title>szeroki</title>
    <meta name="title" content="szeroki">
    <meta name="description" content="Développeur C++ & Golang et rétro-ingénieur.">
    <meta name="theme-color" content="#000000" />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:title" content="szeroki">
    <meta property="og:description" content="Développeur C++ & Golang et rétro-ingénieur.">
    <meta property="og:image" content="{Szeroki}">

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:title" content="szeroki">
    <meta property="twitter:description" content="Développeur C++ & Golang et rétro-ingénieur.">
    <meta property="twitter:image" content="{Szeroki}">
</svelte:head>

<div class="app">
    <Loader/>

    <main>
        <slot/>
    </main>

    <!-- Footer -->
</div>