import React from 'react'
import Navbar from './Navbar.jsx'
import { useForm } from 'react-hook-form'

function Contact() {
    const {
            register,
            handleSubmit,
            formState: { errors },
        } = useForm();
        
        const onSubmit = (data) => console.log(data)
  return (
    <>
    <Navbar/>
    <div className='flex h-screen items-center justify-center'>
                <div id="my_modal_4" className="">
                    <div className="">
                        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                            <h3 className="font-bold text-3xl">Contact Us</h3>
                            <div className='mt-4 space-y-2'>
                                <span>Name</span>
                                <br />
                                <input 
                                    type='text' 
                                    placeholder='Enter your name' 
                                    className='w-80 outline:none py-1 px-3 border rounded-md' 
                                    {...register("name", { required: true })}
                                />
                                <br />
                                {errors.name && (<span className='text-sm text-red-500'>Please enter your name</span>)}
                            </div>
                            <div className='mt-4 space-y-2'>
                                <span>Email</span>
                                <br />
                                <input
                                    type='email'
                                    placeholder='Enter your email'
                                    className='w-80 outline:none py-1 px-3 border rounded-md'
                                    {...register("email", { required: true })}
                                />
                                <br />
                                {errors.email && (<span className='text-sm text-red-500'>Please enter your email</span>)}
                            </div>
                            <div className='mt-4 space-y-2'>
                                <span>Message</span>
                                <br />
                                <textarea
                                    placeholder='Enter your message'
                                    className='w-80 outline:none py-1 px-3 border rounded-md'
                                    {...register("message", { required: true })}
                                />
                                <br />
                                {errors.message && (<span className='text-sm text-red-500'>Please enter your message</span>)}
                            </div>
                            <div className='mt-4'>
                                <button className='bg-blue-500 text-white rounded-full px-2 py-1 cursor-pointer hover:bg-blue-700 duration-300'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Contact
