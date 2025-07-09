import React , { useState } from 'react'
import { Link } from "react-router-dom";
import logocap from "./logocap.png";

const Captainlogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // eslint-disable-next-line no-unused-vars
  const[userData, setUserData] = useState({})


  const submitHandler = async (e) => {
    e.preventDefault();
     //console.log("Email:", email);
    //console.log("pass:", password);
    setUserData({
      email: email,
      password: password
    })
    //console.log(userData)
    setEmail('');
    setPassword('');
    // Your login logic here
  };
  return (
    <div>
     <div className='p-7 h-screen flex flex-col justify-between'>
      {/* This is the UserLogin component */}
      <div>
        <img className="w-20 mb-4" src={logocap} alt="Logo" />
        <form onSubmit={(e) => {
          submitHandler(e)
        }}>
          <h3 className="text-lg font-medium mb-2">What's your Email</h3>
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border border-gray-300 w-full text-lg placeholder:text-base"
            type="email"
            placeholder="email@example.com"
          />
          <h3>Enter Password</h3>
          <input
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border border-gray-300 w-full text-lg placeholder:text-base"
            type="password"
            placeholder="password"
          />
          <button
            className="bg-[#10b461] text-white font-semibold mb-3 rounded-lg px-4 py-2 w-full text-lg"
          >
            Login
          </button>
        </form>
       <p className='text-center'>Join a fleet? <Link to='/captain-signup' className='text-blue-600'>Register as a Captain</Link>
        </p>
      </div>
      <div className="">
        <Link
          to='/User-login'
          className='bg-[#d5622d] flex items-center justify-center text-white font-semibold  mb-5 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base'>
            Sign in as User
        </Link>
        
      </div>
      <div> <p className="text-[14.5px] leading-tight text-gray-500">
            This site is protected by reCAPTCHA and the{" "}
            <span className="underline">Google Privacy Policy</span> and{" "}
            <span className="underline">Terms of Service apply</span>.
          </p></div>
    </div>
    </div>
  )
}

export default Captainlogin

//2.31.00