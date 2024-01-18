import React, { useRef } from 'react'
import lang from '../utils/languageConstants'
import { useDispatch, useSelector } from 'react-redux'
import openai from '../utils/openai'
import { API_OPTIONS } from '../utils/apiTokens'
import { addGPTMovieResponse } from '../utils/gptSlice'

const GptSearchBar = () => {
  const language = useSelector(state=>state.config.language)
  const dispatch = useDispatch()

  const searchText  = useRef(null)

  const getIndividualMovieResult =async (movie)=>{
    const result = await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1', API_OPTIONS)
    const json = await result.json()
    return json?.results
  }

  const handleGPTSearchClick =async ()=>{
    console.log(searchText.current.value)
    const gptQuery = "Act as a movie recommendation system and suggest some movies for the query : "+searchText.current.value+". only give me names of 5 movies, comma seperated like the example given ahead. Example: Breaking Bad, Better Call Saul, El Camino, Chernobyl, Prison Break."
    const chatCompletion = await openai.chat.completions.create({
        messages:[{role:'user',content:gptQuery}],
        model:'gpt-3.5-turbo'
    })
    console.log(chatCompletion.choices[0].message)

    const gptMovies = chatCompletion?.choices[0].message?.content?.split(',')

    const moviePromiseArray = gptMovies.map(movie=>getIndividualMovieResult(movie))

    const movieResponses = await Promise.all(moviePromiseArray);
    dispatch(addGPTMovieResponse({movieNames:gptMovies, movieResults: movieResponses}))    
    console.log(movieResponses)
  }
  return (
    <div className='pt-[10%] flex justify-center'>
        <form className='bg-black w-1/2 grid grid-cols-12' onSubmit={(e)=>e.preventDefault()}>
            <input ref={searchText} type='text' className='p-4 m-4 col-span-9' placeholder={lang[language]?.searchPlaceholder}></input>
            <button className='py-2 px-4 m-4 col-span-3 bg-red-700 text-white rounded-lg' onClick={handleGPTSearchClick}>{lang[language]?.search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar