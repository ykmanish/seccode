// Card.js
import React from "react";

const Card = ({ quote, name, role, image, rating }) => {
  return (
    <div className="w-96 rotate-6 rounded-xl">
      <div className="bg-white border border-zinc-600 hover:-translate-y-3 duration-500 transition-all p-6 w-full h-auto py-6 rounded-3xl">
        <p className="small text-sm tracking-wide text-[#101010]">{quote}</p>
        <div className="border border-zinc-100 w-full mt-3"></div>
        <div className="flex justify-between">
          <div className="flex mt-4 items-center">
            <img src={image} alt={name} className="w-10 h-10 rounded-full object-cover" />
            <h1 className="heading flex text-[#0c0c0c] flex-col ml-2">
              {name}
              <span className="small tracking-wide text-[#9381ff] text-sm">{role}</span>
            </h1>
          </div>
          <div className="flex mt-4 items-center">
            <img src="/star.svg" alt="star" className="w-4 h-4 rounded-full object-cover" />
            <h1 className="heading flex flex-col ml-2">{rating}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
