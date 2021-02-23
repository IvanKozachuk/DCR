import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './home.css'

import DCR from '../DCR';
import Navbar from '../Navbar';
import Dashboard from '../Admin/Dashboard';

const Home = ({logingOut}) => {
  return (
    <BrowserRouter>
    <div className="home">
      <Navbar  logingOut={logingOut}/>
      <Switch>
        <Route exact path="/dcr">
          <DCR />
        </Route>
        <Route exact path="/dashboard">
            <Dashboard />
        </Route>
      </Switch>
      </div>
      </BrowserRouter>
  )
}

export default Home
