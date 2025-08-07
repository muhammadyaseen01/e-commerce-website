import React from 'react'
import BannerImage from "../../assets/Banner.jpg"
function Banner() {
  return (
    <section className='h-[60vh] mt-[14vh] bg-cover bg-top'
    style={{backgroundImage : `url(${BannerImage})`}}
    >
        <div className='max-w-[1300px] mx-auto px-12 h-100 flex flex-col justify-center gap-3'>
            <h1 className='text-red-600 text-9xl uppercase font-bold tracking-tight'>Big Sale!</h1>
            <h2 className='text-3xl text-zinc-800'>Up to 50% OFF - Limited Time Only!</h2>
            <div className='text-6xl font-bold text-zinc-800 flex gap-x-3 mt-5 '>
                <span className='text-white bg-zinc-800 p-3'>00</span>:
                <span className='text-white bg-zinc-800 p-3'>00</span>:
                <span className='text-white bg-zinc-800 p-3'>00</span>
            </div>
        </div>
        
    </section>
  )
}

export default Banner

// 
// 