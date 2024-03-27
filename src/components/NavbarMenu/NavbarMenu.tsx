import { useState } from "react";
import Button from "../Button/Button";
import NavbarMenuItem from "../NavbarMenuItem/NavbarMenuItem";

export default function NavbarMenu({ className }: { className: string }) {
    const [isOpen, setIsOpen] = useState(false)

    function openMenu() {
        setIsOpen((isOpen) => !isOpen)
    }


    const menu = [
        {
            key: 0,
            text: 'Home',
            link: ''
        },
        {
            key: 1,
            text: 'Products',
            link: ''
        },
        {
            key: 2,
            text: 'About',
            link: ''
        },
        {
            key: 3,
            text: 'FAQ',
            link: ''
        }
    ]

    const menuComponent = isOpen ? menu.map((item) => <NavbarMenuItem key={item.key} link={item.link} className='py-4 transition-all duration-500 hover:cursor-pointer px-5 hover:text-white hover:bg-slate-600 dark:hover:bg-slate-700' text={item.text} />) : menu.map((item) => <NavbarMenuItem key={item.key} link={item.link} className='hidden md:block mx-4 group' text={item.text} />)

    return (
        <>
            {
                isOpen ? (
                    <ul className={className}>
                        <button onClick={openMenu} className='md:hidden transition-all animate-open duration-1000 delay-1000'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <div className='z-50 transition-all duration-700 animate-open absolute flex flex-col top-14 left-0 w-full dark:bg-slate-800 bg-slate-100 pt-5'>
                            {menuComponent}
                            <Button isAdd={false} className='px-10 py-2 mx-5 mb-5 border border-transparent rounded-lg transition-all duration-500 bg-slate-900 dark:bg-transparent hover:bg-transparent hover:border hover:text-slate-900 hover:border-slate-900 text-white dark:hover:bg-white dark:hover:text-slate-800' text="S'inscrire" />
                        </div>
                    </ul>
                ) : (
                    <ul className={className}>
                        {menuComponent}
                        <Button isAdd={false} className='hidden md:block px-10 py-2 ml-5 border border-transparent rounded-lg transition-all duration-500 bg-slate-900 dark:bg-transparent hover:bg-transparent hover:border hover:text-slate-900 hover:border-slate-900 text-white dark:hover:bg-white dark:hover:text-slate-800' text="S'inscrire" />
                        <button onClick={openMenu} className='md:hidden group animate-open duration-1000 delay-1000'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="transition-all w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </button>
                    </ul>
                )
            }
        </>
    )
}