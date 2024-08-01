import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Product from './Product'
import ProductCart from './ProductCart'

function App() {
  const [count, setCount] = useState([0,0,0])

  function Increment(index){
    const newCount = [...count];
    newCount[index] +=1;
    setCount(newCount);
  }

  function Decrement(index){
    const newCount = [...count];
    newCount[index] -=1;
    setCount(newCount);
  }

  return (
   <><div className='cartSystem'>
   <Product  count={count} Increment={Increment} Decrement={Decrement}/>
   <ProductCart count={count}/>
  </div>
   </>
  )
}

export default App
