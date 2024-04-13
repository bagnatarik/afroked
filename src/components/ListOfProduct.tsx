import { useEffect, useRef, useState } from "react";
import IProductService from "../services/IProductService";
import ProductService from "../services/classes/ProductService";
import Card from "./Card";
import Price from "./Price";
import Product from "../interfaces/IProduct";
import Loading from "./Loading";

export default function ListOfProduct({ className, categoryId }: { className: string, categoryId: string }) {
    const productService: IProductService = new ProductService()
    const ref = useRef(false)

    const [products, setProducts] = useState<Product[] | undefined>(undefined)

    const fetch = async () => {
        const response = await productService.getByCategory(categoryId)
        if (response) {
            setProducts(response)
        }
    }

    useEffect(() => {
        if (ref.current === false) {
            fetch()
        }

        return () => {
            ref.current = true
        }
    })

    if (products) {
        if (products.length != 0) {
            return (
                <>
                    <div className={className}>
                        {
                            products?.map((data) => {
                                const price = {
                                    className: 'line-through text-gray-300 ml-3 text-sm',
                                    currency: 'F CFA',
                                    price: data.price,
                                    newPrice: undefined
                                }
                                return (
                                    <Card key={data.id} productId={data.id} className="flex w-full mb-2 px-3 border border-gray-200 bg-white shadow-sm py-5 rounded-xl flex-shrink-0">
                                        <div>
                                            <p>{data.name}</p>
                                            <p className="line-clamp-3 font-light text-sm text-gray-500 mt-2">{data.description}</p>
                                            <Price price={price} className='flex items-center justify-start mt-2' />
                                        </div>
                                        <img className='w-28 h-28 rounded-xl ml-2' src={data.image} alt="" />
                                    </Card>
                                )
                            })
                        }
                    </div>
                </>
            )
        }
        return (
            <>
                <div className="flex w-full items-center px-2 justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636" />
                    </svg>

                    <span>Aucun produits</span>
                </div>
            </>
        )

    }
    return <Loading className='w-full h-screen flex items-center justify-center' />
}