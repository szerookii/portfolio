<script lang="ts">
    import {experiences} from "$lib/configs/experience/experience.config";
    import ExperienceCard from "$lib/components/ExperienceCard.svelte";
    import {populateExperience} from "$lib/configs/experience/experience.utils.js";
</script>

<div class="grid gap-8 mx-auto mb-8 w-5/6 lg:w-2/4">
    {#each populateExperience(experiences) as experience}
        <ExperienceCard experience="{experience}"/>
    {/each}
</div>