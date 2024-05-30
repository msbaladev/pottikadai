import React from 'react'
import Heroimg from "../assets/hero.png"
import PrimaryButton from './PrimaryButton'
 const bgstyle={
  
 }
export default function Hero() {
  return (
    <div className='relative z-[-1]'>
      <div className='container py-16 sm:py-0'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center min-h-[600px]'>

          <div className='space-y-7 text-dark order-2 sm:order-1'>
            <h1 className='text-5xl'>
            Fresh & Healthy Meal Plan Delivery in chennai
            </h1>
            <p className='lg:pr-64'>
            Delicious Meals<span className='text-secondary font-cursive text-7xl'>Delivered</span>  to Your Door From $132.95 per week
            </p>
          <div>
            <PrimaryButton/>
          </div>
          </div>
          <div className='relative z-30 order-1 sm:order-2'>
              <img src={Heroimg} alt="" className='w-full sm:scale-125 sm:translate-y-16'></img>
            </div>

        </div>
      </div>

    </div>
  )
}
