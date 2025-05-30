import { addUpcomingMovies } from "../utils/movieSlice";
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { API_Options } from '../utils/constants';

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getNowPlayingMovies = async () => {
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

    getNowPlayingMovies(); // function defined + called inside useEffect
  }, [dispatch]); // ✅ only dispatch is a real dependency
};

export default useUpcomingMovies;