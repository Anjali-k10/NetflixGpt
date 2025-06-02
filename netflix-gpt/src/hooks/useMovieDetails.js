import { addMovieDetails, addNowPlayingMovies } from "../utils/movieSlice";
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { API_Options } from '../utils/constants';

const useMovieDetails = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        const data = await fetch(
        //   'https://api.themoviedb.org/3/movie/76600'
       " https://api.themoviedb.org/3/movie/{movie_id}",
          API_Options
        );
        const json = await data.json();
        console.log(json.results);
        dispatch(addMovieDetails(json.results));
      } catch (err) {
        console.error("Failed to fetch movies:", err);
      }
    };

    getMovieDetails();
  }, [dispatch]);
};

export default useMovieDetails;