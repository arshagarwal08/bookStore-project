import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from 'axios'
function Signup() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const navigate = useNavigate()
    
    const onSubmit = async (data) => {
        const userInfo = {
            fullname : data.fullname,
            email : data.email,
            password : data.password
        }
        await axios.post("http://localhost:4001/user/signup", userInfo)
        .then((res) => {
            console.log(res.data)
            if(res.data){
                alert("Signup successfull");
                localStorage.setItem("Users",JSON.stringify(res.data.user))
                navigate("/");
                window.location.reload()
            }
        })
        .catch((err) => {
            if(err.response){
                console.log(err)
                alert("Error: " + err.response.data.message)
            }
        })
    }

    return (
        <>
            <div className='flex h-screen items-center justify-center'>
                <div id="my_modal_4" className="modal modal-open">
                    <div className="modal-box dark:bg-slate-900 dark:text-white">
                        
                        <form onSubmit={handleSubmit(onSubmit)} method="dialog">

                            <Link to={'/'} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>

                            <h3 className="font-bold text-lg">SignUp</h3>
                            <div className='mt-4 space-y-2'>
                                <span>Name</span>
                                <br />
                                <input 
                                    type='text' 
                                    placeholder='Enter your name' 
                                    className='w-80 outline:none py-1 px-3 border rounded-md' 
                                    {...register("fullname", { required: true })}
                                />
                                <br />
                                {errors.fullname && (<span className='text-sm text-red-500'>Please enter your name</span>)}
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
                                <span>Password</span>
                                <br />
                                <input
                                    type='password'
                                    placeholder='Enter your password'
                                    className='w-80 outline:none py-1 px-3 border rounded-md'
                                    {...register("password", { required: true })}
                                />
                                <br />
                                {errors.password && (<span className='text-sm text-red-500'>Please enter your password</span>)}
                            </div>
                            <div className='flex justify-around mt-4'>
                                <button className='bg-pink-500 text-white rounded-full px-2 py-1 cursor-pointer hover:bg-pink-700 duration-300'>SignUp</button>
                                <p>Have account?
                                    <Link to={'/login'} 
                                        className='underline text-blue-500 cursor-pointer'>
                                        Login
                                    </Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup
