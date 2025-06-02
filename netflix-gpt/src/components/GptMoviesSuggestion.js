 import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMoviesSuggestion = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);
  if (!movieNames) return null;

  return (
    <div className="p-6 md:p-12 text-white space-y-8">
      {movieNames.map((movieName, index) => (
        <div
          key={movieName}
          className="bg-[rgba(17,18,20,0.8)] bg-opacity-90 backdrop-blur-sm rounded-xl shadow-lg p-6"
        >
          <MovieList title={movieName} movies={movieResults[index]} />
        </div>
      ))}
    </div>
  );
};

export default GptMoviesSuggestion; 

