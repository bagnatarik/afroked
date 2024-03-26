import './App.css'
import Navbar from './components/Navbar/Navbar'
import Section from './components/Section/Section'

function App() {

  return (
    <>
      <Navbar className='h-14 px-4 flex items-center justify-between text-slate-900 dark:text-white' />
      <Section className='grow h-full flex flex-col items-center' />
    </>
  )
}

export default App
