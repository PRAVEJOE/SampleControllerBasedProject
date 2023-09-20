import { useState, useEffect, useRef } from 'react';
import MovieListModel from '../Models/MoviesListModel.jsx';
import axios from 'axios';

const useMovieController = () => {
  const [movieList, setMovieList] = useState([]);
  const [savedList, setSavedList] = useState([]);
  const [lastMovieName, setLastMovieName] = useState('Money');
  const [isDataFetched, setIsDataFetched] = useState(false);
  const [isloader, setLoader] = useState(false);

  const getMovieList = async () => {
    try {
        setLoader(true);
      if (!isDataFetched) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        console.log("API CALL");
        const updatedMovieList = response.data.map((userData) => {
          setLastMovieName(userData.title);
          return { ...MovieListModel, ...userData };
        });
        setMovieList(updatedMovieList);
        setIsDataFetched(true);
      }
      return movieList;
    } catch (error) {
      console.error('Error fetching Movie data:', error);
      return [];
    }finally{
        setLoader(false);
    }
  };


  
  const saveApi = () => {
        // Implement the logic to save data here.
    console.log(savedList);
  };


  return {
    movieList,
    savedList,
    lastMovieName,
    isDataFetched,
    getMovieList,
    saveApi,
    isloader,
    setSavedList
  };
};

export default useMovieController;
