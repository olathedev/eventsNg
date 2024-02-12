import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Nav from '../components/landingpage/Nav'
import loader from '../assets/loader.svg'
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
      const response = await axios.get(`/verify?token=${token}`)
      setIsPending(false)
      setError(null)
      setSuccess(true)
      // Dispatch login action here

      
      navigate('/dashboard')
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

  return (
    <div>
        <Nav />

        <section className='container mx-auto px-6 mt-4 max-h-screen flex justify-center font-raleway pt-16'>
         {isPending && (
          <div className='pt-10'> 
              <img src={loader} alt="" />
          </div>
          )}

          {error && (
          <div>{error}</div>
          )}

          {success && (
          <div>
            
            <h3>Success!Email verified</h3>
            <p>Redirecting, just a moment...</p>

            </div>
          )}

        </section>
    </div>
  )
}
