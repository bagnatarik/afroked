export default function Card({ className }: { className: string }) {
    return (
        <>
            <div className={className} >
                <div className="w-full h-[404px] flex rounded-t-3xl">
                    <img className="rounded-t-3xl" src="/images/addidas.jpg" alt="" />
                </div>
                <p className="mt-5 mx-5 text-[1.5rem] text-[#00356B] font-bold">ADDIDAS XL</p>
                <p className="mt-2 mx-5 text-[0.8rem] font-light">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima necessitatibus omnis magni corporis, laborum hic...</p>
                <div className="mt-4 px-5 flex w-full items-center">
                    <p className="grow text-[#00356B] text-3xl">18 000 FCFA</p>

                    <a className="text-[#00356B] text-sm">Voir plus</a>
                </div>
            </div>

        </>
    )
}