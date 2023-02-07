<script lang="ts">
    import {onMount} from "svelte";

    onMount((): void => {
        const loading = document.getElementById("loading");

        setTimeout((): void => {
            loading.classList.add("animate-fadeOut");

            setTimeout(() => loading.style.display = "none", 500);
        }, 1000);
    });
</script>

<span class="h-full w-full fixed top-0 left-0 z-10 grid place-content-center bg-black" id="loading">
    <span class="h-14 w-14 border-2 text-white bg-black animate-spin"></span>
</span>