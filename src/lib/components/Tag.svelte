<script lang="ts">
    import {FontAwesomeIcon} from "@fortawesome/svelte-fontawesome";
    import type {IconDefinition} from "@fortawesome/free-brands-svg-icons";

    export let text: string;
    export let href: string | undefined;
    export let icon: IconDefinition;
    export let textColor: string = "white";
    export let bgColor: string = "white";
    export let textSize: string = "xs";
    export let iconSize: string = "lg";
</script>

<a class="gap-1 text-{textSize} text-{textColor} border-{bgColor} border inline-flex font-bold rounded py-0.5 px-2"
   href={href}>
    {text}
    <FontAwesomeIcon icon={icon} size={iconSize}/>
</a>