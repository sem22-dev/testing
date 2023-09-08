"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect } from 'react'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import $ from 'jquery';

export default function Carousel() {
 useEffect(() => {
    // Check if window is defined (client-side) before initializing the carousel
    if (typeof window !== 'undefined') {
      import('slick-carousel/slick/slick.js').then(() => {
        $('.carousel-container').slick({
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 1000,
          responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 1008,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 800,
              settings: 'unslick',
            },
          ],
        });
      });
    }
  }, []); 

    return(
    <div className="carousel-container overflow-hidden">
        <Link href="./" className="  rounded-lg overflow-hidden">
            <Image src={'/event1.png'} width={1000} height={1000} alt='eventpic' className=' w-full h-[450px] object-cover' />
        </Link>
        <Link href="./" className=" rounded-lg overflow-hidden">
            <Image src={'/event2.jpg'} width={1000} height={1000} alt='eventpic' className=' w-full h-[450px] object-cover' />
        </Link>
        <Link href="./" className=" rounded-lg overflow-hidden">
            <Image src={'/event1.png'} width={1000} height={1000} alt='eventpic' className=' w-full h-[450px] object-cover' />
        </Link>
        <Link href="./" className=" rounded-lg overflow-hidden">
            <Image src={'/event3.jpg'} width={1000} height={1000} alt='eventpic' className=' w-full h-[450px] object-cover' />
        </Link>
    </div>
    )
}