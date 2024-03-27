import Button from "../Button/Button";
import Card from "../Card/Card";

export default function Category({ className }: { className: string }) {
    return (
        <>

            <ListCategory className='w-full h-18 flex justify-between mt-5 overflow-auto pb-4' />
            <div className={className}>
                <Card className='w-[300px] sm:w-[350px] h-[450px] border border-gray-300 rounded-lg shadow-lg mx-2 my-2 text-slate-900 flex-shrink-0' imageSource='/afroked/images/addidas.jpg' />
                <Card className='w-[300px] sm:w-[350px] h-[450px] border border-gray-300 rounded-lg shadow-lg mx-2 my-2 text-slate-900 flex-shrink-0' imageSource='/afroked/images/addidas.jpg' />
                <Card className='w-[300px] sm:w-[350px] h-[450px] border border-gray-300 rounded-lg shadow-lg mx-2 my-2 text-slate-900 flex-shrink-0' imageSource='/afroked/images/addidas.jpg' />
                <Card className='w-[300px] sm:w-[350px] h-[450px] border border-gray-300 rounded-lg shadow-lg mx-2 my-2 text-slate-900 flex-shrink-0' imageSource='/afroked/images/addidas.jpg' />
                <Card className='w-[300px] sm:w-[350px] h-[450px] border border-gray-300 rounded-lg shadow-lg mx-2 my-2 text-slate-900 flex-shrink-0' imageSource='/afroked/images/addidas.jpg' />
                <Card className='w-[300px] sm:w-[350px] h-[450px] border border-gray-300 rounded-lg shadow-lg mx-2 my-2 text-slate-900 flex-shrink-0' imageSource='/afroked/images/addidas.jpg' />
                <Card className='w-[300px] sm:w-[350px] h-[450px] border border-gray-300 rounded-lg shadow-lg mx-2 my-2 text-slate-900 flex-shrink-0' imageSource='/afroked/images/addidas.jpg' />
                <Card className='w-[300px] sm:w-[350px] h-[450px] border border-gray-300 rounded-lg shadow-lg mx-2 my-2 text-slate-900 flex-shrink-0' imageSource='/afroked/images/addidas.jpg' />
                <Card className='w-[300px] sm:w-[350px] h-[450px] border border-gray-300 rounded-lg shadow-lg mx-2 my-2 text-slate-900 flex-shrink-0' imageSource='/afroked/images/addidas.jpg' />
            </div>
        </>
    )
}

export function ListCategory({ className }: { className: string }) {
    const categoriesDeProduits = [
        { nom: "Électronique grand public", id: 1 },
        { nom: "Mode", id: 2 },
        { nom: "Maison et jardin", id: 3 },
        { nom: "Santé et beauté", id: 4 },
        { nom: "Alimentation et boissons", id: 5 },
        { nom: "Jouets et jeux", id: 6 },
        { nom: "Sports et plein air", id: 7 },
        { nom: "Automobiles et motos", id: 8 },
        { nom: "Animaux de compagnie", id: 9 },
        { nom: "Équipements et fournitures de bureau", id: 10 }
    ];
    const categoryComponent = categoriesDeProduits.map((category) => (
        <Button className='px-2 flex-shrink-0 mx-2 py-2 border-transparent transition-all duration-500 bg-slate-900 dark:bg-transparent hover:bg-transparent hover:border hover:text-slate-900 hover:border-slate-900 text-white dark:hover:bg-white dark:hover:text-slate-800 rounded-lg' isAdd={false} isSearch={false} key={category.id} text={category.nom} />
    ))

    return (
        <>
            <div className={className}>
                {
                    categoryComponent
                }
            </div>
        </>
    )
}