import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { useResultContext } from '../contexts/ResultContextProvider';
import Loading from './Loading';

const Result = () => {
  const { result, isLoading, getResult, searchTerm } = useResultContext;
  const location = useLocation();
  if (isLoading) return <Loading />

  switch (location.pathname) {
    case '/search':
        return "search"
  
    default:
      return "ERROR!"
  }
}

export default Result