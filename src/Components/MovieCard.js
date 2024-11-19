import { baseImgUrl } from '../Utils/baseUrl';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const MovieCard = ({ props }) => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(min-width: 800px)');
    const listener = () => setIsDesktop(media.matches);
    listener();
    window.addEventListener('resize', listener);

    return () => window.removeEventListener('resize', listener);
  }, [isDesktop]);

  return (
    <div
      className='w-full sm:w-48 bg-white border border-gray-300 rounded-lg shadow '
      key={props.id}
    >
      <Link
        to={`/detail/${props.id}/${String(props.original_title).replace(
          /\s+/g,
          '-'
        )}`}
      >
        <a href='#'>
          <img
            className='rounded-t-lg w-96 h-96 sm:h-64'
            src={`${baseImgUrl}/${props.poster_path}`}
            alt={`${props.original_title} Poster`}
          />
        </a>
        <div className='p-5'>
          <h5 className='pb-4 sm:pb-0 sm:h-[64px] text-xl text-center font-bold tracking-tight text-gray-900'>
            {props.original_title}
          </h5>

          <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
          <div className='flex items-center justify-between'>
            <div className='flex items-center justify-center'>
              <svg
                className='me-1'
                viewBox='0 0 1024 1024'
                fill='gold'
                height='1em'
                width='1em'
              >
                <path d='M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z' />
              </svg>
              <a href='#'>{Number(props.vote_average).toFixed(1)}</a>
            </div>
            <a
              href='#'
              className='inline-flex items-center p-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            >
              {isDesktop ? <></> : <>Detail</>}
              <svg
                className={`${
                  isDesktop ? 'ms-0' : 'ms-2'
                } rtl:rotate-180 w-3.5 h-3.5 `}
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 14 10'
              >
                <path
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M1 5h12m0 0L9 1m4 4L9 9'
                />
              </svg>
            </a>
          </div>
        </div>
      </Link>
    </div>
  );
};
