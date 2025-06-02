
const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-full aspect-video pt-[20%] px-4 sm:px-8 md:px-16 absolute text-white bg-gradient-to-r from-black/80 via-black/60 to-transparent">
      <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold drop-shadow-lg">{title}</h1>
      <p className="py-4 text-sm sm:text-base md:text-lg max-w-md sm:max-w-lg md:max-w-xl drop-shadow-md">{overview}</p>
      <div className="mt-4 flex flex-wrap gap-4">
        <button className="bg-white text-sm sm:text-lg text-black py-2 px-6 sm:py-3 sm:px-10 rounded-lg hover:bg-opacity-80 transition duration-200 shadow-md">
          ▶ Play
        </button>
        <button className="bg-gray-700 bg-opacity-70 text-sm sm:text-lg text-white py-2 px-6 sm:py-3 sm:px-10 rounded-lg hover:bg-opacity-90 transition duration-200 shadow-md">
          ℹ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;

