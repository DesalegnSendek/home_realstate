import React, { useState } from 'react'
import home from '../assets/images/home.jpg';
import { Link } from 'react-router-dom';
import { OAuth } from '../components/OAuth';

export const ForgotPassword = () => {
const [email, setEmail] = useState("");

function onChange(e){
setEmail(e.target.value)
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
      <h1 className='text-3xl text-center mt-6 font-bold mb-6'>Forget Password</h1>
      <div className='flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto '> 
      <div className='flex'>
         <div className='md:w-[40%] lg:[30%] mb-12 md:mb-6'> 
            <img src={home} alt='home' className='w-full rounded-2xl'/>
         </div>

         <div className='w-full md:w-[50%] lg:[30%] ml-6 ' >
           <form>             
                <input
                 type='email'
                 placeholder='email address'
                 className='mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded
                 transition ease-in-out'
                 id='email'
                 value={email}
                onChange={onChange}/>                
                
                 <button className='bg-blue-700 rounded text-xl font-medium hover:bg-blue-900 transition-duration-200 ease-in-out  w-full'>SEND RESET PASSWORD</button>
            <div className='flex items-center my-4
             before:border-t before:flex-1 before:border-gray-300 
             after:border-t after:flex-1 after:border-gray-300'>
                <p className='text-center font-semibold mx-6'>Or</p>
            </div>
            {/* login with google icon */}
           <OAuth />

           <div className='mb-6   whitespace-nowrap text-sm sm:text-lg'>
              <p> Have an account?
                <Link to="/Sign-in" className='text-blue-600 hover:text-red-700 transition-duration-200 ease-in-out ml-5 text-xl'>sign in</Link>
               </p>
                <p>
                <Link to="/sign-up" className='text-blue-600 hover:text-blue-800 transition-duration-200 ease-in-out '>want to create an account?</Link>
                 </p>
             </div>

           </form>

            

         </div>
        
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

