import type {Experience} from "./experience.type";

// https://github.com/Bluzzi/Portfolio/blob/main/lib/configs/experience/experience.util.ts#L5
export function populateExperience(experiences: Experience[]): Experience[] {
    return experiences.map(exp => {
        const dateFormat = {
            start: exp.date.start.format("DD/MM/YYYY"),
            end: exp.date.end ? exp.date.end.format("DD/MM/YYYY") : "présent"
        };

        return {
            ...exp,
            dateFormat
        };
    }).sort((a, b) => a.date.start.isBefore(b.date.start) ? 1 : -1);
}