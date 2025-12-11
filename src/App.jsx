import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductList from './components/ProductList/ProductList'
import Cart from './components/Cart/Cart'

function App() {
  return (
    <div className='flex flex-row justify-between items-start'>
      <div>
        <ProductList />
      </div>
      <div>
        <div className="border-l h-screen mx-4"></div>
        <div></div>
      </div>
      <div className='w-100 '>
        <Cart />
      </div>
    </div>
  )
}

export default App
