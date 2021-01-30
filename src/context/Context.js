import React, { createContext, useContext, useState, useEffect } from 'react'
import { GlobalContext } from './GlobalContext';

const Context = createContext();

function ContextProvider({ children }) {
    const CORS_URL = "https://cors-anywhere.herokuapp.com/"
    const { state, dispatch } = useContext(GlobalContext);
    const { jobs } = state;
    
    const [ query, setQuery ] = useState('');
    const [ fullTime, setFullTime ] = useState(false);
    const [ description, setDescription ] = useState("");
    const [ location, setLocation ] = useState("New York");

    async function getJobs() {
        const API_URL = `https://jobs.github.com/positions.json?description=${description}&location=${location}&full_time=${fullTime}`
        const res = await fetch(CORS_URL + API_URL);
        const data = await res.json();
        dispatch({ type: "JOB_TITLE", jobs: data })
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();

        const newJobList = jobs.filter(job => (
            job.title.toLowerCase().includes(query) || job.company.toLowerCase().includes(query)
        ));

        dispatch({ type: "UPDATE_LIST", newJobList })
        console.log(newJobList);
    }

    useEffect(() => {
        getJobs(description, location, fullTime);
    }, [location, description, fullTime]);

    return (
        <Context.Provider value={{
            query, 
            setQuery, 
            handleFormSubmit, 
            fullTime, 
            setFullTime ,
            description,
            setDescription,
            location,
            setLocation
        }}>
            {children}
        </Context.Provider>
    )
}

export { ContextProvider, Context}
