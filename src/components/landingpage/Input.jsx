export default function ({ label, register, icon }) {

    console.log(icon);
    return (
        <div className="w-full md:w-[60%] fullname">

            <label className=''>{label} <span className='text-red-600 text-xl'>*</span> </label>
            <div className="relative w-full">
                <input className='auth-formInput' placeholder='Chukwuma Adekunle' type="text" {...register(label)} />

                <span className='absolute right-3 top-3'>
                <div dangerouslySetInnerHTML={{ __html: icon }} />
                </span>
            </div>
        </div>

    )
}