import Icon from "../interfaces/Icon";

export default function FloattingButton({ className, icon, handleClick }: { className: string, icon: Icon, handleClick: CallableFunction }) {
    return (
        <>
            <div onClick={
                () => {
                    handleClick()
                }
            } className={className}>
                {icon.icon}
            </div>
        </>
    )
}