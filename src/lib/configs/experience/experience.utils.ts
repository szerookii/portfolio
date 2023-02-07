import type {Experience} from "./experience.type";
import dayjs from "dayjs";

// https://github.com/Bluzzi/Portfolio/blob/main/lib/configs/experience/experience.util.ts#L5
export function populateExperience(experiences: Experience[]): Experience[] {
    return experiences.map(exp => {
        const dateFormat = {
            start: exp.date.start.format("DD/MM/YYYY"),
            end: exp.date.end ? exp.date.end.format("DD/MM/YYYY") : "présent"
        };

        if(!exp.date.end)
            exp.date.end = dayjs();

        return {
            ...exp,
            dateFormat
        };
    }).sort((a, b) => a.date.end.isBefore(b.date.end) ? 1 : -1);
}