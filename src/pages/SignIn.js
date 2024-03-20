import React, { useState } from 'react'
import home from '../assets/images/home.jpg';
import { AiFillEyeInvisible, AiFillEye  } from "react-icons/ai"
import { Link } from 'react-router-dom';

export const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
const [FormData, setFormData] = useState({
  email:"",
  password:"",
});
const {email, password} = FormData;

function onChange(e){
setFormData((prevState)=>({
  ...prevState,
  [e.target.id]: e.target.value,
  [e.target.password]: e.target.password,

}));
}

const [num, setnum] = useState(0);
function increase(){
  setnum(prev=>prev+1);
}

function decrease(){
   setnum(prev=>prev-1);
}

  return (
    <>
    <section>
      <h1 className='text-3xl text-center mt-6 font-bold mb-6'>Sign in</h1>
      <div className='flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto '> 
         
         <div className='md:w-[40%] lg:[30%] mb-12 md:mb-6'> 
            <img src={home} alt='home' className='w-full rounded-2xl'/>
         </div>

         <div className='w-full md:w-[20%] lg:[20%] lg:ml-20' >
           <form>              
                  <input
                   type='email'
                   placeholder='email address'
                   className='mb-6 w-full px-4 py-2 text-xl mb-5 text-gray-700 bg-white border-gray-300 rounded
                   transition ease-in-out'
                   id='email'
                   value={email}
                   onChange={onChange}/>            
              
                <div className='relative mb-6'>
                  <input
                    type={showPassword? "text":"password"}
                    placeholder='password'
                    className='w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded
                    transition ease-in-out'
                    id='password'
                    value={password}
                    onChange={onChange}/> 

                    {showPassword? (
                      <AiFillEyeInvisible className='absolute right-3 top-3 text-xl cursor-pointer'
                        onClick={()=>setShowPassword((prevState)=>!prevState)}
                      />
                    ): (<AiFillEye className='absolute right-3 top-3 text-xl cursor-pointer'
                        onClick={()=>setShowPassword((prevState)=>!prevState)}
                    />)}
                </div>   


                 <div className='mb-6 whitespace-nowrap text-sm sm:text-lg'>
                      <p> Don/t have an account?
                        <Link to="/Sign-up" className='text-red-600 hover:text-red-700 transition-duration-200 ease-in-out ml-2'>Register</Link>
                      </p>
                      <p>
                        <Link to="/forgot-password" className='text-blue-600 hover:text-blue-800 transition-duration-200 ease-in-out '>Forgot Password?</Link>
                      </p>
                 </div>
           </form>
         </div>
        
      </div>     
    
    </section>

   
        <button        
        onClick={increase}>Increase</button>

         <button >{num}</button>

        <button 
        onClick={decrease}>Decrease</button>

    </>

  )
}
