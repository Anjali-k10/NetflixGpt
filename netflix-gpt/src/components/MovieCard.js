import React from 'react'
import { IMG_CON_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-36 pr-4'>
      <img alt="Movie Card" src={IMG_CON_URL + posterPath } ></img>
    </div>
  )
}

export default MovieCard
