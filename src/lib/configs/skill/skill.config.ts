import {
    faCss3,
    faGolang,
    faHtml5,
    faJs,
    faNodeJs,
    faNpm,
    faPhp,
    faRust,
    faSass,
    faVuejs
} from "@fortawesome/free-brands-svg-icons";
import {faDatabase} from "@fortawesome/free-solid-svg-icons";
import type {Skill} from "./skill.type";

export const skills: Skill[] = [
    {
        name: "HTML",
        icon: faHtml5,
        href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
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
        name: "PostgresSQL",
        icon: faDatabase,
        href: "https://www.postgresql.org/",
    },
    {
        name: "MongoDB",
        icon: faDatabase,
        href: "https://www.mongodb.com/",
    },
];