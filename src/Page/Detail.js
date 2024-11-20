import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { baseImgUrl, baseUrl } from '../Utils/baseUrl';
import { apiKey } from '../Utils/apiKey';
import { Breadcrumb } from '../Components/Breadcrumb';
import axios from 'axios';

export const Detail = () => {
  const [movieDetail, setMovieDetail] = useState([]);
  const [genre, setGenre] = useState([]);
  const [similar, setSimilar] = useState([]);
  const [price, setPrice] = useState();
  const { id } = useParams();

  const getMoviebyId = () => {
    axios.get(`${baseUrl}/movie/${id}?api_key=${apiKey}`).then((response) => {
      setMovieDetail(response.data);
      console.log(response.data);
      setGenre(response.data.genres);
      if (response.data.vote_average < 3) {
        setPrice('3.500');
      } else if (response.data.vote_average < 6) {
        setPrice('8.250');
      } else if (response.data.vote_average < 8) {
        setPrice('16.350');
      } else if (response.data.vote_average < 10) {
        setPrice('21.250');
      }
    });
  };

  const getSimilarMovie = () => {
    axios
      .get(`${baseUrl}/movie/${id}/similar?api_key=${apiKey}`)
      .then((response) => {
        setSimilar(response.data.results);
      });
  };

  const similarMovie = similar.slice(0, 4);

  useEffect(() => {
    getMoviebyId();
    getSimilarMovie();
  }, []);

  return (
    <div className='h-svh container max-w-screen-2xl px-6 mx-auto mt-6'>
      <Breadcrumb props={movieDetail} />
      <div className='sm:flex mt-4'>
        <img
          className='rounded-xl h-[32rem] w-[24rem]'
          src={`${baseImgUrl}/${movieDetail.poster_path}`}
          alt=''
        />
        <div className='mt-6 sm:ms-6'>
          <p className='text-center sm:text-left text-3xl sm:text-4xl font-bold'>
            {movieDetail.original_title}
          </p>
          <div className='flex items-center sm:justify-start justify-center'>
            <div className='me-2 flex items-center mt-2 justify-center sm:justify-normal'>
              <svg
                className='me-1'
                viewBox='0 0 1024 1024'
                fill='gold'
                height='1.2em'
                width='1.2em'
              >
                <path d='M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z' />
              </svg>
              <a href='#' className='text lg sm:text-xl font-medium'>
                {Number(movieDetail.vote_average).toFixed(1)}
              </a>
            </div>
            <p className='ms-2 text lg sm:text-xl font-medium mt-2'>
              Released at {movieDetail.release_date}
            </p>
          </div>
          <div className='grid grid-cols-2 gap-2 sm:flex sm:items-center sm:justify-start mt-4'>
            {genre.map((genre) => (
              <p className='w-32 flex items-center justify-center h-8 me-3 text-xs sm:text-sm font-medium text-white bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white'>
                {genre.name}
              </p>
            ))}
          </div>
          <div className='mt-4'>
            <p className='font-bold text-lg text-center sm:text-start'>
              Synopsis
            </p>
            <p className='text-justify sm:pe-32'>{movieDetail.overview}</p>
          </div>
          <div className='flex items-center justify-center sm:justify-start mt-4'>
            <p className='me-2 text-xl font-bold'>IDR {price}</p>
            <button
              type='button'
              className='ms-2 mt-2 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-3 py-1.5 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'
            >
              Purchase
            </button>
          </div>
          <hr className='my-4 h-1 2xl:w-[64rem] bg-gray-100 border-0 rounded dark:bg-gray-200' />
          <p className='font-bold text-lg text-center sm:text-start'>
            Similar Movies
          </p>
          <div className='grid grid-cols-1 sm:grid-cols-4 justify-items-center sm:justify-items-start'>
            {similarMovie.map((similarMovie) => (
              <div className='mt-4 w-64 sm:w-48 bg-white border border-gray-200 rounded-lg shadow'>
                <a href='#'>
                  <img
                    className='rounded-t-lg w-80 h-64'
                    src={`${baseImgUrl}/${similarMovie.poster_path}`}
                    alt=''
                  />
                </a>
                <div className='p-2'>
                  <a href='#'>
                    <h5 className='text-md text-center font-bold tracking-tight text-gray-900'>
                      {similarMovie.original_title} (
                      {String(similarMovie.release_date).substring(0, 4)})
                    </h5>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
