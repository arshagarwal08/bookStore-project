import React from 'react'
import bookBanner from '../assets/bookBanner.jpg'
import { Link } from 'react-router-dom'

function Banner() {
    return (
        <>
            <div className='max-w-screen-2xl dark:bg-slate-900 dark:text-white container mx-auto md:px-20 px-4 flex flex-col md:flex-row  pt-12 md:pt-20'>
                <div className='order-2 md:order-1 md:w-1/2'>
                    <div className='space-y-12'>
                        <h1 className='text-4xl font-bold'>Hello, welcomes here to learn something
                            <span className='text-pink-500'> new everyday!!!</span></h1>
                        <p className='text-xl'>
                            The BookVerse serves as the gateway to a vast collection of books across various genres. Users can explore featured books, browse by category, and discover new reads. With a seamless and user-friendly interface, visitors can easily navigate, view book details, and make purchases. Whether you're looking for fantasy, romance, or free books, BookVerse has something for every reader! 📚✨
                        </p>
                    </div>
                    <Link to={'/signup'} className="mt-8 btn btn-secondary">Get Started</Link>
                </div>
                <div className='order-1 md:w-1/2'>
                    <img src={bookBanner} className='w-140 h-120' alt='not found'></img>
                </div>
            </div>
        </>
    )
}

export default Banner
