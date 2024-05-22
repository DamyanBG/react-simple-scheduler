import { PeriodToggleBtnProps } from "../types/components";
import { capitalizeFirstLetter } from "../utils/utils";

const PeriodToggleBtn = ({ periodType, btnPeriodType, onPeriodChange }: PeriodToggleBtnProps) => {
    const handleClick = () => {
        onPeriodChange(btnPeriodType);
    };

    return (
        <button type="button" className={periodType === btnPeriodType ? "activePerBtn" : "periodButton"} onClick={handleClick}>
            {capitalizeFirstLetter(btnPeriodType)}
        </button>
    );
};

export default PeriodToggleBtn;
