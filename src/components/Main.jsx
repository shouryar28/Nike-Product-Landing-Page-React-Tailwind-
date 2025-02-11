import React from "react";

const Main = () => {
  return (
    <div>
      <div className="flex justify-between items-center px-36 mt-20">
        {/* Left Section -  Text Content */}
        <div className="w-1/2">
          <h1 className="text-8xl font-extrabold">
            YOUR FEET <br /> DESERVE <br />
            THE BEST
          </h1>

        {/* Left Section - 2nd Text Content */}  
          <p className="mt-5 text-gray-600 text-lg">
          YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.
          YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.
          </p>
          <div className="flex text-lg py-6">
            <button className="bg-red-500 text-white px-3">Shop Now</button>
          <button className="border-slate-800 border-2 px-3 ml-5">Category</button>
          </div>
          
          <h1 className="text-slate-600 text-sm">also available on</h1>

          <div className="flex py-2">
            <img className="mr-4" src="/images/flipkart.png"/>
            <img src="/images/amazon.png"/>
          </div>  
        </div>
         {/* Right Section - Image */}
       <div className="translate-y-4 ml-28">
        <img src="/images/shoe_image.png"/>
       </div>
       
      </div>
    </div>
  );
};

export default Main;













