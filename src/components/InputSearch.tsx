import Icon from "../interfaces/Icon";
import Button from "./Button";

export default function InputSearch({ className, formClassName, inputClassName, buttonClassName, icon, placeholder }: { className: string, formClassName: string, inputClassName: string, buttonClassName: string, icon: Icon, placeholder: string }) {
    return (
        <>
            <div className={className}>
                <form className={formClassName}>
                    <input placeholder={placeholder} className={inputClassName} type="text" />
                    <Button onclick={undefined} link={undefined} text={undefined} className={buttonClassName} icon={icon} />
                </form>
            </div>
        </>
    )
}