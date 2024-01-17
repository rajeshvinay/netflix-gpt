import React, { useRef } from 'react'
import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux'
import openai from '../utils/openai'

const GptSearchBar = () => {
  const language = useSelector(state=>state.config.language)

  const searchText  = useRef(null)
  const handleGPTSearchClick =async ()=>{
    console.log(searchText.current.value)
    const gptQuery = "Act as a movie recommendation system and suggest some movies for the query : "+searchText.current.value+". only give me names of 5 movies, comma seperated like the example given ahead. Example: Breaking Bad, Better Call Saul, El Camino, Chernobyl, Prison Break."
    const chatCompletion = await openai.chat.completions.create({
        messages:[{role:'user',content:gptQuery}],
        model:'gpt-3.5-turbo'
    })
    console.log(chatCompletion.choices[0].message)
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