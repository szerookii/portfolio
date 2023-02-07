import type {Experience} from "./experience.type";
import dayjs from "dayjs";

export const experiences: Experience[] = [
    {
        type: "OPEN SOURCE",
        company: "Goscord",
        title: "Intégration de l'API Discord en Go",
        date: {
            start: dayjs("2020-10-11"),
            end: null,
        },
        dateFormat: null,
        description: [
            "Gestion d'événements WebSocket",
            "Découverte des défis liés à l'intégration de l'API Discord en Go",
            "Review de code et contribution à l'open source",
        ],
        link: "https://goscord.dev",
        skills: ["Golang", "UDP", "WebSocket", "Docker"],
    },
    {
        type: "OPEN SOURCE",
        company: "MoonlyClient",
        title: "Développement d'un client Minecraft Bedrock",
        date: {
            start: dayjs("2021-01-16"),
            end: dayjs("2022-02-02"),
        },
        dateFormat: null,
        description: [
            "Développement d'un client Minecraft Bedrock en C++",
            "Développement d'un launcher Minecraft Bedrock en C#",
            "Rétro-ingénierie du client Minecraft Bedrock",
        ],
        link: "https://github.com/MoonlyClient",
        skills: ["C++", "C#", "Reverse Engineering"],
    }
]