import React, { createContext, useReducer } from 'react'

const GlobalContext = createContext();

function GlobalContextProvider({ children }) {
    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case "": {
                return {
                    ...state,
                    loading: false,
                    // jobs: action.jobs,
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

export default { GlobalContextProvider, GlobalContext }
