import React, { useEffect, useState } from 'react'
import CardData from './Card/Card.json';
import { useParams, useLocation } from 'react-router-dom'
function Serviced() {
    const {title}=useParams();
    const location = useLocation();
    cosnt [desc, setDesc]= useState("");

    useEffect(()=>{
        const blogData = CardData.filter((blog)=> blog.title === title);
    setDesc (blogData[0].description);
    },[]);
  return (
    <div>{title}</div>
  )
}

export default Serviced