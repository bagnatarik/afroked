import './App.css'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Section from './components/Section/Section'

function App() {


  return (
    <>
      <Navbar className='px-2 h-14 w-full bg-gray-800 text-white flex items-center uppercase' />
      <Section className='grow flex flex-col items-center justify-center w-full h-full py-2' />
      <FloatingButton className='fixed w-14 h-14 mr-2 mb-2 bottom-0 right-0 rounded-full bg-gray-600 text-white flex items-center justify-center' />
      <Footer className='px-2 h-14 bg-gray-800 text-white flex items-center font-medium' />
    </>
  )
}

function FloatingButton({ className }: { className: string }) {
  return (
    <>
      <div className={className}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
        </svg>
      </div>
    </>
  )
}

export default App
