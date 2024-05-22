const SomeComponent = ({ message }: { message: string }) => {
    const showMessage = message || "No message"

    return (
        <p>{showMessage}</p>
    )
}

export default SomeComponent;