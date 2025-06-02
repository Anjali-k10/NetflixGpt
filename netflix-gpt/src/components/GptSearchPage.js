
import GptSearchBar from './GptSearchBar';
import GptMoviesSuggestion from './GptMoviesSuggestion';
import { backgroundImg } from '../utils/constants';
import { useSelector } from 'react-redux';

const GptSearchPage = () => {
  const gptMovies = useSelector((store) => store.gpt.movieResults);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {!gptMovies || gptMovies.length === 0 ? (
        <img
          src={backgroundImg}
          alt="background"
          className="absolute top-0 left-0 w-full h-full object-cover  -z-20"
        />
      ) : (
        <div className="absolute top-0 left-0 w-full h-full grid grid-cols-3 grid-rows-3 gap-0 -z-20">
          {[...Array(9)].map((_, i) => (
            <img
              key={i}
              src={backgroundImg}
              alt="background"
              className="w-full h-full object-cover "
            />
          ))}
        </div>
      )}

      {/* Foreground */}
      <div className="relative z-10">
        <GptSearchBar />
        <GptMoviesSuggestion />
      </div>
    </div>
  );
};

export default GptSearchPage;