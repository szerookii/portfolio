<script lang="ts">
  import { Discord, Email, LinkedIn } from "$lib/components/icons";
  import AboutText from "$lib/components/surfaces/about-text.svelte";
  import { experiences } from "$lib/config/experience";
  import { skills } from "$lib/config/skill";
  import Link from "../icons/link.svelte";
  import { Button } from "../surfaces";
  import TimelineTitle from "../surfaces/timeline-title.svelte";
  import { profile } from "$lib/config/profile";
</script>

<section class="min-h-screen w-full px-4 flex flex-col items-center pb-4">
  <div class="flex flex-col items-center mb-4 space-y-2">
    <div class="border-purple-400 border-2 border-solid h-10 w-10"></div>
    <div
      class="border-purple-400 border-[3px] border-so lid h-8 w-28 transform -translate-x-14"
    ></div>
  </div>

  <AboutText />

  <div class="-mt-8 border-r-2 border-purple-600 h-36 md:h-24"></div>

  <div class="w-full">
    <div class="md:w-3/4 mx-auto rounded-lg">
      <div class="grid grid-cols-2 gap-8">
        <div class="pb-12">
          <TimelineTitle>technologies</TimelineTitle>
          <div class="flex flex-wrap gap-4">
            {#each skills as sk}
              <Button href={sk.href}>{sk.name}</Button>
            {/each}
          </div>
        </div>

        <div class="border-l-2 border-purple-600 -ml-[17px] pl-4">
          <TimelineTitle>formations</TimelineTitle>
          {#each profile.education as edu}
            <div class="mb-4 relative pl-6">
              <div
                class="absolute top-2 -left-[1.3rem] h-2 w-2 bg-white border border-purple-600"
              ></div>
              <p class="text-purple-600 font-semibold">{edu.period}</p>
              <p class="font-bold">{edu.title}</p>
              <p class="text-sm text-gray-600">{edu.detail}</p>
            </div>
          {/each}
        </div>

        <div class="flex flex-col gap-8">
          <div class="-mt-12">
            <TimelineTitle>me contacter</TimelineTitle>
            <div class="flex flex-wrap gap-4 text-sm md:text-lg">
              {#each profile.contacts as sw}
                <Button href={sw.link}
                  ><svelte:component
                    this={sw.icon}
                    color="white"
                    class="h-5 w-5 md:h-6 md:w-6"
                  />{sw.name}</Button
                >
              {/each}
            </div>
          </div>

          <div>
            <TimelineTitle>mes passions</TimelineTitle>
            <div class="flex flex-wrap gap-4 text-sm md:text-lg">
              {#each profile.interests as pa}
                <Button>{pa}</Button>
              {/each}
            </div>
          </div>
        </div>

        <div class="border-l-2 border-purple-600 -ml-[17px] pl-4 pb-12 -mt-12">
          <TimelineTitle>mes experiences</TimelineTitle>
          {#each experiences as exp}
            <div class="mb-4 relative pl-6">
              <div
                class="absolute top-2 -left-[1.3rem] h-2 w-2 bg-white border border-purple-600"
              ></div>
              <p class="text-purple-600 font-semibold">
                {exp.date.start
                  ? new Date(exp.date.start).getUTCFullYear()
                  : ""} - {exp.date.end
                  ? new Date(exp.date.end).getUTCFullYear()
                  : "présent"}
              </p>

              {#if exp.href}
                <a class="text-md md:text-lg flex gap-2 group" href={exp.href}>
                  <p class="font-bold">
                    {exp.company}
                    <span
                      class="-mt-1 block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-black"
                    ></span>
                  </p>
                  <Link size="1.2rem" color="black" class="mt-0.5" />
                </a>
              {:else}
                <h2 class="text-md md:text-lg flex gap-2 group">
                  <p class="font-bold">
                    {exp.company}
                  </p>
                </h2>
              {/if}

              <p class="text-sm text-gray-600">{exp.title}</p>
              <p class="text-sm text-gray-600">{exp.skills.join(", ")}</p>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
</section>
