import React from 'react'

import Carosol from '../Home/Carosol';

import Card from './Card/Card';
import CardData from './Card/Card.json';

function Home() {
  let items = [];
  items = CardData.map((item, index) => <Card key={index} image={item.image} title={item.title} description={item.description} buttonText={item.button}
  />)


  return (
    <div>
      <div className='bg-[url(./images/backend1.png)] bg-cover bg-center h-screen'>
        {/* <Carosol/> */}
        <div className='grid grid-cols-2 gap-4 text-center pt-15 pb-2 px-10 ' >
          <div className='text-left text-xl font-sans select-none'>
            <div className='text-5xl font-bold'>Transforming how <p className=' text-blue-600'> businesses manage indirect tax</p></div>
            <p className='text-3xl font-bold my-5'>Rise above the rest</p>
            <button className='bg-blue-600 text-white font-bold p-3 outline-solid rounded-full mr-4 hover:bg-blue-800 cursor-pointer'>Find Out More <i className="fa-solid fa-right-long text-center"></i></button>
            <button className='bg-blue-600 text-white font-bold p-3 outline-solid rounded-full hover:bg-blue-800 cursor-pointer'>Book Meeting </button>
          </div>
          <div className=''>
            <video className="h-full w-full rounded-lg overflow-hidden" controls>
              <source
                src="https://docs.material-tailwind.com/demo.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video></div>

        </div>
        <div className='grid grid-cols-4 gap-4 flex justify-center overflow-hidden'>
          <div className="relative flex flex-col bg-violet-200 outline-4 outline-white shadow-xl/25 border border-slate-200 rounded-lg m-4 p-2 hover:scale-110 transform-gpu">
            <div className="">
              <h6 className="mb-2 text-slate-800 text-xl font-semibold">
                TAX
              </h6>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, quos?</p>
            </div>
          </div>
          <div className="relative flex flex-col bg-teal-50 outline-4 outline-white shadow-xl/25 border border-slate-200 rounded-lg m-4 p-2">
            <div className="">
              <h6 className="mb-2 text-slate-800 text-xl font-semibold">
                VAT
              </h6>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, quos?</p>
            </div>
          </div>
          <div className="relative flex flex-col bg-purple-200 outline-4 outline-white shadow-xl/25 border border-slate-200 rounded-lg m-4 p-2">
            <div className="">
              <h6 className="mb-2 text-slate-800 text-xl font-semibold">
                RJSC
              </h6>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, quos?</p>
            </div>
          </div>
          <div className="relative flex flex-col bg-blue-200 outline-4 outline-white shadow-xl/25 border border-slate-200 rounded-lg m-4 p-2">
            <div className="">
              <h6 className="mb-2 text-slate-800 text-xl font-semibold">
                BIDA
              </h6>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, quos?</p>
            </div>
          </div>
        </div>
      </div>
      <div className='container mx-auto'>
        <div className='flex items-center justify-center  mt-20'>
          <p className=' text-2xl inline-block'><u>What we do</u></p>
          <div>Fintua simplifies global
            indirect tax management</div>
        </div>
        <div className="min-h-screen gap-4 flex flex-wrap flex-1 overflow-hidden items-center justify-center bg-gray-100 p-6  ">
          {items}
        </div>
        <div className='flex items-center justify-center mb-3'>
          <a href="http://"> <button className=' flex items-center justify-center bg-blue-600 text-white font-bold p-3 outline-solid rounded-md hover:bg-orange-400 '>View All Service </button></a>
        </div>
      </div>
      <div className="container mx-auto px-4 bg-gray-500 mt-10">
        <div class="grid grid-cols-2 gap-4">
          <div>
            World-class VAT Experts

            Expertise that
            drives innovation
          </div>

          <div><p>At Fintua, innovation starts with people.

            Our world-class team has decades of experience in indirect tax and fintech – delivering intelligent automation and transformative technology that redefine how businesses manage tax.

            We’re not just solving today’s challenges, we’re shaping the future of indirect tax compliance.</p>
             <div className='flex'>
          <a href="http://"> <button className=' flex  bg-blue-600 text-white font-bold p-3 outline-solid rounded-md hover:bg-orange-400 '>Talk To Expert </button></a>
        </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Home;