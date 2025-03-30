import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import axios from 'axios'

function SingleBook() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [book, setBook] = useState(null);

    useEffect(() => {
        const getBook = async () => {
            try {
                console.log("Fetching book with ID:", id);
                const res = await axios.get(`http://localhost:4001/book/${id}`);
                setBook(res.data);
            } catch (error) {
                console.log("Axios error:", error.response ? error.response.data : error.message);
                setBook(undefined);
            }            
        };
        getBook();
    }, [id]);

    useEffect(() => {
        if (book === undefined) {
            setTimeout(() => {
                navigate('/');
            }, 2000);
        }
    }, [book, navigate]);

    if (book === null) return (
        <div className="min-h-screen flex justify-center items-center text-2xl font-semibold">
            Loading...
        </div>
    );

    if (book === undefined) return (
        <div className="min-h-screen flex justify-center items-center text-2xl font-semibold">
            Book not found. Redirecting...
        </div>
    );

    return (
        <>
            <Navbar />
            <div className="min-h-screen max-w-screen-lg pt-20 dark:bg-slate-900 dark:text-white flex justify-center items-center mx-auto">
                <div className="shadow-lg dark:border rounded-md p-6 flex items-center space-x-8">
                    
                    <div className="max-w-md">
                        <h2 className="text-3xl font-semibold">{book.title}</h2>
                        <br/>
                        <p className="text-gray-600 dark:text-gray-300">{book.category}</p>
                        <p className="mt-4 text-lg">{book.author}</p>
                        <p className="text-xl font-bold mt-4">${book.price}</p>
                        <button className="bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-700 duration-300 cursor-pointer mt-4">
                            Buy Now
                        </button>
                    </div>

                    
                    <img src={book.image} alt={book.name} className="w-96 h-96 object-contain my-4" />
                </div>
            </div>

            <Footer />
        </>
    );
}

export default SingleBook;
