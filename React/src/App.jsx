import React, { useState } from 'react'
import ImageBox from './components/ImageBox'
import TextBox from './components/TextBox'
import Cart from './components/Cart/Cart'

export default function App() {
  const [cartShow,setCartShow]=useState(false)
  const [show,setShow]=useState(false)
  return (
    <div className='w-full'>
      <div className="container mx-auto flex justify-center place-items-center my-7">
        <div className="lg:w-[80%] md:w-[90%] w-full flex flex-col md:flex-row  gap-4 px-5">
          <ImageBox/>
          <TextBox setShow={setShow}/>
        </div>
      
      </div>
      <div>
          <div className={`flex ${show?"opacity-100 pointer-events-auto":"opacity-0 pointer-events-none"} justify-center mb-10`}>
            <button onClick={()=>setCartShow(!cartShow)} className={`px-3 py-2 ${show?"translate-y-0":"translate-y-8"} duration-300 delay-200 rounded-full flex place-items-center gap-1 bg-orange-400 text-white`}>
              <span>Checkout</span>
              <span className='bg-white text-slate-700 px-2'>2</span>
            </button>
          </div>
          <Cart
          show={cartShow}
          setShow={setCartShow}
          />
        </div>
    </div>
  )
}
