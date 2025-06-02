import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IMG_CON_URL } from "../utils/constants";
import { addMovieDetails,clearMovieDetails } from "../utils/movieSlice";
import { API_Options } from "../utils/constants";
import Loading from "./Loading";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.movies.movieDetails);

  useEffect(() => {

    dispatch(clearMovieDetails());

    const getMovieDetails = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}`,
          API_Options
        );
        const json = await response.json();
        dispatch(addMovieDetails(json));
      } catch (err) {
        console.error("Failed to fetch movie details:", err);
      }
    };

    getMovieDetails();
  }, [movieId, dispatch]);

  if (!movie) return <Loading />;


  const {
    backdrop_path,
    title,
    release_date,
    runtime,
    original_language,
    genres,
    overview,
  } = movie;

  const releaseYear = new Date(release_date).getFullYear();
  const genreList = genres?.map((g) => g.name).join(" | ");

  return (
    <div className="bg-black text-white min-h-screen p-8 text-lg">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">

        <div className="flex flex-col md:flex-row gap-10 items-start">
          <img
            className="w-full max-w-lg rounded-xl object-cover shadow-lg"
            src={IMG_CON_URL + backdrop_path}
            alt="backdrop"
          />

          <div className="flex-1 flex flex-col justify-start gap-4">
            <h1 className="text-5xl font-extrabold">{title}</h1>
            <p className="text-lg text-blue-400 font-semibold">New Release</p>

            <div className="flex flex-wrap items-center gap-4 text-gray-400 text-lg">
              <span>{releaseYear}</span>
              <span className="border border-gray-500 rounded px-3 py-1 text-sm">
                U/A 16+
              </span>
              <span>
                {Math.floor(runtime / 60)}h {runtime % 60}m
              </span>
              <span>{original_language?.toUpperCase()}</span>
            </div>

            <button className="mt-4 w-max px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-300 text-lg font-semibold">
              ▶ Watch Now
            </button>
          </div>
        </div>

     
        <div className="m-4 text-xl text-gray-300 leading-relaxed max-w-6xl mx-auto">
          <div className="font-semibold text-white text-xl mb-2">{genreList}</div>
          <p>{overview}</p>
        </div>
      </div>
    </div>
  );
};
export default MovieDetailsPage;
