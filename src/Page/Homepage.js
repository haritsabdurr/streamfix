import { useState, useEffect } from 'react';
import { baseUrl } from '../Utils/baseUrl';
import { apiKey } from '../Utils/apiKey';
import { MovieCard } from '../Components/MovieCard';
import { Breadcrumb } from '../Components/Breadcrumb';
import axios from 'axios';

export const Homepage = () => {
  const [movieData, setMovieData] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  const getAllMovieData = () => {
    axios.get(`${baseUrl}/movie/popular?api_key=${apiKey}`).then((response) => {
      setMovieData(response.data.results);
      console.log(response.data.results);
    });
  };

  useEffect(() => {
    getAllMovieData();
  }, []);

  return (
    <div>
      <div className='container mx-auto px-6'>
        <Breadcrumb props={movieData} />
        <div className='grid grid-cols-1 sm:grid-cols-6 2xl:grid-cols-7 gap-4 px-2 mt-4'>
          {movieData.map((movie) => (
            <MovieCard props={movie} />
          ))}
        </div>
      </div>
      <div className='flex items-center justify-center my-6'>
        <p className='w-32 flex items-center justify-center px-4 h-10 me-3 text-base font-medium text-white bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white'>
          Previous
        </p>
        <p className='w-32 flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white'>
          Next
        </p>
      </div>
    </div>
  );
};
