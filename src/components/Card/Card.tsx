export default function Card({ className, imageSource }: { className: string, imageSource: string }) {
    return (
        <>
            <div className={className}>
                <img className='w-auto h-1/2' src={imageSource} alt="" />
                <div className='w-full h-1/2 border-t border-slate-900 px-5 pt-2'>
                    <p className='font-bold text-xl'>Addidas XL</p>
                    <p className='font-light line-clamp-3'>
                        repellendus omnis voluptatum minima perspiciatis vel tenetur officiis vero inventore ducimus nostrum debitis, dolores necessitatibus sit!
                    </p>

                </div>
            </div>
        </>
    )
}