<script lang="ts">
    import Tag from "$lib/components/Tag.svelte";
    import {skills} from "$lib/configs/skill/skill.config.js";
</script>

<div class="flex flex-wrap gap-2.5 justify-start mx-auto w-5/6 lg:w-2/4">
    {#each skills as skill}
        <Tag href={skill.href} icon={skill.icon} text={skill.name} iconSize="xl" textSize="sm"/>
    {/each}
</div>