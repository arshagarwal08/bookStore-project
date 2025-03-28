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
                    <h1 className='text-xl font-semibold'>Free Offered Courses</h1>
                    <p>
                        Here are all the free books available on our website the books are about sports, cooking, music, and there are also knowledgable books available. Please feel free to read the books from below free of cost.
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
