<script lang="ts">
    import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome";
    import type {IconDefinition} from "@fortawesome/free-brands-svg-icons";

    export let link: string;
    export let icon: IconDefinition | undefined;
</script>

<a class="flex flex-row justify-end text-white gap-2 p-2 hover:brightness-90" href={link}>
    <FontAwesomeIcon class="text-white" size="md" icon={icon} />
</a>