import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import MainSection from './components/MainSection/MainSection'
import svg from './assets/test.svg'
import Features from './components/Features/Features'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      {/* <div className='h-[200vh]'></div> */}
      <MainSection/>

      <Features/>

    </>
  )
}

export default App
