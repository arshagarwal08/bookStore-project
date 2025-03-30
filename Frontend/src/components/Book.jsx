import React, { useEffect, useState } from 'react'
import Card from './Card'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Book() {

    const allCategories = ['Fantasy','Science Fiction','Free','Mystery','Romance','Thriller']

    const [book,setBook] = useState([])
    const [categories,setCategories] = useState([])

    useEffect(()=>{
        fetchBooks()
    },[categories])

    const fetchBooks = async () => {
        try {
            let query = categories.length > 0 ? `?category=${categories.join(",")}` : ""
            const res = await axios.get(`http://localhost:4001/book${query}`)
            setBook(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    const handleCategoryChange = (category) => {
        setCategories((prev) =>
            prev.includes(category)
                ? prev.filter((c) => c !== category)
                : [...prev, category]
        );
    };

    return (
        <>
            <div className='dark:bg-slate-900 dark:text-white max-w-screen-2xl container mx-auto md:px-20 px-4'>
                <div className='pt-28 items-center justify-center text-center'>
                    <h1 className='text-2xl font-semibold md:text-4xl'>
                    Explore Our Vast Collection of
                        <span className='text-pink-500'> Books :)</span>
                    </h1>
                    <p className='my-8 text-xl'>
                        Welcome to the bookVerse, where you can browse through a diverse collection of books across multiple genres! Whether you love fantasy, romance, mystery, science fiction, or non-fiction, we have something for every reader.
                        Use our category filter to easily find books that match your interest—simply check the genres you love, and we’ll show you the best selections. Looking for free books? We’ve got those too!
                        Start exploring now and find your next great read! 
                    </p>
                    <Link to='/'>
                        <button className='bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-700 duration-300 cursor-pointer'>
                            Back
                        </button>
                    </Link>
                </div>

                <div className="flex justify-center gap-4 mt-6">
                    {allCategories.map((category) => (
                        <label key={category} className="flex text-lg items-center space-x-2">
                            <input
                                type="checkbox"
                                value={category}
                                checked={categories.includes(category)}
                                onChange={() => handleCategoryChange(category)}
                            />
                            <span>{category}</span>
                        </label>
                    ))}
                </div>

                <div className='mt-10 grid grid-cols-1 md:grid-cols-4'>
                    {
                        book.map((item) => (
                            <Card item={item} key={item.id} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Book
