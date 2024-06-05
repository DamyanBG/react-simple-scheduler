import IPeriodToggleBtn from "./components/PeriodToggleBtn"
import IDateSelect from "./components/DateSelect"
import IHeader from "./components/Header"

export const SomeComponent = ({ message }: { message: string }) => {
    const showMessage = message || "No message"

    return (
        <p>{showMessage}</p>
    )
}

export const PeriodToggleBtn = IPeriodToggleBtn
export const DateSelect = IDateSelect
export const Header = IHeader