import { addTrendingMovies } from "../utils/movieSlice";
import { useDispatch,useSelector } from 'react-redux';
import { useEffect } from 'react';
import { API_Options } from '../utils/constants';

const useTrendingMovies = () => {
  const dispatch = useDispatch();
   const trendingMovies = useSelector((store)=>store.movies.trendingMovies)
  useEffect(() => {
    const getTrendingMovies = async () => {
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
   if (!trendingMovies || trendingMovies.length === 0) {
        getTrendingMovies(); 
    }
    
  }, [dispatch,trendingMovies]); 
};

export default useTrendingMovies;