import React from 'react'
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc'

export const OAuth = () => {
  return (
        <button className='flex bg-red-700 rounded text-xl font-medium items-center justify-center w-full text-white px-7 py-3 uppercase hover:bg-red-900'>
        <FcGoogle/> <Link to="/sign-up">Continue with Google</Link></button>
  )
}
