import React from 'react'

const Checkout = () => {
  return (
    <div className='w-full  lg:px-28 md:px-16 sm:px-7 px-4  mb-[8ch] space-y-10'>
      <div className="grid grid-cols-5 mt-24 gap-16 items-start">
        <div className="col-span-3 space-y-7 pr-20">
          <h2 className="text-xl text-neutral-800 dark:text-neutral-100 font-medium">
            Passenger Information
          </h2>
          <form className='space-y-6 '>
            <div className=''>
              <label htmlFor="date" className="block mb-2 font-semibold">
                Full Name
              </label>
              <input type='fullname' id='fullname' placeholder='e.g. Reshmi Chaurasiya' name='fullname' className='w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark:bg:neutral-900/60 px-3 h-12 border border-neutral-200 dark:border-neutral-900 rounded-md focus:outline none focus:bg-neutral-100 dark:focus:bg-neutral-900' />
            </div>
            <div className=''>
              <label htmlFor="date" className="block mb-2 font-semibold">
                Email Address
              </label>
              <input type='email' id='email' placeholder='e.g. reshmic202@gmail.com' name='email' className='w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark:bg:neutral-900/60 px-3 h-12 border border-neutral-200 dark:border-neutral-900 rounded-md focus:outline none focus:bg-neutral-100 dark:focus:bg-neutral-900' />
              <small className="block mt-1 text-neutral-500 dark:text-neutral-600">
                  You will get your tickets via this email address
              </small>

            </div>

            <div className=''>
              <label htmlFor="date" className="block mb-2 font-semibold">
                Phone Number
              </label>
              <input type='number' id='phone' placeholder='e.g. +91 (0*********)' name='phone' className='w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark:bg:neutral-900/60 px-3 h-12 border border-neutral-200 dark:border-neutral-900 rounded-md focus:outline none focus:bg-neutral-100 dark:focus:bg-neutral-900' />
             </div>

            <div className=''>
              <label htmlFor="date" className="block mb-2 font-semibold">
                Alternate Number
              </label>
              <input type='number' id='altphone' placeholder='e.g. +91 (0*********)' name='altphone' className='w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark:bg:neutral-900/60 px-3 h-12 border border-neutral-200 dark:border-neutral-900 rounded-md focus:outline none focus:bg-neutral-100 dark:focus:bg-neutral-900' />
              

            </div>
          </form>
          </div>

<div className=' flex items-center justify-center  rounded-md flex-col col-span-2 w-full mt-24 gap-4'>


          <div className=' bg-slate-700 p-4 w-full'>
            <h1 className=' font-bold text-xl text-center'>Your Booking Status</h1>
            <hr className=' w-full border-[0.5] mb-2 mt-2'/>
            <div className=' text-left flex flex-col gap-3'>
              <h1 className=' font-semibold'>Your Destination</h1>
              <div className=' flex justify-between items-center gap-3 text-sm'>
                <p>From: Location 1</p>
                <p>--------------</p>
                <p>From: Location 1</p>
              </div>
              <div className=' flex justify-between items-center gap-3 text-sm'>
                <p>Arrival at: 03:30 PM</p>
                <p>--------</p>
                <p>Depart at:  04:00 PM</p>
              </div>
              <div className=' flex justify-between items-center gap-3 text-sm'>
                <p>Total No. of Seats</p>
                <p>10 (Driver Side)</p>
              </div>
              <div className=' flex justify-between items-center gap-3 text-sm'>
                <p>Total Amount</p>
                <p>Rs. 5000/-</p>
              </div>
            </div>
          </div>
          <button className=' bg-violet-700 p-3 rounded-md text-center w-full text-white flex  gap-2 items-center justify-center'>Proceed to Pay <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">

  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
</svg>
</button>
          </div>
      </div>

    </div>
  )
}

export default Checkout
