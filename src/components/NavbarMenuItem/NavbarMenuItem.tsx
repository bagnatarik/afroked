export default function NavbarMenuItem({ className, text, link }: { className: string, text: string, link: string }) {
    return (
        <>
            <li className={className}>
                <a className='transition-all duration-1000 group-hover:text-lg' href={link}>{text}</a>
                <div className='transition-all duration-1000 w-0 h-[3px] dark:bg-white bg-slate-900 group-hover:w-full'>

                </div>
            </li>
        </>
    )
}