import { addNowPlayingMovies } from "../utils/movieSlice";
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { API_Options } from '../utils/constants';

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getNowPlayingMovies = async () => {
      try {
        const data = await fetch(
          'https://api.themoviedb.org/4/account/6824bcbd0ad432815431533b/movie/recommendations?page=1&language=en-US',
          API_Options
        );
        const json = await data.json();
        console.log(json.results);
        dispatch(addNowPlayingMovies(json.results));
      } catch (err) {
        console.error("Failed to fetch movies:", err);
      }
    };

    getNowPlayingMovies(); // function defined + called inside useEffect
  }, [dispatch]); // ✅ only dispatch is a real dependency
};

export default useNowPlayingMovies;

