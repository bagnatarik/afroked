import Icon from "../interfaces/Icon";

// TODO: try to modify this because of a callable function event 

export default function Button({ className, text, icon, link, onclick }: { className: string, text: string | undefined, icon: Icon, link: string | undefined, onclick: CallableFunction | undefined }) {
    return (
        <button onClick={() => {
            if (link) {
                onclick && onclick(link)
            } else {
                onclick && onclick()
            }
        }} className={className}>
            {
                icon.position ? (
                    <>
                        {icon.icon}
                        <span>{text}</span>
                    </>
                ) : (
                    <>
                        <span>{text}</span>
                        {icon.icon}
                    </>
                )
            }
        </button>
    )
}