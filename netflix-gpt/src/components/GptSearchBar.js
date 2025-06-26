import React from "react";
import lang from "../utils/langConst";
import useGptMovieSearch from "../hooks/useGptMovieSearch";

const GptSearchBar = () => {
  const { langKey, searchText, handleSearch, loading, error } =
    useGptMovieSearch();

  return (
    <div className="pt-[10%] flex flex-col items-center px-4">
      <form
        className="w-full max-w-3xl bg-black flex flex-row items-center gap-2 p-2"
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch();
        }}
      >
        <input
          ref={searchText}
          type="text"
          className="flex-grow h-12 px-4 text-base rounded"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          type="submit"
          className="h-12 px-4 text-lg bg-red-700 text-white rounded-lg 
            hover:bg-red-800 active:scale-95 transition transform duration-150 disabled:opacity-60 whitespace-nowrap"
          disabled={loading}
        >
          {loading ? "Searching..." : lang[langKey].search}
        </button>
      </form>

      {error && <p className="text-red-500 mt-2 text-center">{error}</p>}
    </div>
  );
};

export default GptSearchBar;



