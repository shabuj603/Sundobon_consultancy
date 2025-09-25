import React from 'react'
import { useState } from "react";

const images = [
    "./images/Flux_Dev_Design1 (1).jpg",
    "./images/Flux_Dev_Design1 (2).jpg",
    "./images/Flux_Dev_Design1.jpg",
];


const Carosol = () => {

    const [current, setCurrent] = useState(0);
    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <div>
            <div className='bg-white'><div className="grid grid-cols-2 gap-4 pt-10">
                <div className='grid grid-2 gap-4'>
                    <div className='pl-5' >
                        <img className='text-lg font-bold mask-x-from-70%' src="https://www.expatcpa.com/wp-content/uploads/2018/12/icon-1-124x160.png" alt="" />
                        <h1 className='text-2xl text-oklch-500 '>Transforming how businesses manage indirect tax </h1>
                        <h2>Rise above the rest</h2>
                    </div>
                    <div>
                        <img src="https://www.expatcpa.com/wp-content/uploads/2018/12/icon-2-177x160.png" alt="" />
                        <h1>Are you living in a foreign country? </h1>
                    </div>
                </div>
                <div>
                    <div className="relative w-full max-w-3xl mx-auto overflow-hidden rounded-xl shadow-lg">
                        <img
                            src={images[current]}
                            alt={`Slide ${current}`}
                            className="w-full h-64 object-cover transition-all duration-500"
                        />

                        {/* Prev Button */}
                        <button
                            onClick={prevSlide}
                            className="absolute left-0 top-1/2 -translate-y-1/2 bg-black bg-opacity-40 text-white px-3 py-1 rounded-r"
                        >
                            ◀
                        </button>

                        {/* Next Button */}
                        <button
                            onClick={nextSlide}
                            className="absolute right-0 top-1/2 -translate-y-1/2 bg-black bg-opacity-40 text-white px-3 py-1 rounded-l"
                        >
                            ▶
                        </button>

                        {/* Dots */}
                        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-2">
                            {images.map((_, idx) => (
                                <button
                                    key={idx}
                                    className={`w-3 h-3 rounded-full ${current === idx ? "bg-white" : "bg-gray-400"
                                        }`}
                                    onClick={() => setCurrent(idx)}
                                />
                            ))}
                        </div>
                    </div>
                </div>

            </div></div>
        </div>
    )
}

export default Carosol