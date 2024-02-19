import React, { useState } from 'react'
import image from '../../assets/authImage.jpg'
import google from '../../assets/google.png'
import paper from '../../assets/paper.svg'

import * as yup from "yup"

import { Link, useNavigate } from 'react-router-dom'
import { useAuthContext } from '../../hooks/useAuthContext'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import axios from 'axios'

const schema = yup.object ({
    email: yup.string().email("Provide a valid email").required("please provide an email"),
    password: yup.string().required("Please provide a password").min(6, "Invalid password"),
})

export default function Login() {

    const {dispatch} = useAuthContext()
    const navigate = useNavigate()
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState({email: '', password: ''})



    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            email: "",
            password: ""
        }
    })
    const onSubmit = async (data) => {
        setError({email: '', password: ''})
        setIsPending(true)
        try {
            const {data: response} = await axios.post('/auth/signin', data)
            console.log(response)
            dispatch({type: 'LOGIN', payload: response})
            localStorage.setItem('user', JSON.stringify(response.token))
            setIsPending(false)
            navigate('/dashboard/')
        } catch (error) {
            console.log(error);
            setIsPending(false)
            setIsPending(false)
            const {message} = error.response.data
            console.log(error.response)
            if(message.includes('Email')) {
                setError({email: message})
            }
            if(message.includes('password')) {
                setError({password: message})
            }
            
        }
    }


    return (
        <div className='w-full max-h-screen overflow-hidden'>

            <img src={paper} alt="" className='h-[13rem] md:absolute top-[10rem] left-[37rem] z-10' />
            <section className='w-full md:flex relative'>
                <div className='w-full md:w-1/2 '>

                    <nav className='pt-6 px-6'>
                        <Link to="/"> <h1 className='text-xl font-semibold font-raleway text-primary cursor-pointer'>Events.ng</h1></Link>
                    </nav>

                    <div className='flex flex-col pt-[4rem] items-center'>
                        <header className='w-full px-6 md:px-1 md:w-[60%] font-raleway mb-3'>
                            <p className='mt-4 font-quicksand'>Resume your journey</p>
                            <h2 className='text-2xl md:text-2xl mt-2 font-bold text-primary'>Sign in to your Account</h2>
                        </header>

                        <form className='mt-4 px-6 md:px-2  w-full flex flex-col gap-4 items-center font-quicksand' onSubmit={handleSubmit(onSubmit)}>



                            <div className="w-full md:w-[60%] Email">

                                <label htmlFor="password" className=''>Email <span className='text-red-600 text-xl'>*</span> </label>
                                <div className="relative w-full">
                                    <input className='auth-formInput' placeholder='Email' type="text" {...register('email')} onClick={() => setError({email: '', password: ''})
} />

                                    <span className='absolute right-3 top-3'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                        </svg>


                                    </span>
                                </div>

                                {errors.email && (
                                    <span className='text-sm font-poppins text-red-500'>{errors.email.message}</span>
                                )}
                                {error.email && (
                                    <span className={`${errors.email ? 'hidden' : 'flex'} text-sm font-poppins text-red-500`}>{error.email}</span>
                                )}
                            </div>


                            <div className="w-full md:w-[60%] password">

                                <label htmlFor="password" className=''>Password <span className='text-red-600 text-xl'>*</span> </label>
                                <div className="relative w-full">
                                    <input className='auth-formInput' placeholder='Password' type="password"  {...register('password')} onClick={() => setError({email: '', password: ''})}  />

                                    <span className='absolute right-3 top-3 cursor-pointer'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                            <path d="M3.53 2.47a.75.75 0 0 0-1.06 1.06l18 18a.75.75 0 1 0 1.06-1.06l-18-18ZM22.676 12.553a11.249 11.249 0 0 1-2.631 4.31l-3.099-3.099a5.25 5.25 0 0 0-6.71-6.71L7.759 4.577a11.217 11.217 0 0 1 4.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113Z" />
                                            <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0 1 15.75 12ZM12.53 15.713l-4.243-4.244a3.75 3.75 0 0 0 4.244 4.243Z" />
                                            <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 0 0-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 0 1 6.75 12Z" />
                                        </svg>



                                    </span>
                                </div>
                                {errors.password && (
                                    <span className='text-sm font-poppins text-red-500'>{errors.password.message}</span>
                                )}
                                {error.password && (
                                    <span className='text-sm font-poppins text-red-500'>{error.password}</span>
                                )}
                                <p className='flex justify-end font-poppins text-primary cursor-pointer'>Forgoten Password?</p>

                            </div>




                            <div className='w-full md:w-[60%]'>
                                <button className='auth-button bg-primary text-white' disabled={isPending}>{!isPending ? "Sign in" : "Signing in..."}</button>
                            </div>

                            <button className="auth-button w-full text-secondary md:w-[60%] bg-primary bg-opacity-25 rounded flex items-center justify-center gap-4">
                                <img src={google} className='h-6' alt="" />

                                Sign in with Google
                            </button>
                            <p className='font-semibold'>Dont have an account? <Link to="/register" className='text-primary underline'>Sign up</Link> </p>
                        </form>

                    </div>

                </div>
                <div className='hidden md:flex md:w-1/2 bg-green-700'>
                    <img src={image} className='h-screen w-full object-cover' alt="" />
                </div>
            </section>
        </div>
    )
}
