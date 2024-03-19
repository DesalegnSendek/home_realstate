import React, { useState } from 'react'
import home from '../assets/images/home.jpg';


export const SignIn = () => {
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

  return (
    <section>
      <h1 className='text-3xl text-center mt-6 font-bold mb-6'>Sign in</h1>
      <div className='flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto '> 
         
         <div className='md:w-[40%] lg:[30%] mb-12 md:mb-6'> 
            <img src={home} alt='home' className='w-full rounded-2xl'/>
         </div>

         <div className='w-full md:w-[20%] lg:[20%] lg:ml-20' >
           <form>
              <label>Email
                  <input type='email' placeholder='email' className='w-full' id='email'
                  value={email} onChange={onChange}/>
              </label>
              <label>Password 
                 <input type='password' placeholder="password"/>
              </label>
              <button className='bg-500-green'>Sign in</button>
           </form>
         </div>

      </div>

    </section>
  )
}
