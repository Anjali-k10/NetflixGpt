import { addNowPlayingMovies } from "../utils/movieSlice";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { API_Options } from '../utils/constants';

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector((store)=>store.movies.nowPlayingMovies)
  useEffect(() => {
   
    const getNowPlayingMovies = async () => {
      try {
        const data = await fetch(
          // 'https://api.themoviedb.org/3/movie/now_playing',
          'https://api.themoviedb.org/4/account/6824bcbd0ad432815431533b/movie/recommendations?page=1&language=en-US',
          API_Options
        );
        const json = await data.json();
        // console.log(json.results);
        dispatch(addNowPlayingMovies(json.results));
      } catch (err) {
        console.error("Failed to fetch movies:", err);
      }
    };

    !nowPlayingMovies && getNowPlayingMovies();
    
  }, [dispatch,nowPlayingMovies]);
};

export default useNowPlayingMovies;
