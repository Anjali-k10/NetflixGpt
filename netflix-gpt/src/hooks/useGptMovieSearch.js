import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_Options, TMDB_SEARCH_API } from "../utils/constants";
import geminiRunChat from "../utils/geminiRunChat";
import { addGptMovieResult } from "../utils/gptSlice";

const useGptMovieSearch = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const searchMovieTMDB = async (movie) => {
    const url = `${TMDB_SEARCH_API}${movie}&include_adult=false&language=en-US&page=1`;
    const data = await fetch(url, API_Options);
    const json = await data.json();
    return json.results;
  };

  const handleSearch = async () => {
    const query = searchText.current?.value?.trim();
    if (!query) return;

    setError("");
    setLoading(true);
    try {
      const prompt = `Act as a Movie Recommendation system. Suggest 5 movies based on: "${query}". Only respond with names of 5 movies, comma separated`;
      const response = await geminiRunChat(prompt);
      const movieArray = response.split(",").map((m) => m.trim());
      const tmdbResults = await Promise.all(movieArray.map(searchMovieTMDB));
      dispatch(addGptMovieResult({ movieNames: movieArray, movieResults: tmdbResults }));
    } catch (err) {
      setError("Something went wrong. Please try again.");
      console.error(err);
    }
    setLoading(false);
  };

  return {
    langKey,
    searchText,
    handleSearch,
    loading,
    error,
  };
};

export default useGptMovieSearch;
