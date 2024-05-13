'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import linktifyLogoBlck from '@/assets/Linktify Logo alt.png'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { auth } from '@/utils/firebase'
import pfp from '@/assets/users/amine.png'

export default function NavBarMob() {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const pathname = usePathname()

    const [option, setOption] = useState(true)
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((fetchedUser) => {
            setUser(fetchedUser);
            setIsLoading(false) // Update user state on auth state change
        });
        if (pathname == '/user-profile' || pathname == '/signup' || pathname == '/login') {
            setOption(false)
        } else {
            setOption(true)
        }
        return () => unsubscribe();
    }, [pathname, auth])

    
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen(!isOpen);
    };
    if (process.browser) {
        isOpen ? document.body.style.overflow = "hidden" : document.body.style.overflow = "scroll"
    }

    return (
        <div className='relative bg-[#F7FBFE]'>
            <div className='px-5 pt-5 flex justify-between items-center'>
                <div><Link href={'/'} onClick={() => (setIsOpen(false))}><Image src={linktifyLogoBlck} width={100} /></Link> </div>
                <button onClick={handleClick}
                    className="flex flex-col justify-center items-center">
                    <span className={`bg-[#001623] block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`} >
                    </span>
                    <span className={`bg-[#001623] block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm my-0.5 ${isOpen ?
                            'opacity-0' : 'opacity-100'
                        }`} >
                    </span>
                    <span className={`bg-[#001623] block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${isOpen ?
                            '-rotate-45 -translate-y-1' : 'translate-y-0.5'
                        }`} >
                    </span>

                </button>
                {
                    option && <div className='flex content-center text-[0.8em]  items-center justify-self-end mr-[2em] font-bold uppercase'>
                        {
                            isLoading ? " " : user ? <Link href={'/user-profile'}>
                                <img src={pfp.src} className='w-[4em]' alt="amine" border="0" /> </Link> : <Link href={'/login'} onClick={() => (setIsOpen(false))}><span className='bg-[#001623] text-white  py-1.5 px-3 rounded-[80px]'>login</span></Link>
                        }


                    </div>
                }

            </div>
            <div className={`z-[1] absolute transition-all bg-[#F7FBFE] w-[100vw]  duration-500 ease-out ${isOpen ? 'top-[80px]' : 'top-[-400px]'}`}>
                <div className='justify-self-center  px-5 text-[0.8em]'>
                    <ul className='flex flex-col gap-8 font-bold uppercase pb-2'>
                        <Link href={'/explore'} onClick={() => (setIsOpen(false))}><li>Explore</li></Link>
                        <Link href={'/about'} onClick={() => (setIsOpen(false))}><li>About Us</li></Link>
                        <Link href={'/contact'} onClick={() => (setIsOpen(false))}><li>Contact</li></Link>
                        <Link href={'/blog'} onClick={() => (setIsOpen(false))}><li>Blog</li></Link>
                    </ul>
                    <hr />

                </div>


            </div>
            <div className={` transition-all w-[100vw] h-[100vh]  left-0 bg-[#00000050] absolute  duration-[500ms] ease-out ${isOpen ? 'top-[10em]' : 'top-[-110vh]'}`} onClick={() => (setIsOpen(false))}></div>
        </div>
    )
}
