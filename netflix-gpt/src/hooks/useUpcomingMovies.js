import { addUpcomingMovies } from "../utils/movieSlice";
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { API_Options } from '../utils/constants';

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getUpcomingMovies = async () => {
      try {
        const data = await fetch(
          'https://api.themoviedb.org/3/movie/upcoming',
          API_Options
        );
        const json = await data.json();
        // console.log(json.results);
        dispatch(addUpcomingMovies(json.results));
      } catch (err) {
        console.error("Failed to fetch movies:", err);
      }
    };

    getUpcomingMovies();
  }, [dispatch]); 
};

export default useUpcomingMovies;