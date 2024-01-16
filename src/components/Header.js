import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlics';
import { LOGO, USER_AVATAR } from '../utils/constants';
import { toggleGPTAction } from '../utils/gptSlice';

const Header = () => {
  const dispatch = useDispatch()
  const user = useSelector(state=>state.user)
  const gptUI = useSelector(state=>state.gpt)
  const navigate = useNavigate()
  const handleSignOut = () =>{
    signOut(auth).then(() => {
      // navigate('/')
    }).catch((error) => {
      
    });
  }
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const {uid,displayName,email,refreshToken,photoURL} = user;
          dispatch(addUser({uid:uid,displayName:displayName,email:email,refreshToken:refreshToken,photoURL:photoURL}));
          // ...
          navigate('/browse')
        } else {
          // User is signed out
          // ...
          dispatch(removeUser());
          navigate('/')
        }
      });
    return () =>{
      unsubscribe()
    }
},[])

const handleGPTSearch = ()=>{
  dispatch(toggleGPTAction())
}
  return (
    <div className='absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between' 
    
    // style={{background:'#067d7d',backgroundImage:'linear-gradient(to top, var(--tw-gradient-stops))'}}
    >
        <img
            className='w-44'
            src={LOGO}
            alt='netflix-logo'
        ></img>
        {user &&<div className='flex p-2'>
          <button className='py-2 px-4 mx-4 my-2 text-white bg-purple-800 rounded-lg' onClick={handleGPTSearch}> {gptUI?.toggleGPT?"Back to Browse Page":"GPT Search"}</button>
          <span>{user.displayName}</span>
          <img className='h-12 w-12 mx-2 mt-1' src={USER_AVATAR} alt='usericon'></img>
           <button className='text-white font-bold' onClick={handleSignOut}>(Sign Out)</button>
        </div>}
    </div>
  )
}

export default Header