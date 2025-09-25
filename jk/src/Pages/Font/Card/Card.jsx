import React from "react";

const Card = ({ image, title, description, buttonText }) => {
  return (
    <div className="max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-5">
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        <p className="text-gray-600 mt-2 text-sm">{description}</p>
        <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-xl cursor-pointer hover:bg-blue-700 transition-colors">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Card;
