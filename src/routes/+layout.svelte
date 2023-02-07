<script>
    import '$lib/app.css';

    import Loader from "$lib/components/Loader.svelte";
</script>

<div class="app">
    <Loader/>

    <main>
        <slot/>
    </main>

    <!-- Footer -->
</div>