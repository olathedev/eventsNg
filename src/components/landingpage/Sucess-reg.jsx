import React from 'react'

function SucessReg({ success }) {
    return (
        <section className={`sucess ${success ? 'flex' : 'hidden'} mt-4 px-6 flex-col gap-2 font-raleway md:w-[70%]`}>
            <h3 className='text-xl font-semibold'>Email Verification</h3>
            <p className=''>Please check your emial for the verificatin link sent to you, click the link to verify your email</p>
            <button className='bg-primary py-3 px-6 font-poppins font-semibold text-white rounded mt-3'>Proceed to Sign in</button>
        </section>
    )
}

export default SucessReg