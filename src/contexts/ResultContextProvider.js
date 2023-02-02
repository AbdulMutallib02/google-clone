import React,{ createContext, useContext, useState } from 'react';

const ResultContext = createContext(); //Creating useContext Hook
const baseUrl="'https://google-search72.p.rapidapi.com/search'"

export const ResultContextProvider = ({ children }) => {
    const [result, setResult] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const getResults = async (type) => {
        setIsLoading(true);

        const response = await fetch(`${baseUrl}${type}`, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'ccab6f5f94mshc51b0db47fed16dp1f22bajsn82b0f0318960',
    'X-RapidAPI-Host': 'google-search72.p.rapidapi.com'
            }
        });

        const data= await response.json();
        setResult(data);
        setIsLoading(false);
    }

  return (
    //useContext Provider
    <ResultContext.Provider value={{ getResults, result, searchTerm, setSearchTerm, isLoading }}>
        {children}
    </ResultContext.Provider>
  )
}

export const useResultContext = () => useContext(ResultContext);