import Icon from "../interfaces/Icon";

export default function Navbar({ className, siteName, icon }: { className: string, siteName: string, icon: Icon | undefined }) {
    return (
        <>
            <nav className={className}>
                {
                    icon?.icon
                }
                <p>{siteName}</p>
            </nav>
        </>
    )
}