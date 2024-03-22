import './App.css'
import Button from './components/Button/Button'
import Card from './components/Card/Card'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <>
      <div className='flex flex-col w-full h-full bg-transparent'>
        <Navbar />
        <div className='grow w-full h-full bg-transparent flex flex-col items-center justify-center'>
          <div className='w-full mb-10'>
            <p className='text-white text-center text-[4.688rem] px-40 mb-10'>
              Bienvenue sur AFROKED - Votre destination shopping en ligne ultime !
            </p>
            <p className='text-center text-[1.25rem] text-white font-extralight px-[17rem]'>
              Découvrez une sélection imbattable de produits de qualité. Faites vos  achats en ligne rapidement et facilement. Trouvez tout ce dont vous avez  besoin en quelques clics. Rejoignez-nous dès maintenant !
            </p>
          </div>
          <Button className='bg-white text-center w-[18.5rem] h-[4.063rem] rounded-[0.688rem] text-[#00356B] hover:text-white hover:bg-transparent border border-white transition-all duration-300' text='Commencer' />
        </div>
      </div>
      <div className='w-full h-full bg-transparent'>
        <p className='text-white text-center text-[3.75rem] mb-10'>A la une !</p>
        <p className='text-white text-center text-[1.875rem] mb-10'>Les articles du moments</p>

        <div className='flex justify-around'>
          <Card className='w-[29.313rem] h-[42.563rem] bg-white rounded-3xl' />
          <Card className='w-[29.313rem] h-[42.563rem] bg-white rounded-3xl' />
          <Card className='w-[29.313rem] h-[42.563rem] bg-white rounded-3xl' />
        </div>
      </div>
    </>
  )
}

export default App
