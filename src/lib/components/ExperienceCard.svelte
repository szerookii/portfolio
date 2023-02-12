<script lang="ts">
    import type {Experience} from "$lib/configs/experience/experience.type";
    import {faArrowUpRightFromSquare} from "@fortawesome/free-solid-svg-icons";
    import Tag from "$lib/components/Tag.svelte";

    export let experience: Experience;
</script>

<div>
    <div class="flex flex-wrap justify-between">
        <div class="flex flex-wrap items-center gap-2.5">
            <p class="uppercase font-bold text-white text-2xl">{experience.company}</p>
            <Tag bind:href={experience.link} icon={faArrowUpRightFromSquare} text={experience.type} bgColor={experience.type === "OPEN SOURCE" ? "green" : "blue"} textSize="sm"/>
        </div>

        <p class="text-gray text-md">{experience.dateFormat.start} - {experience.dateFormat.end}</p>
    </div>

    <p class="my-1 text-white">{experience.title}</p>

    {#each experience.description as description}
        <p class="ml-0.5 my-0.5 text-gray text-sm">• {description}</p>
    {/each}

    <p class="mt-1 text-gray text-sm">
        <span class="text-white">Technologies : </span>
        {experience.skills.join(" • ")}
    </p>
</div>