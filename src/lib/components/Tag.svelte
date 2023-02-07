<script lang="ts">
    import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome";
    import type {IconDefinition} from "@fortawesome/free-brands-svg-icons";

    export let text: string;
    export let icon: IconDefinition;
    export let href: string | undefined;
</script>

<a href="{href}" class="gap-2 text-xs inline-flex font-bold px-3 text-white border-white border-2 py-1 rounded-full">
    <FontAwesomeIcon size="xl" icon={icon} />
    {text}
</a>