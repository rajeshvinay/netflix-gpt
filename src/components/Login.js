import React, { useRef, useState } from 'react'
import Header from './Header'
import { ValidateData } from '../utils/validate'
import { createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/userSlics'

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [isSignInForm,setIsSignInForm] = useState(true)
    const [errorMsg,setErrorMsg] = useState(null)
    const email = useRef(null)
    const password = useRef(null)
    const name = useRef(null)
    const toggleSignInForm = ()=>{
        setIsSignInForm(!isSignInForm)
    }
    const handleButtonClick = () =>{
        let resp = ValidateData(email.current.value,password.current.value,name?.current?.value)
        setErrorMsg(resp)

        if(resp) return;

        if(!isSignInForm){
            createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
            .then(userCredential=>{
                const user = userCredential.user
                console.log(user)
                updateProfile(user, {
                    displayName: name.current.value, photoURL: ""
                  }).then(() => {
                    const {uid,displayName,email,refreshToken,photoURL} = auth.currentUser;
              dispatch(addUser({uid:uid,displayName:displayName,email:email,refreshToken:refreshToken,photoURL:photoURL}));
                    navigate('/browse')
                  }).catch((error) => {
                    setErrorMsg(error.message)
                  });
                
            })
            .catch(error=>{
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMsg(errorCode+'-'+errorMessage);
            })
        }else{
            signInWithEmailAndPassword(auth,email.current.value,password.current.value)
            .then(userCredential=>{
                const user = userCredential.user
                console.log(user)
                navigate('/browse')
            })
            .catch(error=>{
                console.log(error.message)
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMsg(errorCode+'-'+errorMessage)
            })
        }
    }
  return (
    <div>
        <Header/>
        <div className='absolute'>
            <img src='https://assets.nflxext.com/ffe/siteui/vlv3/c31c3123-3df7-4359-8b8c-475bd2d9925d/8ae38218-41c3-4396-b9af-15e97636a40f/US-en-20231225-popsignuptwoweeks-perspective_alpha_website_large.jpg'
            alt='background'
            >
            </img>
        </div>
        <form onSubmit={(e)=>e.preventDefault()} className='w-3/12 absolute my-36 bg-black p-12 text-white m-auto right-0 left-0 bg-opacity-90'>
            <h1 className='font-bold text-3xl py-3'>{isSignInForm? 'Sign In':'Sign Up'}</h1>
            {!isSignInForm && <input ref={name} type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700 '/>}
            <input ref={email} type='text' placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700 '/>
            <input ref={password} type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-700 '></input>
            <p className='text-red-500 py-4 font-bold'>{errorMsg}</p>
            <button className='p-4 my-6 bg-red-700 w-full rounded-lg' onClick={handleButtonClick}>{isSignInForm? 'Sign In':'Sign Up'}</button>
            <p className='py-4 font-bold cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? 'New to Netflix? Sign Up Now':'Already registered? Sign In Now.'}</p>
        </form>
    </div>
  )
}

export default Login