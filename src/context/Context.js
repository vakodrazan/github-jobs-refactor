import React, { createContext, useContext, useState } from 'react'
import { GlobalContext } from './GlobalContext';

const Context = createContext();

function ContextProvider({ children }) {
    const { state, dispatch } = useContext(GlobalContext);
    const { jobs } = state;
    
    const [ query, setQuery ] = useState('');
    
    const handleFormSubmit = (e) => {
        e.preventDefault();

        const newJobList = jobs.filter(job => (
            job.title.toLowerCase().includes(query) || job.company.toLowerCase().includes(query)
        ));

        dispatch({ type: "UPDATE_LIST", newJobList })
        console.log(newJobList);
    }

    
    return (
        <Context.Provider value={{query, setQuery, handleFormSubmit}}>
            {children}
        </Context.Provider>
    )
}

export { ContextProvider, Context}
