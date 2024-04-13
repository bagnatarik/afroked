import './Cart.css'
import Loading from '../../components/Loading'
import Button from '../../components/Button'
import { crossIcon } from '../../icons'
import { useNavigate } from 'react-router-dom'
import ICartService from '../../services/ICartService'
import CartService from '../../services/classes/CartService'
import { useEffect, useRef, useState } from 'react'
import ICart from '../../interfaces/ICart'
import Card from '../../components/Card'

export default function Cart({ className }: { className: string }) {
    const cartService: ICartService = new CartService()
    const [cart, setCart] = useState<ICart | undefined>(undefined)

    const navigate = useNavigate()
    const ref = useRef(false);

    const goTo = (link: string) => {
        navigate(`${link}`)
    }

    const deleteInCart = async (product_id: string) => {
        await cartService.deleteCart(product_id)
        fetch()
    }

    const fetch = async () => {
        try {
            const response = await cartService.getCart()

            if (response) {
                setCart(response)
            }
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            if (error.response.status == 404) {
                alert("Veuillez ajouter un produit")
                navigate('/afroked/')
            }
        }
    }

    const validate = async () => {
        const response = await cartService.validate(cart!.cart_id)
        console.log(response)
        goTo('/afroked/')
        alert(response.detail)
    }

    useEffect(() => {
        if (ref.current === false) {
            fetch()
        }
        return () => {
            ref.current = true;
        }
    })

    return (
        <>
            <div className={className}>
                <div className='flex w-full h-[10%] justify-between items-start'>
                    <p className='font-bold text-lg'>Panier</p>
                    <Button text={undefined} link={'/afroked/'} className='' icon={crossIcon} onclick={goTo} />
                </div>
                <div className='h-[80%] overflow-y-auto'>
                    {
                        cart ? (
                            <div className=''>
                                {
                                    cart.data.map((product) => (
                                        <Card className='flex justify-between items-start border-b border-b-gray-200 py-2' key={product.product_id} productId={undefined}>
                                            <div className='flex'>
                                                <img src={product.product_image} className='w-20 h-20 rounded-xl' alt="" />
                                                <div className='ml-3'>
                                                    <p>{product.product_name} ({product.quantity})</p>
                                                    <p className='text-base font-bold my-2'>{product.unit_price} F CFA</p>
                                                    {/* <Count setCount={undefined} className='mt-5 flex text-sm w-32 rounded-xl border px-3 py-2 justify-between' icons={[minusIcon, plusIcon]} count={product.quantity} /> */}
                                                </div>
                                            </div>
                                            <Button onclick={() => {
                                                deleteInCart(product.product_id)
                                            }} icon={crossIcon} text={undefined} link='/afroked/' className='' />
                                        </Card>
                                    ))
                                }
                            </div>
                        ) : (
                            <Loading className='w-full h-screen flex items-center justify-center' />
                        )
                    }
                </div>
                {
                    cart && (
                        <div className='relative flex items-center justify-center px-3 py-3 h-[10%]'>

                            <p className='absolute left-5 border rounded-full py-2 px-3 text-black bg-white text-sm'>{cart.total_items}</p>
                            <button onClick={validate} className=' border w-full h-14 rounded-xl bg-black/75 text-white flex items-center justify-center'>
                                <span>Valider</span>
                            </button>
                            <p className='absolute right-5 text-white text-sm'>{cart.total_price} F CFA</p>
                        </div>
                    )
                }

            </div>
        </>
    )
}