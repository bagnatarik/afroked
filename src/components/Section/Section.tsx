import './Section.css';

import Button from "../Button/Button";
import Category from '../Category/Category';

export default function Section({ className }: { className: string }) {
    return (
        <>
            <div className={className}>
                <HeroSection />
                <div className='w-full min-h-screen bg-white flex flex-col items-center px-4'>
                    <div className='w-full'>
                        <form className='my-10 w-full flex justify-center items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 relative left-8 text-slate-900">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                            <input className='outline outline-1 w-1/2 py-2 px-14' type="text" name="" id="" />
                            <Button isAdd={false} className='px-10 py-2 ml-2 border transition-all duration-500 bg-slate-900 hover:bg-transparent hover:border hover:text-slate-900 hover:border-slate-900 text-white' text="Rechercher" />
                        </form>
                    </div>
                    <div className='w-full flex flex-wrap items-center justify-center'>
                        <Category className='flex overflow-x-auto mb-5' />
                        <Category className='flex overflow-x-auto mb-5' />
                    </div>
                </div>
            </div>
        </>
    )
}

function HeroSection() {
    return (
        <>
            <div className='w-3/4 md:h-[750px] flex flex-col items-center justify-center'>
                <p className='text-slate-800 dark:text-white font-bold text-center text-7xl mb-5 animateTextLR'>Bienvenue sur AFROKED - Votre destination shopping en ligne ultime !</p>
                <p className='text-slate-800 dark:text-white text-center text-lg mb-10 animateTextRL'>Découvrez une sélection imbattable de produits de qualité. Faites vos achats en ligne rapidement et facilement. Trouvez tout ce dont vous avez besoin en quelques clics. Rejoignez-nous dès maintenant !</p>
                <Button isAdd={false} className='hidden md:block px-56 py-4 border transition-all duration-500 bg-slate-900 dark:bg-transparent hover:bg-transparent hover:border hover:text-slate-900 hover:border-slate-900 text-white dark:hover:bg-white dark:hover:text-slate-800' text="Commencer" />
            </div>
        </>
    )
}