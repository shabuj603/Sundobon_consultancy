import React from 'react'

import Carosol from '../Home/Carosol';
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

      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore voluptate, voluptates voluptatibus officiis totam, quisquam ullam animi impedit reprehenderit iure nobis quae, laudantium distinctio quaerat harum iste deserunt ipsa molestiae sequi itaque eum cupiditate maiores repellat. Vero, laboriosam iure corporis repudiandae obcaecati aut consequatur ullam quam necessitatibus numquam nostrum fugit nam perspiciatis maxime a, id, voluptas eligendi delectus. Eos deleniti cumque alias similique quasi inventore voluptates, consequuntur maiores. Nisi ipsam corrupti sit voluptates impedit sed, nesciunt assumenda perspiciatis, ab sequi quam debitis ipsum cupiditate repudiandae ipsa doloribus? Ullam corporis esse illum delectus aliquid. Obcaecati culpa rerum est voluptatem, esse nulla in repudiandae nobis nam impedit eos natus necessitatibus aliquam blanditiis sed cumque cum deleniti corporis nesciunt similique excepturi deserunt? Voluptatibus veniam necessitatibus blanditiis voluptate eos quis quos pariatur repellendus excepturi aspernatur, tenetur neque perspiciatis possimus assumenda id minima iste repudiandae facilis hic eveniet minus quam laboriosam vel doloremque. Iure explicabo incidunt tempore ut quidem quaerat architecto tenetur laborum voluptates accusantium id voluptas expedita optio harum ad asperiores rem alias neque ex facilis similique autem exercitationem, quasi commodi. Sint id non dolore voluptatem nemo quia deserunt excepturi iste quae ducimus autem aliquid, tempore unde nisi quos. Laboriosam, praesentium! Molestias, fuga rem.
    </div>
  )
}

export default Home;