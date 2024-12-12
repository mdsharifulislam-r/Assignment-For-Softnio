import React from 'react'
import Table from './Table'

export default function Cart({show,setShow}) {
  return (
    <div  className={`fixed w-full h-screen flex ${show?"opacity-100 pointer-events-auto":"opacity-0 pointer-events-none"} duration-300 transition-all  justify-center place-items-center top-0 left-0`}>
      <div onClick={()=>setShow(!show)} className="absolute w-full h-full left-0 top-0 bg-black/50 cursor-pointer" ></div>
      <div className={`cart md:w-1/2 w-[90%] bg-white  ${show?"scale-100":"scale-90"} transition-all duration-300 delay-200 min-h-60 rounded-md md:p-8 p-3`}>
      <h1 className='text-xl font-bold text-slate-700'>Your Cart</h1>
      <div className="table">
        <Table/>
        <div className='flex justify-end gap-3'>
            <button className='px-3 py-2 border text-slate-700 font-medium rounded-md'>Countinue Shopping</button>
            <button className='px-3 py-2 border bg-blue-700 text-white rounded-md'>Checkout</button>
        </div>
      </div>
      </div>
    </div>
  )
}
