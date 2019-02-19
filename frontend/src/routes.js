import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Login from './pages/Login'
import User from './pages/User'
import Edit from './pages/Edit'
import {isAuth} from './services/auth'

//Configuração de controle das rotas
const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        isAuth() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );
const Routes = () => (
      
    <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Login} />
      <PrivateRoute path="/user" component={User} />
      <PrivateRoute path="/edit" component={Edit} />
    </Switch>
    </BrowserRouter>
  );

export default Routes;
