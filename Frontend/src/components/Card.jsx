import React from 'react';
import { Link } from 'react-router-dom';

function Card({ item }) {
    return (
        <>
            <div className='mt-4 my-3 p-3'>
                <Link to={`/book/${item._id}`}>
                    <div className="card bg-base-100 w-80 shadow-sm hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border cursor-pointer">
                        <figure className="pt-2 pl-14 w-64 h-48 flex justify-center items-center overflow-hidden">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-auto h-full object-contain mx-auto"
                            />
                        </figure>

                        <div className="card-body">
                            <h2 className="card-title">
                                {item.title}
                                <div className="badge badge-secondary">{item.category}</div>
                            </h2>
                            <p>{item.author}</p>
                            <div className="card-actions justify-between">
                                <div className="badge badge-outline">${item.price}</div>
                                <div className="rounded-full border-[2px] px-2 py-1 cursor-pointer hover:bg-pink-500 hover:text-white duration-200">
                                    Buy Now
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    );
}

export default Card;
