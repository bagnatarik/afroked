import Button from "../Button/Button";

export default function Card({ className, imageSource }: { className: string, imageSource: string }) {
    return (
        <>
            <div className={className}>
                <img className='w-auto h-1/2' src={imageSource} alt="" />
                <div className='w-full h-1/2 border-t border-slate-900 px-5 pt-2 flex flex-col'>
                    <p className='font-bold text-xl mb-2'>Addidas XL</p>
                    <p className='font-normal text-base line-clamp-3 mb-3'>
                        repellendus omnis voluptatum minima perspiciatis vel tenetur officiis vero inventore ducimus nostrum debitis, dolores necessitatibus sit!
                    </p>

                    <a className='inline-block text-slate-700 w-full text-end cursor-pointer'>Voir plus</a>
                    <div className="grow flex flex-col items-start justify-end pb-2">
                        <p className="text-4xl mb-3 text-end w-full">180 $</p>
                        <Button isAdd={true} className='w-full flex justify-center py-3 border transition-all duration-500 bg-slate-900 hover:bg-transparent hover:border hover:text-slate-900 hover:border-slate-900 text-white' text="Add to card" />
                    </div>

                </div>
            </div>
        </>
    )
}