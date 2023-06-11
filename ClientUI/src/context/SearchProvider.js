import React, { createContext, useContext } from "react";
import { useSearchParams } from "react-router-dom";

const SearchContext = createContext();

export const useSearch = () => useContext(SearchContext);

export default function SearchProvider({ children }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const setSearchParam = (key, value) => {
    setSearchParams((prevSearchParams) => {
      const params = new URLSearchParams(prevSearchParams);
      params.set(key, value);
      return params;
    });
  };

  const deleteSearchParam = (key) => {
    setSearchParams((prevSearchParams) => {
      const params = new URLSearchParams(prevSearchParams);
      params.delete(key);
      return params;
    });
  };
  const deleteSearchParamByKeyValue = (key, value) => {
    setSearchParams((prevSearchParams) => {
      const params = new URLSearchParams(prevSearchParams);
  
      // Iterate over each key-value pair and delete the matching one
      for (const [paramKey, paramValue] of params.entries()) {
        if (paramKey === key && paramValue === value) {
          params.delete(paramKey);
          break; // Stop iterating after deleting the first match
        }
      }
  
      return params;
    });
  };

  const clearSearch = () => {
    setSearchParams(new URLSearchParams());
  };

  const getAllSearchParams = () => {
    const params = {};
    for (const [key, value] of searchParams.entries()) {
      params[key] = value;
    }
    return params;
  };

  const getAllSearchKeys = () => {
    return Array.from(searchParams.keys());
  };
  const isSearchParamExists = (key, value) => {
    const paramValue = searchParams.get(key);
    return paramValue !== null && paramValue === value;
  };
  const searchContextValue = {
    setSearchParam,
    deleteSearchParam,
    deleteSearchParamByKeyValue,
    clearSearch,
    searchParams,
    getAllSearchParams,
    getAllSearchKeys,
    isSearchParamExists,
  };

  return (
    <SearchContext.Provider value={searchContextValue}>
      {children}
    </SearchContext.Provider>
  );
}
