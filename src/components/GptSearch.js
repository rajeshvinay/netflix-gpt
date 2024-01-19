import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BACKGROUND_IMAGE } from '../utils/constants'

const GptSearch = () => {
  return (
    <div>
        <div className='fixed -z-10'>
            <img className='sm:h-screen md:h-full sm:object-cover' src={BACKGROUND_IMAGE}
            alt='background'
            >
            </img>
        </div>
        <div className='pt-[30%] md:p-0'>
          <GptSearchBar/>
          <GptMovieSuggestions/>
        </div>
    </div>
  )
}

export default GptSearch