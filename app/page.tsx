"use client"

import Image from 'next/image'
import { useEffect } from 'react'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.js';
import $ from 'jquery';
import Link from 'next/link';

export default function Home() {
  useEffect(() => {
  // Initialize the carousel
  $('.carousel-container').slick({
     infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
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
  ]
  });
}, []);

  return (
  <main className=" mt-7 py-5 h-[1000px] bg-[#F5F5F5] " >
  <h1 className="text-xl font-semibold text-center mb-7">Featured Events</h1>

    <div className="carousel-container overflow-hidden">
    <Link href="./" className=" border rounded-lg overflow-hidden">
      <Image src={'/event1.png'} width={1000} height={1000} alt='eventpic' className=' w-[430px] h-[430px] object-cover' />
    </Link>
    <Link href="./" className=" rounded-lg overflow-hidden">
      <Image src={'/event2.jpg'} width={1000} height={1000} alt='eventpic' className=' w-[430px] h-[430px] object-cover' />
    </Link>
    <Link href="./" className=" rounded-lg overflow-hidden">
      <Image src={'/event3.jpg'} width={1000} height={1000} alt='eventpic' className=' w-[430px] h-[430px] object-cover' />
    </Link>
    <Link href="./" className=" rounded-lg overflow-hidden">
      <Image src={'/event2.jpg'} width={1000} height={1000} alt='eventpic' className=' w-[430px] h-[430px] object-cover' />
    </Link>
  </div>

</main>

  )
}
