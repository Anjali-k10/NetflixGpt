import React from 'react';
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';
import { useSelector } from 'react-redux';

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies || movies.length === 0) return null; // ✅ Safely handle empty array

  const mainMovie = movies[0];
  if (!mainMovie) return null;

  const { original_title, overview } = mainMovie;

  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground />
    </div>
  );
};

export default MainContainer;

