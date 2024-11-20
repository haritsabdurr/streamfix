import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { baseUrl } from '../Utils/baseUrl';
import { apiKey } from '../Utils/apiKey';
import axios from 'axios';

export const Login = () => {
  const [firstPage, setFirstPage] = useState();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [amount, setAmount] = useState('100.000');

  const getFirstPage = () => {
    axios.get(`${baseUrl}/movie/popular?api_key=${apiKey}`).then((response) => {
      setFirstPage(response.data.page);
    });
  };

  const handleSubmit = () => {
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    localStorage.setItem('amount', amount);
  };

  useEffect(() => {
    getFirstPage();
  }, []);

  return (
    <form className='rounded-lg max-w-sm mx-auto py-8 mt-24 mb-72 sm:mb-48 xl:mb-80 bg-gray-900 justify-items-center'>
      <div className='mb-5'>
        <label
          for='email'
          className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
        >
          Username
        </label>
        <input
          //   type='email'
          //   id='email'
          value={username}
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div className='mb-5'>
        <label
          for='password'
          className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
        >
          Password
        </label>
        <input
          type='password'
          id='password'
          value={password}
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <Link to={`/page/${firstPage}`}>
        <button
          type='submit'
          className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          onClick={handleSubmit}
        >
          Submit
        </button>
      </Link>
    </form>
  );
};
