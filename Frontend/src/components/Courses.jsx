import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Course from './Course'

export default function Courses() {
  return (
    <>
    <Navbar/>
    <div className='dark:bg-slate-900 dark:text-white'>
        <Course/>
    </div>
    <Footer/>
    </>
  )
}
