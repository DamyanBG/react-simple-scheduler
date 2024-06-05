import { SchedulerProps } from "../types/components";
import { PeriodTypeEnum } from "../types/types";
import Body from "./Body";
import DateSelect from "./DateSelect";
import Header from "./Header";
import PeriodToggleBtn from "./PeriodToggleBtn";

const Scheduler = ({
    currentDate,
    periodType,
    handleDateChange,
    handlePeriodTypeChange,
    gridTemplateColumnsValue,
    resourcesWithFrames,
    handleDragEnd,
    handleDragStart,
    handleDrop,
}: SchedulerProps) => {
    
    return (
        <section
            style={{
                width: "100%",
                background: "#EDE8F5",
                border: "1px solid #333"
            }}
        >
            <h2>Scheduler</h2>
            <section>
                <article
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        padding: "12px 24px",
                    }}
                >
                    <DateSelect
                        currentDate={currentDate}
                        periodType={periodType}
                        onDateChange={handleDateChange}
                    />
                    <article
                        style={{
                            minWidth: "350px",
                            display: "flex",
                            justifyContent: "space-between",
                        }}  
                    >
                        <PeriodToggleBtn
                            periodType={periodType}
                            btnPeriodType={PeriodTypeEnum.day}
                            onPeriodChange={handlePeriodTypeChange}
                        />
                        <PeriodToggleBtn
                            periodType={periodType}
                            btnPeriodType={PeriodTypeEnum.week}
                            onPeriodChange={handlePeriodTypeChange}
                        />
                        <PeriodToggleBtn
                            periodType={periodType}
                            btnPeriodType={PeriodTypeEnum.month}
                            onPeriodChange={handlePeriodTypeChange}
                        />
                    </article>
                </article>
                <section 
                    className="schedulerWrapper"
                    style={{
                        display: "grid",
                        gridTemplateColumns: gridTemplateColumnsValue,
                        gridAutoRows: "24px",
                        overflowX: periodType === PeriodTypeEnum.month ? "scroll" : "auto"
                    }}
                >
                    <article style={{ textAlign: "center" }}>Homes</article>
                    <Header periodType={periodType} currentDate={currentDate} />
                    <Body
                        periodType={periodType}
                        resourcesWithFrames={resourcesWithFrames}
                        currentDate={currentDate}
                        handleDragEnd={handleDragEnd}
                        handleDragStart={handleDragStart}
                        handleDrop={handleDrop}
                    />
                </section>
            </section>
        </section>
    )
}

export default Scheduler;