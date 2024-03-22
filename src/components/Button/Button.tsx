export default function Button({ text, className }: { text: string, className: string }) {
    return (
        <>
            <button className={className}>
                {text}
            </button>
        </>
    )
}