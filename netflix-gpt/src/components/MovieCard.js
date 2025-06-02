import React from 'react';
import { IMG_CON_URL } from '../utils/constants';
import { useNavigate } from 'react-router-dom';

const MovieCard = ({ posterPath, movieId }) => {
  const navigate = useNavigate();

  if (!posterPath) return null;

  const handleClick = () => {
    console.log(movieId,posterPath);
    navigate(`/moviedetails/${movieId}`);
  };

  return (
    <div className='w-36 pr-4 cursor-pointer' onClick={handleClick}>
      <img alt="Movie Card" src={IMG_CON_URL + posterPath} />
    </div>
  );
};

export default MovieCard;
