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

    return (
        <GlobalContext.Provider value={{state, dispatch}}>
            {children}
        </GlobalContext.Provider>
    )
}

export { GlobalContextProvider, GlobalContext }
