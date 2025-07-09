import React from "react";
import homeImage from "./home1.png"; // Make sure this is correct
import { Link } from "react-router-dom";
import logob from "./logob.png"; // Make sure this is correct
const HomePage = () => {
  return (
    <div>
      <div
  className="bg-cover bg-center h-screen pt-8  flex w-full justify-between flex-col"
  style={{ backgroundImage: `url(${homeImage})` }}
>
      <img src={logob} alt="Logo" className="w-32 ml-8" />
        <div className='bg-white pb-7 py-4 px-4 w-full'>
          <h2 className='text-2xl font-bold'>Get started with goCab </h2>
          <Link to='/User-login' className=' flex item-center justify-center w-full bg-black text-white py-3 rounded mt-5'>Continue</Link>
        </div>
        
      
      
      </div>
    </div>
  );
};

export default HomePage;