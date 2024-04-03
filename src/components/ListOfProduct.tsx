import { useEffect, useState } from "react";
import IProductService from "../services/IProductService";
import ProductService from "../services/classes/ProductService";
import Card from "./Card";
import Price from "./Price";
import Product from "../interfaces/IProduct";
import Loading from "./Loading";

export default function ListOfProduct({ className, categoryId, categoryName }: { className: string, categoryId: string, categoryName: string }) {
    /* const productsFiltered = products.filter((data) => data.category_id === categoryId) */
    const productService: IProductService = new ProductService()

    const [products, setProducts] = useState<Product[] | undefined>(undefined)

    const fetch = async () => {
        const response = await productService.getByCategory(categoryId)
        if (response) {
            setProducts(response)
        }
    }

    useEffect(() => {
        fetch()
    })

    if (products) {
        return (
            <>
                {
                    products && (
                        <p className="mb-2 ml-3 font-bold">{categoryName}</p>
                    )}
                <div className={className}>
                    {
                        products?.map((data) => {
                            const price = {
                                className: 'line-through text-gray-300 ml-3 text-sm',
                                currency: 'F CFA',
                                price: data.price,
                                newPrice: undefined
                            }

                            if (products?.length == 1) {
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
                            }
                            return (
                                <Card key={data.id} productId={data.id} className="flex w-full mx-3 mb-2 px-3 border border-gray-200 bg-white shadow-sm py-5 rounded-xl flex-shrink-0">
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
    return <Loading className='w-full h-screen flex items-center justify-center' />
}