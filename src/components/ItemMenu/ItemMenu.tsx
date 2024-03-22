import { useState } from "react"

export default function ItemMenu({ text, className, isDropdown }: { text: string, className: string, isDropdown: boolean }) {
    const [isClick, setIsClick] = useState(false)

    const click = () => {
        console.log(isClick);

        setIsClick((isClick) => !isClick)
        console.log(isClick);

    }

    return (
        <>
            <li className={className}>
                <div onClick={click}>
                    <a className="group-hover:scale-x-110 cursor-pointer">{text}</a>
                    <div className="h-[0.188rem] w-0 opacity-0 transition-all duration-500 group-hover:w-full bg-red-50 group-hover:opacity-100">
                    </div>
                </div>
                {
                    isDropdown && (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 transition-all delay-75 duration-300 opacity-100 rotate-0 group-hover:opacity-100 group-hover:-rotate-90 stroke-2 ml-2 self-center">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    )
                }
                {
                    (isClick && isDropdown) && (
                        <>
                            <ul className="absolute top-16 border bg-white text-[#00356B] py-2 px-1 rounded-md mt-2">
                                <li className="text-xs px-16 py-4 hover:text-white hover:bg-[#00356B] rounded-md cursor-pointer">
                                    <a href="">Hello</a>
                                </li>
                                <li className="text-xs px-16 py-4 hover:text-white hover:bg-[#00356B] rounded-md cursor-pointer">
                                    <a href="">Hello</a>
                                </li>
                            </ul>
                        </>
                    )
                }
            </li>
        </>
    )
}