    import React from "react";
import lang from "../utils/langConst";
import useGptMovieSearch from "../hooks/useGptMovieSearch";

const GptSearchBar = () => {
  const { langKey, searchText, handleSearch, loading, error } =
    useGptMovieSearch();

  return (
    <div className="pt-[10%] flex flex-col items-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch();
        }}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          type="submit"
          className="col-span-3 m-4 py-2 px-4 text-lg bg-red-700 text-white rounded-lg 
             hover:bg-red-800 active:scale-95 transition transform duration-150 disabled:opacity-60"
          disabled={loading}
        >
          {loading ? "Searching..." : lang[langKey].search}
        </button>
      </form>

      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default GptSearchBar;  


