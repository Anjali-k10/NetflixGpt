// src/hooks/useMovieDetails.js
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addMovieDetails, clearMovieDetails } from "../utils/movieSlice";
import { API_Options } from "../utils/constants";

const useMovieDetails = (movieId) => {
  const dispatch = useDispatch();

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
};

export default useMovieDetails;

