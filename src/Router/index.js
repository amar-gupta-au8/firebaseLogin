import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AuthProvider } from '../utility/AuthContext';
import PrivateRoute from './PrivateRoute';
import Home from '../container/Dashboard';
import Login from '../container/Login';

const AppRouter = () => {
  return (
    <AuthProvider>
      <Router>
        <div>
          <PrivateRoute exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default AppRouter;
