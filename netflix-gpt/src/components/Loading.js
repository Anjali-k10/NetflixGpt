import React from "react";

const Loading = () => {
  return (
    <div className="bg-black min-h-screen p-8 animate-pulse">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10">
        {/* Skeleton for poster */}
        <div className="w-full max-w-lg h-[400px] bg-gray-800 rounded-xl"></div>

        {/* Skeleton for text */}
        <div className="flex-1 space-y-4">
          <div className="h-10 bg-gray-700 rounded w-3/4"></div>
          <div className="h-5 bg-gray-600 rounded w-1/4"></div>

          <div className="flex gap-4 mt-4">
            <div className="h-5 bg-gray-700 rounded w-12"></div>
            <div className="h-5 bg-gray-700 rounded w-16"></div>
            <div className="h-5 bg-gray-700 rounded w-20"></div>
            <div className="h-5 bg-gray-700 rounded w-12"></div>
          </div>

          <div className="h-10 bg-gray-600 rounded w-32 mt-6"></div>
        </div>
      </div>

      {/* Skeleton for description */}
      <div className="max-w-6xl mx-auto mt-12 space-y-3">
        <div className="h-6 bg-gray-700 rounded w-1/3"></div>
        <div className="h-4 bg-gray-800 rounded"></div>
        <div className="h-4 bg-gray-800 rounded w-5/6"></div>
        <div className="h-4 bg-gray-800 rounded w-4/6"></div>
      </div>
    </div>
  );
};

export default Loading;
