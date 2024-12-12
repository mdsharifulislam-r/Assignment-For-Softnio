import React from 'react'
import { FaStar, FaStarHalf,FaRegStar } from 'react-icons/fa'
import { IoIosStarHalf } from "react-icons/io";
import { FiMinus } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import { CiHeart } from "react-icons/ci";
function SizeButton({size,price}:{size:string,price:number}){
    return <button className='px-4 py-2 flex gap-2 place-items-baseline border'>
        <span className='text-lg font-bold text-slate-600'>{size}</span>
        <span className='text-sm font-light'>${price}</span>
    </button>
}

export default function TextBox({setShow}) {
  return (
    <div className='md:w-1/2 py-4'>
      <h1 className='text-3xl font-semibold text-[#364A63]'>Classy Modern Smart watch</h1>
      <div className='flex text-sm pt-2 text-orange-400 place-items-center'>
        {
            new Array(3).fill(3).map((item,index)=><FaStar key={index}/>)
        }
        <IoIosStarHalf/>
        <FaRegStar/>
        <span className='text-slate-600 pl-3'>(2 Reviews)</span>
      </div>

      <div className='flex gap-2 place-items-end mt-2'>
        <span className='text-slate-600 line-through'>$99.00</span>
        <span className='text-xl text-slate-700'>$79.00</span>
      </div>
      <p className='text-slate-500 text-sm mt-3'>I must explain to you how all this mistaken idea of denoun cing ple praising pain was born and I will give you a complete account of the system, and expound the actual teaching.</p>

      <div className='mt-5 flex gap-8'>
        <div className='flex flex-col gap-1'>
            <span className='text-sm text-slate-500'>Type</span>
            <span className='font-bold text-slate-700'>Watch</span>
        </div>
        <div className='flex flex-col gap-1'>
            <span className='text-sm text-slate-500'>Model Number</span>
            <span className='font-bold text-slate-700'>Forerunner 290XT</span>
        </div>
      </div>
      <div className='mt-2'>
        <h1 className='text-xl font-bold text-slate-700'>Band Color</h1>
        <div className='flex place-items-center gap-3 mt-3'>
            <div className=' size-5 rounded-full bg-purple-700 p-2 border border-purple-700'/>
            <div className=' size-5 rounded-full bg-green-500'/>
            <div className=' size-5 rounded-full bg-blue-700'/>
            <div className=' size-5 rounded-full bg-black'/>
        </div>
      </div>
      <div className='mt-3'>
      <h1 className='text-xl font-bold text-slate-700'>Wrist Size</h1>
      <div className='flex gap-3 mt-3'>
        <SizeButton
        size='S'
        price={100}
        />
         <SizeButton
        size='M'
        price={120}
        />
         <SizeButton
        size='L'
        price={130}
        />
         <SizeButton
        size='XL'
        price={100}
        />
      </div>
      </div>

      <div className='mt-5 flex gap-3 place-items-center'>
        <div className='flex place-items-center border w-fit'>
            <button className='border-r px-4 h-full'>
                <FiMinus/>
            </button>
            <input type="text"  value={0} className='text-center h-full py-3 border-x w-20' />
            <button className='px-4'>
                <FiPlus/>
            </button>
        </div>
        <button onClick={()=>setShow(prev=>!prev)} className='px-3 h-full bg-indigo-500 py-2.5 text-white'>
            Add to Cart
        </button>

        <button className='text-xl text-slate-700'>
            <CiHeart/>
        </button>
      </div>
    </div>
  )
}
