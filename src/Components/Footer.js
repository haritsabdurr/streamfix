import React from 'react';

export const Footer = () => {
  return (
    <footer className='bg-white border-gray-200 dark:bg-gray-900 mt-6'>
      <div className='container max-w-screen-2xl px-6 mx-auto p-4'>
        <div className='sm:flex sm:items-center sm:justify-between mt-2'>
          <p className='text-center sm:text-start text-md sm:text-2xl font-semibold whitespace-nowrap dark:text-white'>
            Streamfix {''}
            <span className='text-xs sm:text-sm'>by Abdurrahman</span>
          </p>
        </div>
        <hr className='my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8' />
        <p className='text-center sm:text-start text-xs sm:text-sm text-gray-500 dark:text-gray-400'>
          © 2024 Abdurrahman Al-Harits . All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};
