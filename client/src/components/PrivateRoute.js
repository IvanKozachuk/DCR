import React from 'react';
import { Route, Redirect } from 'react-router-dom';



const PrivateRoute = ({ component: Component, isLogin, logingOut, ...rest}) => {
  

  return (
    <Route
    {...rest}
    render={routeProps => 
      isLogin ? (
        <Component {...routeProps} logingOut={logingOut}/>
      ) : (
        <Redirect to={'/'} />
      )
    }
    />
  );
};

export default PrivateRoute;
