import React from 'react'
import { Route, Switch } from 'react-router-dom'
import DetailsContainer from './pages/details'
import Home from './pages/home'

export default function App() {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path={`/job/:jobId`}>
                <DetailsContainer />
            </Route>
        </Switch>
    )
}
