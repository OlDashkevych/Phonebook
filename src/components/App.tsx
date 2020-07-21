import React, { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Switch } from 'react-router-dom';
import PrivateRoute from './Routes/PrivateRoute';
import PublicRoute from './Routes/PublicRoute';
import { authOperations } from '../redux/auth';
import routes from '../routes';
import AppBar from './AppBar';

const App: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  });
  return (
    <BrowserRouter>
      <Suspense fallback={<h1>Loading...</h1>}>
        <AppBar />
        <Switch>
          {routes.map(route =>
            route.private ? (
              <PrivateRoute key={route.label} {...route} />
            ) : (
              <PublicRoute key={route.label} {...route} />
            ),
          )}
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
