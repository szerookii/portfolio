<script lang="ts">
    import Tag from "$lib/components/Tag.svelte";
    import {skills} from "$lib/configs/skill/skill.config.js";
</script>

<div class="flex flex-wrap gap-3 justify-center max-lg:pl-8 px-8 lg:px-44 xl:px-96">
    {#each skills as skill}
        <Tag href={skill.href} icon={skill.icon} text={skill.name} />
    {/each}
</div>