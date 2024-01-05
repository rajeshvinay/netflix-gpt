import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlics';


const Body = () => {

    const dispatch  = useDispatch()

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
              const {uid,displayName,email,refreshToken,photoURL} = user;
              dispatch(addUser({uid:uid,displayName:displayName,email:email,refreshToken:refreshToken,photoURL:photoURL}));
              // ...
            } else {
              // User is signed out
              // ...
              dispatch(removeUser());
            }
          });
    },[])

    const appRouter = createBrowserRouter([
        {
            path:'/',
            element:<Login/>
        },
        {
            path:'/browse',
            element:<Browse/>
        }
    ])

  return (
        <>
           <RouterProvider router={appRouter}></RouterProvider>
        </>
  )
}

export default Body