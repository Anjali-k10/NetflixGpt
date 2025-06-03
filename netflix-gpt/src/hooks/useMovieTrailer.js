import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { API_Options } from '../utils/constants';
import { addTrailerVideo } from '../utils/movieSlice';

const useMovieTrailer = () => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  useEffect(() => {
    const getMovieVideos = async () => {
      try {
        const data = await fetch("https://api.themoviedb.org/3/movie/76600/videos", API_Options);
        const json = await data.json();

        const filterData = json.results?.filter((video) => video.type === "Trailer");
        const trailer = filterData.length ? filterData[0] : json.results?.[0];

        if (trailer) dispatch(addTrailerVideo(trailer));
      } catch (err) {
        console.error("Failed to fetch trailer:", err);
      }
    };

    if (!trailerVideo) {
      getMovieVideos();
    }
  }, [trailerVideo, dispatch]);
};

export default useMovieTrailer;
