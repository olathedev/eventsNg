import React from 'react'
import image from '../assets/asake1.jpg'
import google from '../assets/google.png'
import { Link, json } from 'react-router-dom'
import { useForm } from 'react-hook-form';


export default function Register() {

    const { register, handleSubmit } = useForm()
    console.log(register);
    const onSubmit = (data, e) => {
       
    }

    return (
        <div className='w-full h-screen max-h-screen'>


            <section className='w-full md:flex h-screen max-h-screen'>
                <div className='w-full md:w-1/2  overflow-y-auto'>

                    <nav className='pt-6 px-6'>
                        <Link to="/"> <h1 className='text-2xl font-semibold font-raleway text-primary cursor-pointer'>Events.ng</h1></Link>
                    </nav>

                    <div className='flex flex-col pt-[2rem] items-center'>
                        <header className='w-full px-6 md:px-1 md:w-[60%] font-raleway mb-3'>
                            <p className='mt-4 text-lg md:text-xl'>Hey, Welcome</p>
                            <h2 className='text-2xl md:text-3xl mt-2 font-bold text-primary'>Create a new </h2>
                        </header>

                        <form className='mt-4 px-6 md:px-2  w-full flex flex-col gap-4 items-center font-raleway' onSubmit={handleSubmit(onSubmit)}>

                            <div className="w-full md:w-[60%] fullname">

                                <label className=''>Full Name <span className='text-red-600 text-xl'>*</span> </label>
                                <div className="relative w-full">
                                    <input className='auth-form-input' placeholder='Chukwuma Adekunle' type="text" {...register("fullname")} />

                                    <span className='absolute right-3 top-3'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        </svg>



                                    </span>
                                </div>
                            </div>







                            <div className="w-full md:w-[60%] Email">

                                <label className=''>Email <span className='text-red-600 text-xl'>*</span> </label>
                                <div className="relative w-full">
                                    <input className='auth-form-input' placeholder='Enter your Email' type="email" name="" id="" />

                                    <span className='absolute right-3 top-3'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                        </svg>


                                    </span>
                                </div>
                            </div>


                            <div className="w-full md:w-[60%] password">

                                <label className=''>Password <span className='text-red-600 text-xl'>*</span> </label>
                                <div className="relative w-full">
                                    <input className='auth-form-input' placeholder='Password' type="password" {...register("paassword")} />

                                    <span className='absolute right-3 top-3 cursor-pointer'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                            <path d="M3.53 2.47a.75.75 0 0 0-1.06 1.06l18 18a.75.75 0 1 0 1.06-1.06l-18-18ZM22.676 12.553a11.249 11.249 0 0 1-2.631 4.31l-3.099-3.099a5.25 5.25 0 0 0-6.71-6.71L7.759 4.577a11.217 11.217 0 0 1 4.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113Z" />
                                            <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0 1 15.75 12ZM12.53 15.713l-4.243-4.244a3.75 3.75 0 0 0 4.244 4.243Z" />
                                            <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 0 0-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 0 1 6.75 12Z" />
                                        </svg>



                                    </span>
                                </div>

                            </div>



                            <div className="w-full md:w-[60%] Confirmrd">

                                <label className=''>Confirm Password <span className='text-red-600 text-xl'>*</span> </label>
                                <div className="relative w-full">
                                    <input className='auth-form-input' placeholder='Confirm your Password' type="password" {...register("confirmPassowrd")} />

                                    <span className='absolute right-3 top-3 cursor-pointer'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                            <path d="M3.53 2.47a.75.75 0 0 0-1.06 1.06l18 18a.75.75 0 1 0 1.06-1.06l-18-18ZM22.676 12.553a11.249 11.249 0 0 1-2.631 4.31l-3.099-3.099a5.25 5.25 0 0 0-6.71-6.71L7.759 4.577a11.217 11.217 0 0 1 4.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113Z" />
                                            <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0 1 15.75 12ZM12.53 15.713l-4.243-4.244a3.75 3.75 0 0 0 4.244 4.243Z" />
                                            <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 0 0-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 0 1 6.75 12Z" />
                                        </svg>



                                    </span>
                                </div>
                                <p className='flex justify-end font-poppins text-primary cursor-pointer'>Forgoten Password?</p>

                            </div>


                            <div className='w-full md:w-[60%]'>
                                <button className='w-full py-3 px-4 text-xl font-semibold  text-white bg-primary rounded'>Sign up</button>
                            </div>

                            <button className="w-full md:w-[60%] py-3 px-4 bg-gray-300 rounded flex items-center justify-center gap-4">
                                <img src={google} className='h-6' alt="" />

                                Sign up with Google
                            </button>
                            <p className='font-semibold'>Already have an account? <Link to="/login" className='text-primary underline'>Sign in</Link> </p>
                        </form>

                    </div>

                </div>
                <div className='hidden md:flex md:w-1/2 bg-green-700 max-h-screen  overflow-hidden'>
                    <img src={image} className='h-screen w-full object-cover' alt="" />
                </div>
            </section>
        </div>
    )
}
