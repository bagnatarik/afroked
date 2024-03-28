import axios from "axios";
import { useState } from "react";
import { json, useLoaderData } from "react-router-dom";
import { Button, Product } from "../Section/Section";
import { Carts } from "../../App";

/* export async function loader({ params }) {
    return params.productId;
} */
// @"@ts-expect-error: Ignorer l'erreur de type implicite pour params
// @ts-ignore: Ignorer l'erreur de déclaration inutilisée pour setData
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function loader({ params }) {
    const fetch = async () => {
        const response = await axios.get<Product>(`https://afroked.onrender.com/api/products/${params.productId}`)
        return response.data ?? null
    }

    return fetch()
}

export default function Detail() {

    // @ts-ignore: Ignorer l'erreur de déclaration inutilisée pour setData
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [data, setData] = useState<Product>(useLoaderData())
    const [count, setCount] = useState(0)

    const plus = () => {
        setCount((count) => count + 1)
    }

    const minus = () => {
        setCount((count) => {
            return count - 1 >= 0 ? count - 1 : 0
        })
    }


    return (
        <>
            <div className="grow flex flex-col items-center w-full h-full">
                <img className="w-full h-[450px] mb-3" src={data!.image} alt="" />
                <div className="px-3">
                    <p className="font-bold text-2xl mb-2 capitalize">{data!.name} <span className="lowercase">({data!.stock} restant)</span></p>

                    <div className="flex items-center">
                        <p className=" text-2xl mb-2 uppercase w-1/2">{data!.price} CFA</p>
                        <div className="w-1/2 h-16 bg-gray-200 border-gray-400 rounded-lg flex items-center justify-between px-2">
                            <svg onClick={minus} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                            </svg>
                            <span className="text-2xl">{count}</span>
                            <svg onClick={plus} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>


                        </div>
                    </div>
                    <Button id={undefined} onclick={() => {
                        if (count > 0) {
                            data.quantity = count;
                            Carts.push(data)
                            localStorage.setItem('Carts', JSON.stringify(Carts))
                        }

                    }} className="text-sm w-full flex-shrink-0 items-center justify-center my-4 hover:bg-gray-700 flex py-5 px-10 mr-2 bg-gray-800 text-white rounded-lg" text="Ajouter" isSearchButton={false} />
                    <p className="font-normal text-sm mb-2">{data!.description}</p>
                </div>
            </div>
        </>
    )
}