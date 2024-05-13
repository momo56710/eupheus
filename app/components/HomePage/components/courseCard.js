import React from 'react'
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
export default function CourseCard({ course }) {
    const stars = (count) => {
        return (
            <div className='flex'>
                {Array.from({ length: 5 }, (_, i) => (
                    <span key={i}>
                        <FaStar className={`${i + 1 <= count ? 'text-yellow-500' : 'text-gray-200'}`} />
                    </span>
                ))}
            </div>
        );
    }
    return (
        <div>
            <div className='bg-[#F8F8F8] relative'>
                <div className='absolute top-0 left-0 px-5 py-1 text-[12px] bg-[#4CB648] text-white'>{course.tag}</div>
                <img src={course.cover} />
                <div className='flex justify-between'>
                    <div>
                        <p>{course.title}</p>
                        <p>duration : {course.duration}</p>
                        <p className={`text-[#4CB648]  `}>
                            <span className={`${course.discount > 0 ? 'text-gray-500 line-through' : ''} pr-3`}>{
                                `$${course.price.toFixed(2)}`
                            }</span>{
                                course.discount == 100 ? 'free' :
                                    course.discount > 0 ?
                                        `$${course.price - (course.price * course.discount / 100)}`
                                        : ''
                            }
                        </p>
                        <div className='flex'>
                            {stars(course.stars)} <span className='text-gray-500 font-normal italic'>{`(${course.rateAmount})`}</span>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center mr-2'>
                        <div className='p-2  rounded-full bg-eupheus-blue'>
                            <FaHeart className={` text-[20px]  ${course.favourite ? 'text-[#4CB648]' : 'text-white'}`} />
                        </div>
                        <span className={`text-[12px] ${course.favourite ? '' : 'text-gray-300'}`}> {course.favourite ? 'added' : 'add'}</span>
                    </div>
                </div>


                <div className='grid place-content-center p-5'>
                    <button className={`py-3 px-10 rounded-xl ${course.button == 'Enroll Now' ? 'bg-white text-eupheus-blue border-2 border-eupheus-blue' : 'bg-eupheus-blue text-white'}`}>{course.button}</button>
                </div>
            </div>
            <p className='text-center underline my-3 cursor-pointer'>View More Info</p>
        </div>
    )
}
