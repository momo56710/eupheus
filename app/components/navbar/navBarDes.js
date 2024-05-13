'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import eupheusLogo from '@/assets/logo.png'
import eupheusText from '@/assets/EUPHEUS.png'
import { FaCartShopping } from "react-icons/fa6";
export default function NavBarDes() {



    return (
        <div className='grid grid-cols-[1fr,4fr,2fr] pt-[2em] text-[14px] pl-[2em] items-center content-center max-w-[1600px] m-auto'>
            <div className='flex gap-2 items-center'>
                <Link href={'/'}><img src={eupheusLogo.src} height={20} /></Link>
                <Link href={'/'}><img src={eupheusText.src} height={20} /></Link>
            </div>
            <div className='justify-self-center'>
                <ul className='flex gap-8 font-bold uppercase'>
                    <Link href={'/explore'}><li>Home</li></Link>
                    <Link href={'/about'}><li>About</li></Link>
                    <Link href={'/contact'}><li>Courses</li></Link>
                    <Link href={'/blog'}><li>Tutors</li></Link>
                    <Link href={'/blog'}><li>contact</li></Link>
                </ul>
            </div>
            <div className='flex items-center text-[16px] gap-5 justify-self-center'>
                <button className='font-bold underline'>Login</button>
                <button className='font-bold px-5 py-2 text-white rounded-xl bg-eupheus-blue'>Register</button>
                <button className='font-bold px-5 text-[25px] text-eupheus-blue'><FaCartShopping /></button>
            </div>


        </div>
    )
}
