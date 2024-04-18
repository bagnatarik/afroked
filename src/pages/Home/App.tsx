import { useNavigate } from 'react-router-dom'
import FloattingButton from '../../components/FloattingButton'
import InputSearch, { State } from '../../components/InputSearch'
import Navbar from '../../components/Navbar'
import { cartIcon, navbarIcon, searchIcon } from '../../icons'
import './App.css'
import { parseFromTelegram } from '../../utils/Telegram'
import axios from 'axios'
import CategoriesButton from '../../components/CategoriesButton'
import { useState } from 'react'
import Category from '../../interfaces/ICategory'
import ListOfCategory from '../../components/ListOfCategory'
import Product from '../../interfaces/IProduct'
import Card from '../../components/Card'
import Price from '../../components/Price'

function App() {
  const [category, setCategory] = useState<Category | null>()
  const [state, setState] = useState<State | undefined>()
  const [products, setProducts] = useState<Product[] | undefined>()
  const navigate = useNavigate()

  const login = async () => {
    const id = parseFromTelegram().id

    if (id) {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}bot/login`, {
        "user_id": id,
        "plateform": "string"
      })
      localStorage.setItem('token', response.data["token"])
      localStorage.setItem('user_id', response.data["user_id"])
    }
  }

  const goTo = () => {
    navigate('cart')
  }

  login()

  return (
    <>
      <div>
        <Navbar icon={navbarIcon} className='w-full h-12 bg-white px-2 flex items-center border border-gray-300 shadow-sm font-bold uppercase' siteName='Afroked' />
        <InputSearch state={state} setState={setState} setProducts={setProducts} icon={searchIcon} buttonClassName='border ml-2 px-3 py-3 bg-white rounded-lg' inputClassName='w-full py-1 rounded-lg border border-gray-300 px-5 focus:outline-none' formClassName='w-full flex px-2' className='py-2 w-full flex' placeholder='Rechercher votre produit préféré...' />
        <CategoriesButton setState={setState} setProducts={setProducts} setCategory={setCategory} />
        {
          category && !products && <ListOfCategory category={category} className='flex flex-col px-2' />
        }
        {
          category && products && (
            <>
              <div className='flex flex-col px-3'>
                {
                  products.map((product: Product) => {
                    const price = {
                      className: 'line-through text-gray-300 ml-3 text-sm',
                      currency: 'F CFA',
                      price: product.price,
                      newPrice: undefined
                    }
                    return (
                      <Card key={product.id} productId={product.id} className="flex w-full mb-2 px-3 border border-gray-200 bg-white shadow-sm py-5 rounded-xl flex-shrink-0">
                        <div>
                          <p>{product.name}</p>
                          <p className="line-clamp-3 font-light text-sm text-gray-500 mt-2">{product.description}</p>
                          <Price price={price} className='flex items-center justify-start mt-2' />
                        </div>
                        <img className='w-28 h-28 rounded-xl ml-2' src={product.image} alt="" />
                      </Card>
                    )
                  })
                }
              </div>
            </>
          )
        }

        <FloattingButton handleClick={goTo} icon={cartIcon} className='fixed bottom-0 right-0 border border-gray-200 h-16 w-16 bg-white rounded-full flex items-center justify-center mb-2 mr-2' />
      </div>
    </>
  )
}

export default App
