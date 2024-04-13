import { useNavigate } from 'react-router-dom'
import FloattingButton from '../../components/FloattingButton'
import InputSearch from '../../components/InputSearch'
import Navbar from '../../components/Navbar'
import { cartIcon, navbarIcon, searchIcon } from '../../icons'
import './App.css'
import { parseFromTelegram } from '../../utils/Telegram'
import axios from 'axios'
import CategoriesButton from '../../components/CategoriesButton'
import { useState } from 'react'
import Category from '../../interfaces/ICategory'
import ListOfCategory from '../../components/ListOfCategory'

function App() {
  const [category, setCategory] = useState<Category | null>()
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
        <InputSearch icon={searchIcon} buttonClassName='border ml-2 px-3 py-3 bg-white rounded-lg' inputClassName='w-full py-1 rounded-lg border border-gray-300 px-5 focus:outline-none' formClassName='w-full flex px-2' className='py-2 w-full flex' placeholder='Rechercher votre produit préféré...' />
        <CategoriesButton setCategory={setCategory} />
        {
          category && <ListOfCategory category={category} className='flex flex-col px-2' />
        }

        <FloattingButton handleClick={goTo} icon={cartIcon} className='fixed bottom-0 right-0 border border-gray-200 h-16 w-16 bg-white rounded-full flex items-center justify-center mb-2 mr-2' />
      </div>
    </>
  )
}

export default App
