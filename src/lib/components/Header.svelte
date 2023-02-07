<script lang="ts">
    import Header from "$lib/images/header.png";
    import szeroki from "$lib/images/szeroki.png";
    import {Variables} from "$lib/utils/Variables";
    import {faDiscord, faGithub, faTwitter} from "@fortawesome/free-brands-svg-icons";
    import Link from "$lib/components/Link.svelte";
    import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
</script>

<section class="h-full w-full">
    <img
            class="max-h-56 w-full object-cover block object-center"
            src={Header}
            alt="header"
    >

    <div class="w-full shrink-0 flex items-center justify-start max-lg:pl-8 lg:pl-44 xl:pl-96">
        <img
                class="-mt-16 h-32 w-32 rounded-full"
                src={szeroki}
                alt="profile"
        >
    </div>

    <div class="w-full pr-8 shrink-0 grid items-center justify-start max-lg:pl-8 lg:px-44 xl:px-96">
        <p class="text-white text-4xl pt-8 font-bold">Développeur & Beatmaker</p>

        <p class="text-white text-xl py-8">Je suis szeroki, développeur et beatmaker passionné depuis 2016, je
            travaille
            principalement avec C++ et Golang. Je suis aussi intéressé par la rétro-ingénierie.</p>

        <div class="grid grid-cols-4 justify-center max-sm:grid-cols-2 gap-8 md:pt-4">
            <Link name="GitHub" link="https://github.com/{Variables.GITHUB_USERNAME}" icon={faGithub} />

            <Link name="Twitter" link="https://twitter.com/{Variables.TWITTER_USERNAME}" icon={faTwitter} />

            <Link name="Discord" link="https://discord.com/users/{Variables.DISCORD_ID}" icon={faDiscord} />

            <Link name="Email" link="mailto:{Variables.EMAIL}" icon={faEnvelope} />
        </div>
    </div>
</section>