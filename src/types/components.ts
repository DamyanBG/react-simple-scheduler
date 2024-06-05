import { DateTime } from "luxon"

import { Period } from "./types";

export interface PeriodToggleBtnProps {
    periodType: Period;
    btnPeriodType: Period;
    onPeriodChange: (newPeriod: Period) => void;
}

export interface DateSelectProps {
    currentDate: DateTime;
    periodType: Period;
    onDateChange: (newDate: DateTime) => void;
}

export interface HeaderProps {
    currentDate: DateTime;
    periodType: Period;
}

export interface TimeFrameProps {
    id: string;
    handleDragEnd: ;
    handleDragStart: ;
    startTime: ;
    endTime: ;
    index: ;
    frameText: ;
    frameType: ;
}