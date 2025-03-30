import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from './Card';

function Freebook() {

    const [book,setBook] = useState([])

    useEffect(()=>{
        const getBook = async () => {
            try {
                const res = await axios.get("http://localhost:4001/book")
                const data = res.data.filter((data) => data.category === 'Free')
                setBook(data)
            } catch (error) {
                console.log(error)
            }
        };
        getBook();
    },[]);

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
                <div className='mb-10'>
                    <br/>
                    <h1 className='text-3xl font-semibold'>Explore our Free Books</h1>
                    <br/>
                    <p className='text-xl'>
                    At BookVerse, we believe knowledge should be accessible to everyone! Dive into our free books, covering a range of topics from literature to self-improvement. Whether you're looking to enhance your skills or simply explore a new subject, our curated selection of free resources is here to guide you. Start learning today—no cost, just pure knowledge! 🚀
                    </p>
                </div>
                <Slider {...settings}>
                    {
                        book.map((item)=>(
                            <Card item={item} key={item.id} />
                        ))
                    }
                </Slider>
            </div>
        </>
    )
}

export default Freebook
