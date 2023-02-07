<script lang="ts">
    import type {Skill} from "$lib/interfaces/skill";
    import {
        faCss3,
        faGolang,
        faHtml5,
        faJs,
        faNodeJs, faNpm,
        faPhp,
        faRust,
        faSass,
        faVuejs
    } from "@fortawesome/free-brands-svg-icons";
    import Tag from "$lib/components/Tag.svelte";
    import {faDatabase} from "@fortawesome/free-solid-svg-icons";

    let skills: Skill[] = [
        {
            name: "HTML",
            icon: faHtml5,
            href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
        },
        {
            name: "JavaScript",
            icon: faJs,
            href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        },
        {
            name: "TypeScript",
            icon: undefined,
            href: "https://www.typescriptlang.org/",
        },
        {
            name: "PHP",
            icon: faPhp,
            href: "https://www.php.net/",
        },
        {
            name: "CSS",
            icon: faCss3,
            href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
        },
        {
            name: "SASS",
            icon: faSass,
            href: "https://sass-lang.com/",
        },
        {
            name: "Golang",
            icon: faGolang,
            href: "https://golang.org/",
        },
        {
            name: "C++",
            icon: undefined,
            href: "https://isocpp.org/",
        },
        {
            name: "Rust",
            icon: faRust,
            href: "https://www.rust-lang.org/",
        },
        {
            name: "VueJS",
            icon: faVuejs,
            href: "https://vuejs.org/",
        },
        {
            name: "Svelte",
            icon: undefined,
            href: "https://svelte.dev/",
        },
        {
            name: "Node.js",
            icon: faNodeJs,
            href: "https://nodejs.org/",
        },
        {
            name: "Nuxt",
            icon: undefined,
            href: "https://nuxtjs.org/",
        },
        {
            name: "NPM",
            icon: faNpm,
            href: "https://www.npmjs.com/",
        },
        {
            name: "MySQL",
            icon: faDatabase,
            href: "https://www.mysql.com/",
        },
        {
            name: "MongoDB",
            icon: faDatabase,
            href: "https://www.mongodb.com/",
        },
    ]
</script>

<div class="flex flex-wrap gap-3 justify-center max-lg:pl-8 px-8 lg:px-44 xl:px-96">
    {#each skills as skill}
        <Tag href={skill.href} icon={skill.icon} text={skill.name} />
    {/each}
</div>