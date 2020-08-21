import React from 'react';
import './App.less';
import LoginPage from './components/LoginPage/LoginPage'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import RegistrationPage from './components/RegistrationPage/RegistrationPage';
import ResetPasswordPage from './components/ResetPasswordPage/ResetPasswordPage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/registration">
          <RegistrationPage />
        </Route>
        <Route path="/reset">
          <ResetPasswordPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
