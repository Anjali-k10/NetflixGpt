import { addUpcomingMovies } from "../utils/movieSlice";
import { useDispatch,useSelector } from 'react-redux';
import { useEffect } from 'react';
import { API_Options } from '../utils/constants';

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
   const upcomingMovies = useSelector((store)=>store.movies.upcomingMovies)
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
  if (!upcomingMovies || upcomingMovies.length === 0) {
      
        getUpcomingMovies();
    }
  }, [dispatch,upcomingMovies]); 
};

export default useUpcomingMovies;