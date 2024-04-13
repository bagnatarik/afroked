import { useNavigate, useParams } from 'react-router-dom'
import './Detail.css'
import { useEffect, useState } from 'react'
import { crossIcon, minusIcon, plusIcon } from '../../icons'
import Product from '../../interfaces/IProduct'
import Button from '../../components/Button'
import Price from "../../components/Price";
import Count from '../../components/Count'
import Loading from '../../components/Loading'
import IProductService from '../../services/IProductService'
import ProductService from '../../services/classes/ProductService'
import ICartService from '../../services/ICartService'
import CartService from '../../services/classes/CartService'
import { CreateOrUpdateCart } from '../../interfaces/ICart'

export default function Detail({ className }: { className: string }) {
    const [product, setProduct] = useState<undefined | Product>()
    const [seeMore, setSeeMore] = useState(false)
    const [loading, setLoading] = useState(false)
    const [count, setCount] = useState(1)

    const navigate = useNavigate()
    const productService: IProductService = new ProductService()
    const cartService: ICartService = new CartService()

    const { productId } = useParams<{ productId: string }>()

    const fetch = async () => {
        const response = await productService.get(productId!)
        if (response) {
            setProduct(response)
        }
    }

    const handleClickSeeMore = () => {
        setSeeMore(() => !seeMore)
    }

    const goTo = (link: string) => {
        navigate(`${link}`)
    }

    const addToCart = async () => {
        console.log(count);

        const createOrUpdateCart: CreateOrUpdateCart[] = [
            {
                product_id: productId!,
                quantity: count
            }
        ]

        setLoading((loading) => !loading)

        const response = await cartService.create(createOrUpdateCart)

        setLoading((loading) => !loading)

        if (response.status == 200) {
            alert('Produit ajouter avec succès')
        } else if (response.status == 400) {
            alert(response.data.detail)

        }



        navigate('/afroked/')
    }

    useEffect(() => {
        fetch()
    })


    return (
        <>
            {
                product ? (
                    <div className={className} >
                        <div className='px-3 border-b pb-3'>
                            <div className='relative'>
                                <img className='w-full h-80 mb-10 rounded-b-lg' src={product.image} alt="" />
                                <Button link='/afroked/' onclick={goTo} className='absolute top-0 right-0 border px-2 py-2 bg-white/50 rounded-lg mt-2 mr-2 text-black' icon={crossIcon} text={undefined} />
                            </div>
                            <p className='font-bold text-lg mb-3'>{product.name} ({product.stock})</p>
                            {
                                seeMore ? (
                                    <p className='text-sm text-gray-400'>{product.description}</p>
                                ) : (
                                    <p className='text-sm text-gray-400 line-clamp-3'>{product.description}</p>
                                )
                            }
                            <p className='text-end text-sm font-medium mb-3' onClick={handleClickSeeMore}>
                                {
                                    seeMore ? 'Voir moins' : 'Voir plus'
                                }
                            </p>
                            <div className='flex justify-between items-center'>
                                <p>Prix</p>
                                <Price className='flex items-center' price={{
                                    className: 'line-through text-gray-300 ml-3 text-sm',
                                    currency: 'F CFA',
                                    price: product.price,
                                    newPrice: product.newPrice
                                }} />
                            </div>
                        </div>
                        <div className='py-5 border-b px-3 flex justify-between items-center'>
                            <p>Quantité</p>
                            <Count icons={[minusIcon, plusIcon]} count={count} setCount={setCount} className='flex w-32 rounded-xl border px-3 py-2 justify-between' />
                        </div>
                        <div className='relative grow flex items-center justify-center px-3 py-3'>
                            {loading && (<svg className="absolute left-8 animate-spin h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>)}
                            <Button link={undefined} onclick={addToCart} className=' border w-full h-14 rounded-xl bg-black/75 text-white flex items-center justify-center' icon={{ icon: undefined, position: false }} text={`Ajouter`} />
                            <p className='absolute right-5 text-white text-sm'>{product.newPrice ? product.newPrice * count : product.price * count} F CFA</p>
                        </div>
                    </div>
                ) : (
                    <Loading className='w-full h-screen flex items-center justify-center' />
                )
            }
        </>
    )
}