import React from 'react';
import Navbar from 'core/components/Navbar';
import FindUser from 'pages/FindUser';
import Home from 'pages/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Routes = () => (
    <BrowserRouter>
        <Navbar/>
        <Switch>
            <Route path="/" exact>
                <Home/>
            </Route>
            <Route path="/users">
                <FindUser/>
            </Route>
        </Switch>    
    </BrowserRouter>
)

export default Routes;