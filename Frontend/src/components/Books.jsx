import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Book from './Book'

export default function Books() {
  return (
    <>
    <Navbar/>
    <div className='dark:bg-slate-900 dark:text-white'>
        <Book />
    </div>
    <Footer/>
    </>
  )
}
