import './Section.css';

import Button from "../Button/Button";
import Category from '../Category/Category';

export default function Section({ className }: { className: string }) {
    return (
        <>
            <div className={className}>
                <HeroSection />
                <div className='w-full sm:min-h-screen bg-white flex flex-col items-center px-4'>
                    <div className='w-full'>
                        <form className='my-10 w-full flex justify-center items-center'>
                            <input className='outline outline-1 w-1/2 py-2 px-5 rounded-lg' type="text" name="" id="" placeholder='Rechercher' />
                            <Button isAdd={false} isSearch={true} className='group h-full px-5 py-3 ml-2 flex items-center jusce border border-transparent transition-all duration-500 bg-slate-900 hover:bg-transparent hover:border hover:text-slate-900 hover:border-slate-900 text-white rounded-lg' text="" />
                        </form>
                    </div>
                    <div className='w-full flex flex-wrap items-center justify-center'>
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
            <div className='hidden w-3/4 md:h-[750px] md:flex flex-col items-center justify-center'>
                <p className='text-slate-800 dark:text-white font-bold text-center text-7xl mb-5 animateTextLR'>Bienvenue sur AFROKED - Votre destination shopping en ligne ultime !</p>
                <p className='text-slate-800 dark:text-white text-center text-lg mb-10 animateTextRL'>Découvrez une sélection imbattable de produits de qualité. Faites vos achats en ligne rapidement et facilement. Trouvez tout ce dont vous avez besoin en quelques clics. Rejoignez-nous dès maintenant !</p>
                <Button isSearch={false} isAdd={false} className='hidden md:block px-56 py-4 border transition-all duration-500 bg-slate-900 dark:bg-transparent hover:bg-transparent hover:border hover:text-slate-900 hover:border-slate-900 text-white dark:hover:bg-white dark:hover:text-slate-800 rounded-lg' text="Commencer" />
            </div>
        </>
    )
}