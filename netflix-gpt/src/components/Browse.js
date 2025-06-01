import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useTrendingMovies from "../hooks/useTrendingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GptSearch from "./GptSearchPage";
import { useSelector } from "react-redux";

function Browse() {
  const showGptSearch = useSelector(store=>store.gpt.showGptSearch);


  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  useTrendingMovies();
 
  return (
  <div>
    <div className="flex flex-col w-screen">
    <Header />
    {
      showGptSearch? ( <GptSearch/>):( 
      <>
         <MainContainer />
      <SecondaryContainer />
      </>
      ) }
  
    
    </div>
  </div>
);

}

export default Browse;










