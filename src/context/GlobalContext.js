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
            default: {
                return state
            }
        }
    }, {
        jobs: [],
        loading: true
    });

    const END_POINT = "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json";
    async function fetchJobs() {
        const res = await fetch(END_POINT);
        const data = await res.json();
        dispatch({ type: "JOB_TITLE", jobs: data })
    }
    useEffect(() => {
        fetchJobs();
    }, []);

    return (
        <GlobalContext.Provider value={{state, dispatch}}>
            {children}
        </GlobalContext.Provider>
    )
}

export { GlobalContextProvider, GlobalContext }
