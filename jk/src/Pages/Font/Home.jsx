import React from 'react'

import Carosol from '../Home/Carosol';
import Card from './Card';

function Home() {

  return (
    <div>
      <div className='bg-[url(./images/backend1.png)] bg-cover bg-center h-screen'>
        {/* <Carosol/> */}
        <div className='grid grid-cols-2 gap-4 text-center pt-15 pb-2 px-10'>
          <div className='text-left text-xl font-sans'>
            <div className='text-5xl font-bold'>Transforming how <p className=' text-blue-600'> businesses manage indirect tax</p></div>
            <p className='text-3xl font-bold my-5'>Rise above the rest</p>
            <button className='bg-blue-600 text-white font-bold p-3 outline-solid rounded-full hover:bg-blue-800 '>Find Out More <i class="fa-solid fa-right-long text-center"></i></button>
          </div>
          <div className=''>
            <video class="h-full w-full rounded-lg" controls>
              <source
                src="https://docs.material-tailwind.com/demo.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video></div>

        </div>
        <div className='grid grid-cols-4 gap-4'>
          <div class="relative flex flex-col bg-violet-200 outline-4 outline-white shadow-xl/25 border border-slate-200 rounded-lg m-4 p-2 hover:scale-110 transform-gpu">
            <div class="">
              <h6 class="mb-2 text-slate-800 text-xl font-semibold">
                TAX
              </h6>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, quos?</p>
            </div>
          </div>
          <div class="relative flex flex-col bg-teal-50 outline-4 outline-white shadow-xl/25 border border-slate-200 rounded-lg m-4 p-2">
            <div class="">
              <h6 class="mb-2 text-slate-800 text-xl font-semibold">
                VAT
              </h6>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, quos?</p>
            </div>
          </div>
          <div class="relative flex flex-col bg-purple-200 outline-4 outline-white shadow-xl/25 border border-slate-200 rounded-lg m-4 p-2">
            <div class="">
              <h6 class="mb-2 text-slate-800 text-xl font-semibold">
                RJSC
              </h6>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, quos?</p>
            </div>
          </div>
          <div class="relative flex flex-col bg-blue-200 outline-4 outline-white shadow-xl/25 border border-slate-200 rounded-lg m-4 p-2">
            <div class="">
              <h6 class="mb-2 text-slate-800 text-xl font-semibold">
                BIDA
              </h6>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, quos?</p>
            </div>
          </div>

        </div>
      </div>

      <div className='container'>
        <h6>What we do</h6>
  <div className="min-h-screen flex overflow-hidden items-center justify-center bg-gray-100 p-6 gap-4 flex-1">
    
        <Card
          image="https://source.unsplash.com/random/400x300/?nature"
          title="Beautiful Nature"
          description="ext of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimeExplore the beauty of untouched forests and mountains."
          buttonText="Read More"
        />
        <Card
          image="https://source.unsplash.com/random/400x300/?nature"
          title="Beautiful Nature"
          description="Explore the beauty of untouched forests and mountains."
          buttonText="Read More"
        />
        <Card
          image="https://source.unsplash.com/random/400x300/?nature"
          title="Beautiful Nature"
          description="Explore the beauty of untouched forests and mountains. lo"
          
          buttonText="Read More"
        />
      </div>
      
      </div>
    </div>
  )
}

export default Home;