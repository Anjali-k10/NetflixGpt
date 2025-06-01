import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMoviesSuggestion from './GptMoviesSuggestion'
import { backgroundImg } from '../utils/constants'

const GptSearchPage = () => {
  return ( 
    <div>
      <div className='absolute -z-10'>
        <img className='' src={backgroundImg} alt='background'></img>
      </div>
      <GptSearchBar/>
      <GptMoviesSuggestion/>
    </div>
  )
}

export default GptSearchPage
