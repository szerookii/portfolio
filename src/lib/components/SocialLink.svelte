<script lang="ts">
    import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome";

    export let name: string;
    export let link: string;
    export let icon: any;
</script>

<a href="{link}">
    <FontAwesomeIcon class="text-white" size="lg" icon={icon} />
    <span class="text-white text-xl px-2 -mt-1">{name}</span>
</a>