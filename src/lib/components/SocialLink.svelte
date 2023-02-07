<script lang="ts">
    import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome";
    import type {IconDefinition} from "@fortawesome/free-brands-svg-icons";

    export let name: string;
    export let link: string;
    export let icon: IconDefinition | undefined;
</script>

<a href="{link}" class="hover:brightness-90">
    <FontAwesomeIcon class="text-white" size="lg" icon={icon} />
    <span class="text-white text-xl px-2 -mt-1">{name}</span>
</a>