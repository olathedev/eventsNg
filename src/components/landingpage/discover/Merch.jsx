import merch from '../../../assets/merchs/hoodie.jpg'
import merch2 from '../../../assets/merchs/shirt.jpg'

export default function Merch({merch}) {
  return (
    <div className="bg-white shadow rounded mt-6">
                <h1 className='md:text-lg font-poppins py-4 px-4 border-b-2 '>Merchandise</h1>
                <div className="p-6 grid md:grid-cols-3 gap-4">
                  <div className="card flex flex-col bg-white shadow rounded relative group">
                    <div className="card-header h-32 max-h-32 overflow-hidden bg-gray-300 rounded-t ">
                      <img src={merch} className='object-cover h-full min-h-full w-full' alt="" />
                    </div>
                    <h4 className='absolute bg-primary bg-opacity-70 text-white backdrop-blur-sm left-0 rounded-ss top-0 p-1  text-sm font-poppins'>Out of stock</h4>

                    <div className="cardbody p-2">
                      <h4 className=''>Customized Hoodie</h4>

                      <p className='text-sm'>NGN 2000</p>
                      <p className='text-sm'>Sold - 45</p>

                      <button className='hidden group-hover:flex justify-center transition-all duration-200 ease-in-out mt-2 text-sm py-2 bg-primary w-full font-quicksand text-white rounded'>place order</button>
                    </div>

                  </div>
                  <div className="card flex flex-col bg-white shadow rounded relative group">
                    <div className="card-header h-32 max-h-32 overflow-hidden bg-gray-300 rounded-t ">
                      <img src={merch2} className='object-cover h-full min-h-full w-full' alt="" />
                    </div>
                    <h4 className='absolute bg-primary bg-opacity-70 text-white backdrop-blur-sm left-0 rounded-ss top-0 p-1  text-sm font-poppins'>Shirt</h4>

                    <div className="cardbody p-2">
                      <h4 className=''>Event Tees</h4>

                      <p className='text-sm'>NGN 3000</p>
                      <p className='text-sm'>Sold - 45</p>

                      <button className='hidden group-hover:flex justify-center transition-all duration-200 ease-in-out mt-2 text-sm py-2 bg-primary w-full font-quicksand text-white rounded'>place order</button>
                    </div>
                  </div>
                </div>

                <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">

                </div>
              </div>
  )
}
