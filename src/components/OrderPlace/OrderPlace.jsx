import React from 'react'

function OrderPlace({setOrderPlaced}) {
  return (
    <section className='flex justify-center items-center bg-black/95 fixed inset-0 z-3'>
        <div className='bg-zinc-100 p-8 text-center w-[400px] rounded-lg border-1 border-zinc-300'>
        <h2 className='text-3xl font-bold text-green-600'>Order Placed!</h2>
        <p className='text-zinc-800 my-4'>Thanks for your purchase!</p>
        <button className='px-6 py-2 text-white bg-blue-600 active:bg-blue-700 cursor-pointer rounded-lg'
        onClick={()=>setOrderPlaced(false)}
        >Close</button>
        </div>
    </section>
  )
}

export default OrderPlace