import React, { createContext, useContext, useState, useEffect } from 'react'
import { GlobalContext } from './GlobalContext';

const Context = createContext();

function ContextProvider({ children }) {
  const [ fullTime, setFullTime ] = useState(false);
  const [ location, setLocation ] = useState("");

  const [selectCity, setSelectCity] = useState(null);

  const { dispatch } = useContext(GlobalContext)


  const cities = [
      { id: 1, name: "New York" },
      { id: 2, name: "San Francisco" },
      { id: 3, name: "Berlin" },
      { id: 4, name: "London" }
  ];

  const handleCity = (city) => {
    if (selectCity && city.id === selectCity.id) {
      setSelectCity(null);
      dispatch({ type: "LOCATION", value: "" })
    } else {
      setSelectCity(city);  
      dispatch({ type: "LOCATION", value: city.name })
    }
  };

  const handleKeyLocation = (e) => {
      if (e.key === "Enter") {
        setSelectCity(null);
        dispatch({ type: "LOCATION", value: location });
      }
  };

  useEffect(() => {
      setSelectCity(cities[0]);
  }, []);

    return (
        <Context.Provider value={{ 
          fullTime, 
          setFullTime, 
          location, 
          setLocation,
          selectCity, 
          setSelectCity,
          handleCity,
          handleKeyLocation,
          cities
          }} >
            {children}
        </Context.Provider>
    )
}

export { ContextProvider, Context}
