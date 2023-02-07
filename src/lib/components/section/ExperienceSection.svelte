<script lang="ts">
    import {experiences} from "$lib/configs/experience/experience.config";
    import ExperienceCard from "$lib/components/ExperienceCard.svelte";
    import {populateExperience} from "$lib/configs/experience/experience.utils.js";
</script>

<div class="max-lg:pl-8 px-8 lg:px-44 xl:px-96">
    {#each populateExperience(experiences) as experience}
        <ExperienceCard experience="{experience}"/>
    {/each}
</div>