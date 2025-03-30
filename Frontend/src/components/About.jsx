import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Link } from 'react-router-dom'

function About() {
    return (
        <>
            <Navbar />
            <div className='dark:bg-slate-900 dark:text-white max-w-screen-2xl container mx-auto md:px-20 px-4'>
                <div className='pt-28 items-center justify-center text-center'>
                    <h1 className='text-2xl font-semibold md:text-4xl'>
                        About
                        <span className='text-pink-500'> us :)</span>
                    </h1>
                    <p className='my-8'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe ea nisi sunt at. Minima assumenda vero sunt iure et quas! Deserunt accusamus ipsam voluptas magnam natus voluptatem velit, fuga voluptatibus, nam consequatur consequuntur error corrupti rerum quas unde pariatur illum laudantium perspiciatis commodi! Cupiditate corrupti fuga, accusantium reiciendis soluta odit consequuntur voluptatibus totam quaerat excepturi ea voluptatum repellat numquam nesciunt aliquid, hic consequatur aperiam ab dolorum, in ex. Ex, fuga aliquam mollitia unde illum, est aspernatur laborum corporis laboriosam deleniti harum soluta nemo distinctio quaerat reprehenderit! Vel aliquid doloremque laudantium maxime corrupti iusto. Delectus maiores nobis sequi, odit provident quod!
                    </p>
                    <Link to='/'>
                        <button className='bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-700 duration-300 cursor-pointer'>
                            Back
                        </button>
                    </Link>
                </div>
                
            </div>
            <Footer />
        </>
    )
}

export default About
