import React from 'react'
import Header from './Header'

const Login = () => {
  return (
    <div>
        <Header/>
        <div className='absolute'>
            <img src='https://assets.nflxext.com/ffe/siteui/vlv3/c31c3123-3df7-4359-8b8c-475bd2d9925d/8ae38218-41c3-4396-b9af-15e97636a40f/US-en-20231225-popsignuptwoweeks-perspective_alpha_website_large.jpg'
            alt='background'
            >
            </img>
        </div>
        <form className='w-3/12 absolute my-36 bg-black p-12 text-white m-auto right-0 left-0 bg-opacity-90'>
            <h1 className='font-bold text-3xl py-3'>Sign In</h1>
            <input type='text' placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700 '/>
            <input type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-700 '></input>
            <button className='p-4 my-6 bg-red-700 w-full rounded-lg'>Sign In</button>
            <p>New to Netflix? Sign Up Now</p>
        </form>
    </div>
  )
}

export default Login