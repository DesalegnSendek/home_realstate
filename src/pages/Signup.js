import { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import OAuth from "../components/OAuth.jsx";
import { getAuth,createUserWithEmailAndPassword,updateProfile, } from "firebase/auth";
import { db } from "../firebase";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import firebase from "firebase/app";
import 'firebase/firestore';



export const Signup = () => {
   const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({name: "",email: "",password: "",});
  const { name, email, password } = formData;
  const navigate = useNavigate();
  function onChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }
  async function onSubmit(e) {
    e.preventDefault();

    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(
        auth,email,password);

      updateProfile(auth.currentUser, {
        displayName: name,
      });
      const user = userCredential.user;
      const formDataCopy = { ...formData };
      delete formDataCopy.password;
      formDataCopy.timestamp = serverTimestamp();

      await setDoc(doc(db, "users", user.uid), formDataCopy);
      // toast.success("Sign up was successful");
      // navigate("/");
    } catch (error) {
     // toast.error("Something went wrong with the registration");
    }
  }

  return (
    <>
    <section>
      <h1 className='text-3xl text-center mt-6 font-bold mb-6'>Sign Up</h1>
      <div className='flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto '> 
      <div className='flex'>
         <div className='md:w-[40%] lg: [30%] mb-12 md:mb-6'> 
            <img src={""} alt='home' className='w-full rounded-2xl'/>
         </div>

         <div className='w-full md:w-[50%] lg:[30%] ml-6 ' >
         <form onSubmit={onSubmit}> 
             <input
                type='name'
                placeholder='user name'
                className='mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded
                transition ease-in-out'
                id='username'                 
                onChange={onChange}/>

                <input
                 type='email'
                 placeholder='email address'
                 className='mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded
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

                 <button className='bg-blue-700 rounded text-xl font-medium hover:bg-blue-900 transition-duration-200 ease-in-out  w-full'>Sign up</button>
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
                <Link to="/forgot-password" className='text-blue-600 hover:text-blue-800 transition-duration-200 ease-in-out '>forgot password?</Link>
                 </p>
             </div>
         </form>              
         </div>
      </div>     
    </div>
    </section>
    </>

  )
}