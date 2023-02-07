<script lang="ts">
    import Tag from "$lib/components/Tag.svelte";
    import {skills} from "$lib/configs/skill/skill.config.js";
</script>

<div class="flex flex-wrap py-4 gap-3 justify-center mx-auto w-5/6 lg:w-2/4">
    {#each skills as skill}
        <Tag href={skill.href} icon={skill.icon} text={skill.name}/>
    {/each}
</div>