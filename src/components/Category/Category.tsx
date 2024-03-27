import Card from "../Card/Card";

export default function Category({ className }: { className: string }) {
    return (
        <>
            <div className='w-full flex justify-between mt-5'>
                <p className='font-bold mx-2 uppercase'>Category</p>
                <a className='text-sm cursor-pointer'>Voir plus</a>
            </div>
            <div className={className}>
                <div className="absolute">

                </div>
                <Card className='w-[300px] sm:w-[350px] h-[550px] border border-gray-300 rounded-lg shadow-lg mx-2 my-2 text-slate-900 flex-shrink-0' imageSource='/afroked/images/addidas.jpg' />
                <Card className='w-[300px] sm:w-[350px] h-[550px] border border-gray-300 rounded-lg shadow-lg mx-2 my-2 text-slate-900 flex-shrink-0' imageSource='/afroked/images/addidas.jpg' />
                <Card className='w-[300px] sm:w-[350px] h-[550px] border border-gray-300 rounded-lg shadow-lg mx-2 my-2 text-slate-900 flex-shrink-0' imageSource='/afroked/images/addidas.jpg' />
                <Card className='w-[300px] sm:w-[350px] h-[550px] border border-gray-300 rounded-lg shadow-lg mx-2 my-2 text-slate-900 flex-shrink-0' imageSource='/afroked/images/addidas.jpg' />
                <Card className='w-[300px] sm:w-[350px] h-[550px] border border-gray-300 rounded-lg shadow-lg mx-2 my-2 text-slate-900 flex-shrink-0' imageSource='/afroked/images/addidas.jpg' />
                <Card className='w-[300px] sm:w-[350px] h-[550px] border border-gray-300 rounded-lg shadow-lg mx-2 my-2 text-slate-900 flex-shrink-0' imageSource='/afroked/images/addidas.jpg' />
                <Card className='w-[300px] sm:w-[350px] h-[550px] border border-gray-300 rounded-lg shadow-lg mx-2 my-2 text-slate-900 flex-shrink-0' imageSource='/afroked/images/addidas.jpg' />
                <Card className='w-[300px] sm:w-[350px] h-[550px] border border-gray-300 rounded-lg shadow-lg mx-2 my-2 text-slate-900 flex-shrink-0' imageSource='/afroked/images/addidas.jpg' />
                <Card className='w-[300px] sm:w-[350px] h-[550px] border border-gray-300 rounded-lg shadow-lg mx-2 my-2 text-slate-900 flex-shrink-0' imageSource='/afroked/images/addidas.jpg' />
            </div>
        </>
    )
}