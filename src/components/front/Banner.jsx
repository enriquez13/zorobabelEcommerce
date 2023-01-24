import React from 'react'
import { BsChevronCompactLeft} from "react-icons/bs";
import { BsChevronCompactRight} from "react-icons/bs";
import {RxDotFilled} from "react-icons/rx";
import {RxShadowOuter} from "react-icons/rx";
//import {BsChevronCompactleft} from 'react-icons/bs'
//import './Banner.css'
import banner1 from '../../../public/Imagenes/banner1.png'
import banner2 from '../../../public/Imagenes/banner4.png'
import banner3 from '../../../public/Imagenes/banner3.png'
import banner4 from '../../../public/Imagenes/banner7.png'
import { useState } from 'react'

export const Banner = () => {
  const slides = [
    {url:"https://i.pinimg.com/564x/e7/b5/0c/e7b50ca8cc325910a38323c77f27e1f6.jpg"},
    {url:"https://i.pinimg.com/564x/ee/40/7f/ee407f24988ecf638b5bc8edfd936de2.jpg"},
    {url:"https://i.pinimg.com/564x/01/8e/89/018e89133c5b65892db3504d87517dfe.jpg"},
    {url:"https://i.pinimg.com/564x/a4/78/e8/a478e8f199fc4b7c20a0444157238142.jpg"},
   ]
  
  const [currentIndex,setCurrentIndex] = useState(0) 
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex)  
  }
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex) 
  }

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex)
  }
  return (
    <>
<div className=' max-w-[1400px] h-screen w-full m-auto pt-14 relative group text-gray-100'>
  <div style={{backgroundImage: `url(${slides[currentIndex].url})`}} className='w-full h-full bg-center bg-cover duration-500'>
  </div>
  <div onClick={prevSlide} className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-xl rounded-full p-2 '><BsChevronCompactLeft /></div>
  <div onClick={nextSlide} className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-xl rounded-full p-2'><BsChevronCompactRight /></div>
    <div className='flex absolute top-[85%] w-full justify-center py-2'>
    {slides.map((slide, slideIndex) =>(
      <div key={slideIndex} onClick={()=> goToSlide(slideIndex)} className={` ${slideIndex == currentIndex ? "text-[0.8rem] mt-[0.29rem] mb-[0.29rem] mx-2 ": "text-[1.4rem]"} mx-2 cursor-pointer`}>
        {slideIndex==currentIndex?<RxShadowOuter />:<RxDotFilled />}
        </div>
    ))}
    </div>
</div>




   { /* <div id='banner' className='w-full mt-[60px] h-[500px] md:w-[1026px] md:h-[1368px] '>
      <div id='capa'  className='flex items-center justify-center '>
        <div id='info' className=''>
          <h1 className='text-[25px] text-slate-200'>Bienvenidos a <br />ZOROBABEL</h1>
          <p className=''>
            nos esforzamos para <br />ofrecerte lo mejor
          </p>
          <a>Leer más</a>
        </div>
        </div>
  </div> */}

{ /*<div className=" carousel w-full">
  <div id="slide1" className="mt-[60px] mb-[20px] carousel-item relative w-full">
    <img src={banner1} className="w-full " />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className=" text-border text-[40px]"><ion-icon name="chevron-back-outline"></ion-icon></a> 
      <a href="#slide2" className="text-border text-[40px]">❯</a>
    </div>
  </div> 
  <div id="slide2" className="mt-[60px] mb-[20px] carousel-item relative w-full">
    <img src={banner2} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="text-border  text-[40px]"><ion-icon name="chevron-back-outline"></ion-icon></a> 
      <a href="#slide3" className="text-border   text-[40px]">❯</a>
    </div>
  </div> 
  <div id="slide3" className="mt-[60px] mb-[20px] carousel-item relative w-full">
    <img src={banner3} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="text-border text-[40px]"><ion-icon name="chevron-back-outline"></ion-icon></a> 
      <a href="#slide4" className="text-border text-[40px]">❯</a>
    </div>
  </div> 
  <div id="slide4" className="mt-[60px] mb-[20px] carousel-item relative w-full">
    <img src={banner4} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="text-border  text-[40px]"><ion-icon name="chevron-back-outline"></ion-icon></a> 
      <a href="#slide1" className="text-border  text-[40px]">❯</a>
    </div>
  </div>
</div>*/}



</>
  )
    
}
export default Banner
