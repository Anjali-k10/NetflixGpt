import  { useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { API_Options } from '../utils/constants'
import { addTrailerVideo } from '../utils/movieSlice';

const useMovieTrailer = () => {
    const dispatch = useDispatch();
  // const {trailerId,setTrailerId}=useState(null);
  const getMovieVideos=async()=>{
    const data = await fetch("https://api.themoviedb.org/3/movie/76600/videos",API_Options)
   const json =await data.json();
  //  console.log(json);
   const filterData=json.results.filter(video=>video.type==="Trailer");
  //  console.log(filterData);
   const trailer = filterData.length?filterData[0]:json.result[0];
  //  console.log(trailer)
  //  setTrailerId(trailer.key);
  dispatch(addTrailerVideo(trailer));

  };
  useEffect(()=>{
    getMovieVideos();
  },[]);
}

export default useMovieTrailer
