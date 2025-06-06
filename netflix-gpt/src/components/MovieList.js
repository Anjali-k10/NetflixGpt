
import MovieCard from './MovieCard';

const MovieList = ({title,movies}) => {
    // console.log(movies);
    
  return (
    <div className='px-6  text-white'>
        <h1 className='text-2xl font-semibold py-4'>{title}</h1>
      <div className='flex overflow-x-scroll scrollbar-hide'>
        <div className='flex '>
          {movies?.map(movie => (
  <MovieCard key={movie.id} movieId={movie.id} posterPath={movie.poster_path} />
))}
        </div> 
        </div>
    </div>
  )
}

export default MovieList;



