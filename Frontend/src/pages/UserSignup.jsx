import React, { useState }  from 'react';
import { Link } from "react-router-dom";
import logow from "./logow.png";



const UserSignup = () => {

  const[email, setEmail] =useState('')
  const [ password, setPassword ] = useState('')
  const [ firstName, setFirstName ] = useState('')
  const [ lastName, setLastName ] = useState('')
  
  const [userData, setUserData] = useState({})
  const SubmitHandler = async (e) => {
    e.preventDefault();
    
    setUserData({
     fullName:{
        firstName: firstName,
        lastName: lastName  
     },
     password: password,
     email: email

    })

    console.log(userData);
    setEmail('')
    setFirstName('')
    setLastName('')
    setPassword('')
  }
  
  
  return (
    <div>
      <div className='p-7 h-screen flex flex-col justify-between'>
      {/* This is the UserLogin component */}
      <div>
        <img className="w-16 mb-10" src={logow} alt="Logo" />
        <form onSubmit={(e) => {
           SubmitHandler(e)
        }}>


          <h3 className="text-lg font-medium mb-2"> What's your name</h3>

          <div className='flex gap-4 mb-5'>
            <input
            required
            className="bg-[#eeeeee]  rounded-lg px-4 py-2 border border-gray-300 w-1/2 text-lg placeholder:text-base"
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
           />
           <input
            required
            className="bg-[#eeeeee]  rounded-lg px-4 py-2 border border-gray-300 w-1/2 text-lg placeholder:text-base"
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          </div>
          
          <h3 className="text-lg font-medium mb-2">What's your email</h3>
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#eeeeee] mb-5 rounded-lg px-4 py-2 border border-gray-300 w-full text-lg placeholder:text-base"
            type="email"
            placeholder="email@example.com"
          />
          <h3 className="text-lg font-medium mb-2">Enter Password</h3>
          <input
            
           
            className="bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border border-gray-300 w-full text-lg placeholder:text-base"
            required type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="bg-[#111] text-white font-semibold mb-5 rounded-lg px-4 py-2 w-full text-lg"
          >
            Login
          </button>
        </form>
        <p className="text-center mb-3 ">
          Already have a account?{" "}
          <Link to="/User-login" className="text-blue-600 mb-3 ">
            Login here
          </Link>
        </p>
      </div>
      <div>
          <p className='text-[14.5px] leading-tight text-gray-500'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy
            Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
        </div>
    
    
      </div>
    
    
    </div>
  )



}

export default UserSignup;