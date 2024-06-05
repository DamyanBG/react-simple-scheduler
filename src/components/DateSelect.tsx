import { DateTime, DateTimeFormatOptions } from "luxon"

import { DateSelectProps } from "../types/components";
import { MONTHS } from "../utils/utils";
import { PERIOD_TYPES } from "../utils/enums";

const customOptions: DateTimeFormatOptions = { weekday: "long", year: "numeric", month: "long", day: "numeric" };

const formatWeekBtnText = (dateObj: DateTime) => {
    const weekNumber = dateObj.weekNumber;
    const year = dateObj.year;

    const suffies = ["th", "st", "nd", "rd"];
    const relevantDigits = weekNumber % 100;
    const suffix = relevantDigits >= 11 && relevantDigits <= 13 ? "th" : suffies[weekNumber % 10] || "th";

    return `${weekNumber}${suffix} Week of ${year}`;
};

const DateSelect = ({ currentDate, periodType, onDateChange }: DateSelectProps) => {
    console.log("Rendering PeriodSelect or whatever name it have")
    const btnText = periodType === PERIOD_TYPES.day
        ? currentDate.toLocaleString(customOptions)
        : periodType === PERIOD_TYPES.week
            ? formatWeekBtnText(currentDate)
            : `${MONTHS[currentDate.month - 1].text} ${currentDate.year}`;

    const handlePrevioustPeriodClick = () => {
        if (periodType === PERIOD_TYPES.day) {
            const newDate = currentDate.minus({ days: 1 });
            onDateChange(newDate);
            return
        }
        if (periodType === PERIOD_TYPES.week) {
            const newDate = currentDate.minus({ days: 7 });
            onDateChange(newDate);
            return
        }
        const newDate = currentDate.minus({ months: 1 });
        onDateChange(newDate);
    };

    const handleNextPeriodClick = () => {
        if (periodType === PERIOD_TYPES.day) {
            const newDate = currentDate.plus({ days: 1 });
            onDateChange(newDate);
            return
        }
        if (periodType === PERIOD_TYPES.week) {
            const newDate = currentDate.plus({ days: 7 });
            onDateChange(newDate);
            return
        }
        const newDate = currentDate.plus({ months: 1 });
        onDateChange(newDate);
    };

    return (
        <article>
            <button type="button" onClick={handlePrevioustPeriodClick}>
                &larr;
            </button>
            <span
                style={{
                    paddingLeft: "6px",
                    paddingRight: "6px",
                }}
            >
                {btnText}
            </span>
            <button type="button" onClick={handleNextPeriodClick}>
                &rarr;
            </button>
        </article>
    );
};

export default DateSelect;