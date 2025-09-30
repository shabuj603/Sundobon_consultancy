import React from 'react'
import {Helmet} from "react-helmet";
import Carosol from '../Home/Carosol';
import Card from './Card/Card';
import CardData from './Card/Card.json';
import { Link, useNavigate } from 'react-router-dom';
import CalendarModal from '../../DATETIME/Dtime';


function Home() {
const truncateString =(str, num)=>{
    if(str.length > num){
      return str.slice(0, num)+ "...."
    }else{
      return(str);
    }
  }
  let items = [];
  items = CardData.map((item, index) => <Card key={index} image={item.image} title={item.title} description={truncateString(item.description, 100)} buttonText={item.button}
  />)

  const navigate = useNavigate();

  return (
    <div>
      
    <Helmet>
      <title>Home page</title>
    </Helmet>
      <div className='bg-[url(./images/backend1.png)] bg-cover bg-center h-screen'>
        {/* <Carosol/> */}
        <div className='grid grid-cols-1 gap-4 text-center pt-0 pb-2 px-10 max:sm:grid-cols-1' >
          <div className='text-left text-xl font-sans select-none sm: '>
            <div className='lg:text-5xl font-bold sm:text-sm grid grid-cols-1 w-full'>Transforming how <p className=' text-blue-600'> businesses manage indirect tax</p></div>
            <p className='lg:text-3xl font-bold mb-2'>Rise above the rest</p>
            <button onClick={()=>{navigate('/service')}}  className='bg-blue-600 text-white px-2 py-1 outline-solid rounded-xl float-left mr-4 hover:bg-blue-800 cursor-pointer'>Find Out More <i className="fa-solid fa-right-long text-center sm:float-left"></i></button>           
           <div><CalendarModal/></div>
          </div>
          <div className='-z-10'>
            <video className="lg:h-full w-full rounded-lg" controls>
              <source
                src="https://docs.material-tailwind.com/demo.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video></div>

        </div>
        <div className='grid grid-cols-2 gap-2 justify-center'>         
          <div className="absulate flex flex-col bg-violet-200 outline-4 outline-white shadow-xl/25 border border-slate-200 rounded-lg m-4 p-2">
            <div className="">
              <h6 className="mb-2 text-slate-800 text-xl font-semibold">
                TAX
              </h6>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, quos?</p>
            </div>
          </div>
          <div className="absulate flex flex-col bg-teal-50 outline-4 outline-white shadow-xl/25 border border-slate-200 rounded-lg m-4 p-2">
            <div className="">
              <h6 className="mb-2 text-slate-800 text-xl font-semibold">
                VAT
              </h6>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, quos?</p>
            </div>
          </div>
          <div className="absulate flex flex-col bg-purple-200 outline-4 outline-white shadow-xl/25 border border-slate-200 rounded-lg m-4 p-2">
            <div className="">
              <h6 className="mb-2 text-slate-800 text-xl font-semibold">
                RJSC
              </h6>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, quos?</p>
            </div>
          </div>
          <div className="absulate flex flex-col bg-blue-200 outline-4 outline-white shadow-xl/25 border border-slate-200 rounded-lg m-4 p-2">
            <div className="">
              <h6 className="mb-2 text-slate-800 text-xl font-semibold">
                BIDA
              </h6>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, quos?</p>
            </div>
          </div>
        </div>
      </div>
      <div className='container m-auto'>
        <div className='grid grid-rows-2 align-center'>
          <div className='text-5xl mt-10 flex justify-center align-center sm:text-2xl '> <span className='text-blue-600'>
           What We Do</span></div>
        <div className='lg:text-5xl font-medium text-fuchsia-950 flex justify-center mb-20 sm:text-sm'>Fintua&nbsp; <span className='text-blue-600'>
           simplifies</span>&nbsp; global
            indirect tax management</div>
        </div>
        <div className="grid grid-cols-2 min-h-screen gap-4  flex-wrap flex-1 overflow-hidden items-center justify-center bg-gray-100 p-6 lg:grid-cols-3 ">
          {items}
        </div>
        <div className='flex items-center justify-center mb-3'>
           <button className=' flex items-center justify-center bg-blue-600 text-white font-bold p-3 outline-solid rounded-md cursor-pointer  hover:bg-blue-700 o' onClick={()=>{navigate('/service')}}>View All Service </button>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-10">
        <div className="grid grid-cols-2 gap-4 my-30">
          <div>
            <p className='text-blue-600 text-sm'>World-class VAT Experts</p>

            <p className='text-fuchsia-950 text-md font-semibold mt-3'>Expertise that drives innovation</p>
          </div>

          <div><p className='font-serif text-sm mb-4 '>At Fintua, innovation starts with people.

            Our world-class team has decades of experience in indirect tax and fintech – delivering intelligent automation and transformative technology that redefine how businesses manage tax..</p>
             <div className='flex'>
          <a href="http://"> <button className=' flex  bg-blue-600 text-white py-1 px-2 outline-solid rounded-md hover:bg-orange-400 '>Talk To Expert </button></a>
        </div>
        <img src=" " alt="" srcSet="" />

          </div>
        </div>

      </div>
    </div>
  )
}

export default Home;