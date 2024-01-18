import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BACKGROUND_IMAGE } from '../utils/constants'

const GptSearch = () => {
  return (
    <div>
        <div className='fixed -z-10'>
            <img src={BACKGROUND_IMAGE}
            alt='background'
            >
            </img>
        </div>
        <GptSearchBar/>
        <GptMovieSuggestions/>
    </div>
  )
}

export default GptSearch