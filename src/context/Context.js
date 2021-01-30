import React, { createContext, useContext, useState, useEffect } from 'react'
import { GlobalContext } from './GlobalContext';

const Context = createContext();

function ContextProvider({ children }) {
    const CORS_URL = "https://cors-anywhere.herokuapp.com/"
    const { dispatch } = useContext(GlobalContext);

    const [ fullTime, setFullTime ] = useState(false);
    const [ description, setDescription ] = useState("");
    const [ location, setLocation ] = useState("New York");

    async function getJobs() {
        const API_URL = `https://jobs.github.com/positions.json?description=${description}&location=${location}&full_time=${fullTime}`
        const res = await fetch(CORS_URL + API_URL);
        const data = await res.json();
        dispatch({ type: "JOB_TITLE", jobs: data })
    }

    const filterJob = (filter) => {
        switch (filter.type) {
          case "LOCATION":
            setLocation(filter.value);
            break;
          case "FULL_TIME":
            setFullTime(filter.value);
            break;
          case "DESCRIPTION":
            setDescription(filter.value);
            break;
        }
      };


    useEffect(() => {
        getJobs(description, location, fullTime);
    }, [location, description, fullTime]);

    return (
        <Context.Provider value={{filterJob}}>
            {children}
        </Context.Provider>
    )
}

export { ContextProvider, Context}
