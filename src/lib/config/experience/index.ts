export type ExperienceType = "OPEN SOURCE" | "PRO";

export type Experience = {
  title: string;
  company: string;
  date: {
    start?: number | null;
    end?: number | null;
  };
  href?: string | null;
  description: string[];
  skills: string[];
};

export const experiences: Experience[] = [
  {
    company: "OnGameCloud",
    title: "Création d'une plateforme d'hébergement",
    date: {
      start: Date.parse("2024-03-01"),
      end: null,
    },
    description: [
      "Mise en place d'un back-end en Go",
      "Mise en place d'un front-end (Svelte/SvelteKit)",
      "Mise en place d'une base de donnée PostgreSQL & Redis",
      "Gestion automatique de containers avec Docker",
      "Conception et développement d'une application mobile avec Flutter",
    ],
    skills: ["Go", "Svelte", "Redis", "PostgreSQL", "Docker", "Flutter"],
  },
  {
    company: "Anhost",
    title: "Création d'un site d'hébergement",
    date: {
      start: Date.parse("2024-03-01"),
      end: null,
    },
    description: [
      "Mise en place d'un back-end en Go",
      "Mise en place d'un front-end (Svelte/SvelteKit)",
      "Mise en place d'un dashboard en Svelte/SvelteKit",
      "Gestion automatique de containers avec Docker",
      "Mise en place d'une base de donnée PostgreSQL & Redis",
    ],
    skills: ["Go", "Svelte", "Redis", "PostgreSQL", "Docker", "Mikrotik"],
  },
  {
    company: "Goscord",
    title: "Intégration de l'API Discord en Go",
    date: {
      start: Date.parse("2020-10-11"),
      end: null,
    },
    description: [
      "Gestion d'événements WebSocket",
      "Découverte des défis liés à l'intégration de l'API Discord en Go",
      "Review de code et contribution à l'open source",
    ],
    href: "https://goscord.dev",
    skills: ["Golang", "UDP", "WebSocket", "Docker"],
  },
  {
    company: "MoonlyClient",
    title: "Développement d'un client Minecraft Bedrock",
    date: {
      start: Date.parse("2021-01-16"),
      end: Date.parse("2022-02-02"),
    },
    description: [
      "Développement d'un client Minecraft Bedrock en C++",
      "Développement d'un launcher Minecraft Bedrock en C#",
      "Rétro-ingénierie du client Minecraft Bedrock",
    ],
    href: "https://github.com/MoonlyClient",
    skills: ["C++", "C#", "Reverse Engineering"],
  },
];
