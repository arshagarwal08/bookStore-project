import React from 'react'
import bookBanner from '../assets/bookBanner.jpg'

function Banner() {
    return (
        <>
            <div className='max-w-screen-2xl dark:bg-slate-900 dark:text-white container mx-auto md:px-20 px-4 flex flex-col md:flex-row  pt-12 md:pt-20'>
                <div className='order-2 md:order-1 md:w-1/2'>
                    <div className='space-y-12'>
                        <h1 className='text-4xl font-bold'>Hello, welcomes here to learn something
                            <span className='text-pink-500'> new everyday!!!</span></h1>
                        <p className='text-xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero pariatur reprehenderit dolorem iusto fuga est placeat quo tempore sunt, veniam expedita iste! Dolore, necessitatibus culpa. Ut culpa quo voluptas consequatur.</p>
                        <label className="input validator flex items-center gap-2 p-2 border rounded-md bg-white dark:bg-gray-800">
                            <svg className="h-[1em] opacity-50 text-gray-600 dark:text-gray-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                </g>
                            </svg>
                            <input type="email" placeholder="Email" required
                                className="bg-transparent text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 outline-none w-full" />
                        </label>

                    </div>
                    <button className="mt-5 btn btn-secondary">Get Started</button>
                </div>
                <div className='order-1 md:w-1/2'>
                    <img src={bookBanner} className='w-140 h-120' alt='not found'></img>
                </div>
            </div>
        </>
    )
}

export default Banner
