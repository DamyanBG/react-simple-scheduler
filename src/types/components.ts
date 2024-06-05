import { DateTime } from "luxon"

import { Period, ResourcesWithFrames } from "./types";

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

export interface TimeFramePropsAbs {
    id: string | number;
    index: number;
    frameText: string;
    handleDragStart: (meetingId: string | number, frames: number) => (e: React.DragEvent<HTMLDivElement>) => void;
    handleDragEnd: (e: React.DragEvent<HTMLDivElement>) => void;
}

export interface FullHourlyTimeFrameProps extends TimeFramePropsAbs {
    startTime: number;
    endTime: number;
}

export interface StartHourlyTimeFrameProps extends TimeFramePropsAbs {
    endTime: number;
}

export interface EndHourlyTimeFrameProps extends TimeFramePropsAbs {
    startTime: number;
}

export interface HourlyTimeFrameFactoryProps extends FullHourlyTimeFrameProps {
    frameType: string;
}

export interface WeekDaysFrameProps extends TimeFramePropsAbs {
    startDateWeekdayNum: number;
    endDateWeekdayNum: number;
}

export interface MonthDaysFrameProps extends TimeFramePropsAbs {
    startDate: number;
    endDate: number;
}

export interface BodyProps {
    resourcesWithFrames: ResourcesWithFrames;
    currentDate: DateTime;
    handleDragEnd: (e: React.DragEvent<HTMLDivElement>) => void;
    handleDragStart: (meetingId: string | number, frames: number) => (e: React.DragEvent<HTMLDivElement>) => void;
    handleDrop: (i: number) => (e: React.DragEvent<HTMLDivElement>) => void;
}

export interface BodyFactoryProps {
    periodType: Period;
    resourcesWithFrames: ResourcesWithFrames;
    currentDate: DateTime;
    handleDragEnd: (e: React.DragEvent<HTMLDivElement>) => void;
    handleDragStart: (meetingId: string | number, frames: number) => (e: React.DragEvent<HTMLDivElement>) => void;
    handleDrop: (i: number) => (e: React.DragEvent<HTMLDivElement>) => void;
}

export interface SchedulerProps {
    currentDate: DateTime;
    periodType: Period;
    handleDateChange: (newDate: DateTime) => void;
    handlePeriodTypeChange: (newPeriod: Period) => void;
    gridTemplateColumnsValue: string;
    resourcesWithFrames: ResourcesWithFrames;
    handleDragEnd: (e: React.DragEvent<HTMLDivElement>) => void;
    handleDragStart: (meetingId: string | number, frames: number) => (e: React.DragEvent<HTMLDivElement>) => void;
    handleDrop: (i: number) => (e: React.DragEvent<HTMLDivElement>) => void;
}
