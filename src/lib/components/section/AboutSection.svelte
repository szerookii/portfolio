<script lang="ts">
    import {faDiscord, faGithub, faTwitter} from "@fortawesome/free-brands-svg-icons";
    import SocialLink from "$lib/components/SocialLink.svelte";
    import {faEnvelope, faLocationDot} from "@fortawesome/free-solid-svg-icons";
    import Tag from "$lib/components/Tag.svelte";
    import {Variables} from "$lib/utils/Variables.js";
</script>

<section>
    <img
            alt="header"
            class="max-h-56 w-full object-cover block object-center"
            src="/header.png"
    >

    <div class="w-full shrink-0 flex items-center justify-start mx-auto w-5/6 lg:w-2/4">
        <img
                alt="profile"
                class="-mt-16 h-32 w-32 rounded-full"
                src="/szeroki.png"
        >

        <div class="flex justify-center ml-auto bg-[#161616] rounded-lg shadow-lg overflow-hidden">
            <SocialLink icon={faGithub} link="https://github.com/{Variables.GITHUB_USERNAME}"/>

            <SocialLink icon={faTwitter} link="https://twitter.com/{Variables.TWITTER_USERNAME}"/>

            <SocialLink icon={faDiscord} link="https://discord.com/users/{Variables.DISCORD_ID}"/>

            <SocialLink icon={faEnvelope} link="mailto:{Variables.EMAIL}"/>
        </div>
    </div>

    <div class="shrink-0 text-white grid items-center justify-start mx-auto w-5/6 lg:w-2/4">
        <div class="flex flex-wrap items-center gap-2.5">
            <p class="text-white text-3xl py-4 font-bold">Mathis L.</p>
            <Tag icon={faLocationDot} text="Lille" iconSize="lg" textSize="sm"/>
        </div>

        <p class="text-white text-lg">Développeur et beatmaker passionné depuis 2016, je
            travaille principalement avec C++ et Golang. Je suis aussi intéressé par la rétro-ingénierie.</p>
    </div>
</section>
