import { useState } from "react";
import { Carts } from "../../App";
import { Button, Product } from "../Section/Section";

function Count({ id, count, setCount, setState }: { id: string, count: number, setCount: CallableFunction, setState: CallableFunction }) {


    const plus = () => {
        setCount((count: number) => count + 1)
    }

    const minus = () => {
        setCount((count: number) => {
            const value = count - 1 >= 0 ? count - 1 : 0
            if (value == 0) {
                Carts.filter((product, index, Carts) => {
                    if (product.id === id) {
                        Carts.splice(index, 1)
                        return true
                    }
                    return false
                })
                setState([])
            }
            return value
        })
    }

    return (
        <div className="w-full h-12 bg-gray-200 border-gray-400 rounded-lg flex items-center justify-between px-2">
            <svg onClick={minus} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
            </svg>
            <span className="text-2xl">{count}</span>
            <svg onClick={plus} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>


        </div>
    )
}


export default function CartList() {
    const [state, setState] = useState(Carts ?? [])

    const CartComponent = state.map((product: Product) => (<Cart setState={setState} product={product} />))
    return (
        <>
            <div className="grow flex flex-col items-center w-full h-full px-2 pt-2">
                {
                    CartComponent
                }
                {
                    state.length > 0 && <Button id={undefined} onclick={() => { }} className="text-sm flex-shrink-0 w-full justify-center items-center hover:bg-gray-700 flex py-5 px-10 mr-2 bg-gray-800 text-white rounded-lg" text="Valider" isSearchButton={false} />
                }

            </div>
        </>
    )
}

export function Cart({ product, setState }: { product: Product, setState: CallableFunction }) {
    const [count, setCount] = useState(product.quantity)

    return (
        <div className="w-full px-2 border py-2 border-gray-300 rounded-lg flex shadow-lg my-2">
            <img className="h-32 w-32 rounded-lg" src={product.image} alt="" />
            <div className="mx-2">
                <p className="font-bold">{product.name}</p>
                <p>Quantité : {count}</p>
                <p>Prix : {product.price}</p>
                <Count setState={setState} id={product.id} count={count} setCount={setCount} />
            </div>
        </div>
    )
}