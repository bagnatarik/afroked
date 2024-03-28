import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export interface Category {
    id: number,
    name: string
}
export interface Product {
    id: number,
    name: string,
    price: number,
    stock: number,
    image: string,
    description: string
}

export default function Section({ className }: { className: string }) {
    const [data, setData] = useState([])
    return (
        <>
            <section className={className}>
                <InputSearch />
                <Categories listCardSetData={setData} className='w-full h-10 my-2 flex overflow-auto' />
                <ListCard data={data} setData={setData} className='grow flex w-full overflow-x-auto items-center' />
            </section>
        </>
    )
}

export function InputSearch() {
    return (
        <>
            <form className='w-full flex px-2 mb-2'>
                <input placeholder='Recherchez votre produit...' className='text-sm px-5 w-full outline-none border-2 border-gray-900 rounded-md' type="text" name="" id="" />
                <Button id={undefined} onclick={() => { }} className='text-sm items-center h-full hover:bg-gray-700 flex py-2 px-5 ml-2 bg-gray-800 text-white rounded-md' isSearchButton={true} text='Rechercher' />
            </form>
        </>
    )
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function Button({ text, className, isSearchButton, onclick, id }: { text: string, className: string, isSearchButton: boolean, onclick: any | undefined, id: number | undefined }) {
    return (
        <>
            <button onClick={() => onclick(id)} className={className}>
                {
                    isSearchButton && (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>)
                }
                <span>{text}</span>
            </button>
        </>
    )
}

export function Categories({ className, listCardSetData }: { className: string, listCardSetData: CallableFunction }) {
    const [data, setData] = useState([])

    useEffect(() => {
        const fetch = async () => {
            try {
                const response = await axios.get('https://afroked.onrender.com/api/categories/all')
                setData(response.data)
            } catch (error) {
                console.error('Something happened:', error);
            }
        }

        fetch()
    }, [])

    const changeListProduct = async (key: number | undefined) => {
        try {
            let response = null
            if (key) {
                console.log('hey');

                response = await axios.get(`https://afroked.onrender.com/api/categories/${key}/products`)
            } else {
                console.log('key');

                response = await axios.get(`https://afroked.onrender.com/api/categories/all`)
            }
            listCardSetData(response.data)
            console.log('hello');

        } catch (error) {
            console.error('Something happened:', error);
        }
    }

    const categoriesComponent = data.map((category: Category) => <Button onclick={changeListProduct} className='text-sm flex-shrink-0 items-center h-full hover:bg-gray-700 flex py-2 px-5 ml-2 bg-gray-800 text-white rounded-lg' isSearchButton={false} text={category.name} id={category.id} key={category.id} />)


    return (
        <>
            <div className={className}>
                {
                    categoriesComponent
                }
            </div>
        </>
    )
}

export function ListCard({ className, data, setData }: { className: string, data: Array<Product>, setData: CallableFunction }) {

    useEffect(() => {
        const fetch = async () => {
            try {
                const response = await axios.get('https://afroked.onrender.com/api/products/all')
                setData(response.data)
            } catch (error) {
                console.error('Something happened:', error);
            }
        }

        fetch()
    })

    const listProducts = data.map((product: Product) => (<Card product={product} name={product.name} key={product.id} price={product.price} imageUrl={product.image} className='h-[400px] w-[300px] border-gray-300 rounded-lg shadow-lg border mx-2 flex-shrink-0 py-2' />))

    return (
        <>
            <div className={className}>
                {
                    listProducts
                }
            </div>
        </>
    )
}

export function Card({ className, imageUrl, price, name, product }: { className: string, imageUrl: string, price: number, name: string, product: Product }) {

    return (
        <>
            <div className={className}>
                <img className='w-full h-2/3 rounded-t-lg' src={imageUrl} alt="no image" />
                <div className="w-full h-1/3 border-t-2 flex flex-col justify-center py-2">
                    <p className="font-semibold text-xl ml-2 grow">{name}</p>
                    <div className="flex">
                        <p className="w-1/2 text-2xl font-bold ml-2">{price} FCFA</p>
                        <div className="w-1/2">
                            <Link to={`detail/${product.id}`}>
                                <Button id={undefined} onclick={() => { }} className="text-sm flex-shrink-0 items-center hover:bg-gray-700 flex py-3 px-10 mr-2 bg-gray-800 text-white rounded-lg" text="Voir plus" isSearchButton={false} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}