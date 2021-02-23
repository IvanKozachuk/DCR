import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux'; 
import * as actionType from './constants/actionTypes';

import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import PrivateRoute from './components/PrivateRoute';

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const dispatch = useDispatch();

  const logData = async () => {
    const authData = await dispatch({type: actionType.AUTH});
    
    if(authData) {
      setIsLogin(prev => !prev);
    }

    console.log(isLogin);
  }
  // setting the isLoging value to false once log out click even is triggered
  // the function passed to auth component via private route component
  const logingOut = (par) => {
    setIsLogin(par);
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <Auth logData={logData}/>
          </Route>
          <PrivateRoute path='/dcr' component={Home} isLogin={isLogin} logingOut={logingOut}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
