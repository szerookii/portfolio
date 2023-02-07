import type {Dayjs} from "dayjs";

export type ExperienceType = "OPEN SOURCE" | "PRO";

export type Experience = {
    type: ExperienceType;
    title: string;
    company: string;
    date: {
        start: Dayjs;
        end: Dayjs;
    },
    dateFormat: {
        start: string;
        end: string;
    },
    link: string | null;
    description: string[];
    skills: string[];
}