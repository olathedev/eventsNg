import axios from 'axios'
import React, { useEffect, useState } from 'react'
import loader from '../../assets/loader.svg'
import mail from '../../assets/envelope.svg'

import { useNavigate, useSearchParams } from 'react-router-dom'


export default function Verify() {

  const [searchParams] = useSearchParams()
  const navigate = useNavigate()


  console.log(searchParams);
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)

  const token = searchParams.get('token')
  console.log(token);
  const verifyToken = async () => {
    setIsPending(true)
    try {
      const response = await axios.get(`/auth/verify?token=${token}`)
      setIsPending(false)
      setSuccess(true)
      // Dispatch login action here
      console.log((response));
    } catch (error) {
      setIsPending(false)
      console.log(error);
      setError(error.response.data.message)
    }
  }

  useEffect(() => {
    verifyToken()
  }, [])

  if (isPending) {
    return (

      <div className='container mx-auto h-screen max-h-screen flex flex-col justify-center items-center'>
        <img src={loader} className='h-20' alt="" />
        <h4 className='text-xl font-poppins'>Loading...</h4>
      </div>
    )
  }
 
  if (error) {
    return (

      <div className='container mx-auto px-4 h-screen max-h-screen flex justify-center items-center'>
        <div className="py-6 px-4 border-2 border-red-400 rounded-md font-poppins text-center">
          <h2 className="text-xl mb-4 font-semibold">Email Verification</h2>
          <p className=''>Sorry, we couldnt verify, your email you can request a new verification email, <span className="text-primary cursor-pointer">Resend</span> </p>
          <button className='py-3 px-3 rounded bg-primary text-white mt-4'>Back to login</button>
        </div>
      </div>
    )
  }

  return (
    <div>




      {success && (
        <div className='container mx-auto px-4 h-screen max-h-screen flex justify-center items-center'>
          <div className="py-6 px-4 border-2 border-primary rounded-md font-poppins text-center">
            <h2 className="text-xl mb-4 font-semibold text-green-500">Sucesss!</h2>
              <img src={mail} alt="" />
            <p className=''>Your email has been verified and your account is up, you can proceed to login </p>
            <button className='py-3 px-3 rounded bg-primary text-white mt-4'>Back to login</button>
          </div>
        </div>
      )}


    </div>
  )
}
