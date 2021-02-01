import React, { createContext, useEffect, useReducer } from 'react'

const GlobalContext = createContext();

function GlobalContextProvider({ children }) {
    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case "JOB_TITLE": {
                return {
                    ...state,
                    loading: false,
                    jobs: action.jobs,
                }
            }
            case "UPDATE_LIST": {
                return {
                    ...state,
                    loading: false,
                    jobs: action.newJobList,
                }
            }
            case "LOCATION": {
                return {
                    ...state,
                    location: action.value,
                }
            }
            case "FULL_TIME": {
                return {
                    ...state,
                    fullTime: action.value,
                }
            }
            case "DESCRIPTION": {
                return {
                    ...state,
                    description: action.value,
                }
            }
            default: {
                return state
            }
        }
    }, {
        jobs: [],
        loading: true,
        fullTime: false.valueOf,
        description: "",
        location: "New York"
    });

    const CORS_URL = "https://cors-anywhere.herokuapp.com/";

    const { description, location, fullTime } = state;

    async function getJobs() {
        const API_URL = `https://jobs.github.com/positions.json?description=${description}&location=${location}&full_time=${fullTime}`
        const res = await fetch(CORS_URL + API_URL);
        const data = await res.json();
        dispatch({ type: "JOB_TITLE", jobs: data })
    }

    

    useEffect(() => {
        getJobs(description, location, fullTime);
    }, [location, description, fullTime]);

    return (
        <GlobalContext.Provider value={{state, dispatch}}>
            {children}
        </GlobalContext.Provider>
    )
}

export { GlobalContextProvider, GlobalContext }
