import Button from "../Button/Button";

export default function Card({ className, imageSource }: { className: string, imageSource: string }) {
    return (
        <>
            <div className={className}>
                <img className='w-auto h-2/3 rounded-t-lg' src={imageSource} alt="" />
                <div className='w-full h-1/3 border-t border-gray-300 px-5 pt-2 flex flex-col'>
                    <p className='font-bold text-xl mb-2'>Addidas XL</p>
                    {/* <p className='font-normal text-base line-clamp-3 mb-3'>
                        repellendus omnis voluptatum minima perspiciatis vel tenetur officiis vero inventore ducimus nostrum debitis, dolores necessitatibus sit!
                    </p> */}

                    {/* <a className='inline-block text-slate-700 w-full text-end cursor-pointer'>Voir plus</a> */}
                    <div className="grow flex items-center justify-between pb-2">
                        <p className="text-2xl font-bold mb-3 text-start w-1/2">1800 $</p>
                        <Button isAdd={false} className=' w-1/2 flex justify-center py-2 border border-transparent transition-all duration-500 bg-slate-900 hover:bg-transparent hover:border hover:text-slate-900 hover:border-slate-900 text-white rounded-lg' text="Voir plus" />
                    </div>

                </div>
            </div>
        </>
    )
}