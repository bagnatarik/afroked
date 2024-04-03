import { loadingIcon } from "../icons";

export default function Loading({ className }: { className: string }) {
    return (
        <div className={className}>
            {loadingIcon.icon}
        </div>
    )
}