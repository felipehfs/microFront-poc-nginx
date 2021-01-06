import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import React from 'react'

function Routes() {
    return (
        <BrowserRouter basename="react">
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} /> 
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
