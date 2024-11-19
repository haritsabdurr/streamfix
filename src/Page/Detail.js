import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { baseImgUrl, baseUrl } from '../Utils/baseUrl';
import { apiKey } from '../Utils/apiKey';
import axios from 'axios';
import { Breadcrumb } from '../Components/Breadcrumb';

export const Detail = () => {
  const [movieDetail, setMovieDetail] = useState([]);
  const { id } = useParams();
  const { original_title } = useParams();

  const getMoviebyId = () => {
    axios.get(`${baseUrl}/movie/${id}?api_key=${apiKey}`).then((response) => {
      setMovieDetail(response.data);
      console.log(response.data);
    });
  };

  useEffect(() => {
    getMoviebyId();
  }, []);

  return (
    <div className='container max-w-screen-2xl px-6 mx-auto mt-6'>
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
          <div className='flex items-center mt-2 justify-center sm:justify-normal'>
            <svg
              className='me-1'
              viewBox='0 0 1024 1024'
              fill='gold'
              height='1.2em'
              width='1.2em'
            >
              <path d='M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z' />
            </svg>
            <a href='#' className='text-xl font-medium'>
              {Number(movieDetail.vote_average).toFixed(1)}
            </a>
          </div>
          <p className='mt-6'>
            Synopsis : <br />
            {movieDetail.overview}
          </p>
        </div>
      </div>
    </div>
  );
};
