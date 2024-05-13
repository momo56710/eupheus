import React from 'react'
import { FaStar } from "react-icons/fa";
export default function TutorCard({ tutor }) {
  console.log(tutor)
  return (
    <div className='flex flex-col justify-center items-center min-w-[200px]'>
      <div className='rounded-full shadow-xl'><img src={tutor.profileImage} /></div>

      <p className='font-bold text-[1.3em] text-gray-500'>{tutor.name}</p>
      <p className='font-bold text-eupheus-blue'>{tutor.profession}</p>
      <p className='font-[600] underline text-eupheus-blue'>{tutor.cousrses} Courses</p>
      <p className='flex gap-1 justify-center items-center'>
        <FaStar className='text-yellow-500' />{tutor.rating} <span className='text-gray-500 italic'>{`(${tutor.rateAmount})`}</span>
      </p>

    </div>
  )
}
