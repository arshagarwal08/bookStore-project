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
                        <span className='text-pink-500'> bookVerse :)</span>
                    </h1>
                    <p className='my-14 text-lg'>
                    Welcome to BookVerse, your ultimate destination for book lovers!
                    <br/><br/>
                    Whether you're a passionate reader, a curious learner, or someone looking for the perfect book, we’ve got something for you. Our mission is to provide a seamless and enjoyable book-browsing experience, offering a wide range of genres, including fiction, fantasy, romance, mystery, and even free educational resources.
                    <br/>
                    At BookVerse, we believe in the power of stories and knowledge. We are committed to bringing readers closer to their next great read while making books more accessible to everyone. Explore, discover, and dive into the world of books with us! 📖🌍
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
