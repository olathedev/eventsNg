import React from 'react'

function SucessReg({ success }) {
    return (
        <section className={`sucess ${success ? 'flex' : 'hidden'} md:w-[60%] mt-4 flex-col gap-2 font-raleway`}>
            <h3 className='text-2xl'>Account Created Successfully</h3>
            <p className='text-lg text-primary'>Please check your emial for a confirmation link</p>
        </section>
    )
}

export default SucessReg