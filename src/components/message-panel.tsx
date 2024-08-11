type MessagePanelProps = {
    message: string
}

const MessagePanel = (props: MessagePanelProps) => {
    return (
        <>
            {
                props.message && 
                <div className="text-center text-white px-6 bg-red-500 mt-4 ">
                    <p className="text-6xl">{props.message}</p>
                </div>
            }
        </>
    )
}

export default MessagePanel;