import { addTrendingMovies } from "../utils/movieSlice";
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { API_Options } from '../utils/constants';

const useTrendingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getNowPlayingMovies = async () => {
      try {
        const data = await fetch(
          'https://api.themoviedb.org/3/movie/top_rated',
          API_Options
        );
        const json = await data.json();
        // console.log(json.results);
        dispatch(addTrendingMovies(json.results));
      } catch (err) {
        console.error("Failed to fetch movies:", err);
      }
    };

    getNowPlayingMovies(); 
  }, [dispatch]); 
};

export default useTrendingMovies;