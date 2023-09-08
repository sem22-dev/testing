"use client"

import Link from "next/link"
import { useEffect, useState } from "react" 
import { usePathname } from "next/navigation"
import Image from "next/image"
import { gsap } from "gsap"


export default  function Navbar() {

    

    const [showMenu, setShowMenu] = useState(false)
    const [rotate, setRotate] = useState(false)

    const pathname = usePathname();

    useEffect(() => {
        const tl = gsap.timeline({ defaults: {duration: 1} })
    tl.fromTo("nav", { y: "-100%" }, { y: "0%" })
    }, [])

    useEffect(() => {
        if(showMenu) {
            document.body.style.overflowY = "hidden"
        } else {
            document.body.style.overflowY = "auto";
            setRotate(false)
        }
    },[showMenu])

    return (
        <nav style={{backdropFilter: 'blur(4.7px)'}} className={` z-50 px-2 sm:px-6 lg:px-2 border xl:px-7 sticky top-5 mx-24 rounded-3xl bg-opacity-50 bg-white shadow-md`}>
            {/* for screen larger than md */}
            <div className="py-3 hidden lg:flex justify-between text-lg font-medium text-grayText items-center">
                <div>     
                    <Link href={'/'} className=" text-2xl text-black font-extrabold">
                        <h1>BookNJoy</h1>
                    </Link>     
                </div>
                <div className="flex lg:gap-20 xl:gap-36">
                    <div className="flex items-center  gap-8">
                        <Link href={'/'} className={`${pathname === '/' ? ' text-black' : ''}`}>Find events</Link>
                        <Link href={'/'} className=" rounded-md py-1 px-3 bg-[#f8ec3e]">Login</Link>
                        <Link href={'/'}><button className=" bg-black hover:bg-[#fff] hover:text-black border border-black transition-all duration-500 text-white py-1 px-4 rounded-md">List your event</button></Link>
                    </div>
                </div>
            </div>
            
            {/* for screen lower than md */}
            <div className="lg:hidden py-5 flex justify-between items-center">
                    <Link href={'/'} className="flex items-center gap-2 text-3xl font-extrabold">
                        <h1>ChatBloom</h1>
                    </Link>
                <div>
                    <Link href={'/'}><button className=" bg-black hover:bg-[#fff] hover:text-black border border-black transition-all duration-500 text-white py-3 px-7 rounded-full">Get Started</button></Link>
                </div>
               
                <div className={`${showMenu ? "  left-0" : " -left-[100%]"} text-lg fixed top-0 min-h-screen w-full`}>
                    <div onClick={() => setShowMenu(false)} className="absolute  overflow-y-hidden z-50 w-full min-h-screen bg-black opacity-50">
                    </div>
                    <div  className={`${showMenu ? "left-0 " : "-left-[100%]"} flex flex-col py-20 transition-all duration-500 min-h-screen max-h-screen ease-in-out px-10 w-1/2 gap-8 fixed top-0 z-50 bg-white  overflow-y-auto overflow-x-hidden `}>
                        <button onClick={() => setShowMenu(false)}  className="absolute top-5 right-5">X</button>
                        <Link className="border-b" onClick={() => setShowMenu(false)} href={'/'}>Home</Link>
                        <Link className="border-b" onClick={() => setShowMenu(false)} href={'/'}>Features</Link>
                        <Link className="border-b" onClick={() => setShowMenu(false)} href={'/pricing'}>Pricing</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
  }
