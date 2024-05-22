import IPeriodToggleBtn from "./components/PeriodToggleBtn"

export const SomeComponent = ({ message }: { message: string }) => {
    const showMessage = message || "No message"

    return (
        <p>{showMessage}</p>
    )
}

export const PeriodToggleBtn = IPeriodToggleBtn