import useBrowse from "../hooks/useBrowse";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import { useSelector } from "react-redux";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useTrendingMovies from "../hooks/useTrendingMovies";
// import { API_Options } from '../utils/constants';

function Browse() {
  const user = useSelector((store) => store.user);

  const { handleSignOut } = useBrowse();
  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  useTrendingMovies();

  return (
    <div>
      <div className="flex justify-between ">
        <div className="w-3/4 h-4">
          <Header />
        </div>
        {user && (
          <div className=" z-10">
            <img
              className="h-12 mx-2 mt-4 mr-8"
              src={user?.photoUrl}
              alt="Profile"
            />
            <button
              className="bg-red-700 mt-2 rounded-md w-16 text-white"
              onClick={handleSignOut}
              type="button"
            >
              Log out
            </button>
          </div>
        )}
      </div>
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
}

export default Browse;
