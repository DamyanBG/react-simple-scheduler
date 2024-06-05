import IScheduler from "./components/Scheduler"

export const SomeComponent = ({ message }: { message: string }) => {
    const showMessage = message || "No message"

    return (
        <p>{showMessage}</p>
    )
}

export const Scheduler = IScheduler
