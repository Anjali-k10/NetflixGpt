import { addPopularMovies } from "../utils/movieSlice";
import { useDispatch ,useSelector} from 'react-redux';
import { useEffect } from 'react';
import { API_Options } from '../utils/constants';

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector((store)=>store.movies.popularMovies)
  useEffect(() => {
    const getPopularMovies = async () => {
      try {
        const data = await fetch(
          'https://api.themoviedb.org/3/movie/popular',
          API_Options
        );
        const json = await data.json();
        // console.log(json.results);
        dispatch(addPopularMovies(json.results));
      } catch (err) {
        console.error("Failed to fetch movies:", err);
      }
    };
    if (!popularMovies || popularMovies.length === 0) {
        getPopularMovies();
    }
  
  }, [dispatch,popularMovies]); 
};

export default usePopularMovies;