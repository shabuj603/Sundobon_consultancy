import React from 'react'
import Card from './Card/Card';
import CardData from './Card/Card.json';
import { Link, useLocation } from 'react-router-dom';


function Service() {
  let location = useLocation();
  console.log(location,"location write here");

  const truncateString =(str, num)=>{
    if(str.length > num){
      return str.slice(0, num)+ "...."
    }else{
      return(str);
    }
  }

let items=[];
 items = CardData.map((item, index)=> <Card key={index} image={item.image} title={item.title} description={truncateString(item.description, 100)} buttonText="Read More" />)

 for (let i = 2;  items.length == i; i++) {
   items = items;
  
 }
  return (
     <div className='container m-auto'>
        <div className='grid grid-rows-2 align-center'>
          <div className='text-5xl mt-10 flex justify-center align-center '> Our All Service</div>
        <div className='text-5xl font-medium text-fuchsia-950 flex justify-center mb-20'>Fintua&nbsp; <span className='text-blue-600'>
           simplifies</span>&nbsp; global
            indirect tax management</div>
        </div>
        <div className="min-h-screen gap-4 flex flex-wrap flex-1 overflow-hidden items-center justify-center bg-gray-100 p-6  ">  
          {items }    
         <Link>Clicke me</Link>
        </div>
      
      </div>
  )
}

export default Service