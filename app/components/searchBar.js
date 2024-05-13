import React from 'react'
import { IoIosSearch } from "react-icons/io";
export default function SearchBar() {
  return (
    <div className='w-[80vw] flex mx-auto gap-1 border-2 rounded-xl border-eupheus-blue px-5 py-2'>
      <IoIosSearch className='text-[40px] text-eupheus-blue opacity-50' />
      <input type='text' placeholder='Search for courses' className='bg-transparent text-[20px] w-full focus:outline-none text-eupheus-blue font-bold' />
    </div>
  )
}
