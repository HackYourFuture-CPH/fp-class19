import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { AuthenticatedRoute } from './components/Auth/AuthenticatedRoute';
import { useAuthentication } from './hooks/useAuthentication';
import { LandingPage } from './containers/LandingPage/LandingPage.container';
import { SignInPage } from './containers/SignInPage/SignInPage.container';
import { SignUpPage } from './containers/SignUpPage/SignUpPage.container';
import { ResetPasswordPage } from './containers/ResetPasswordPage/ResetPasswordPage.container';
import { ContactUsPage } from './containers/ContactUsPage/ContactUsPage.container';
import { ProfilePage } from './containers/ProfilePage/ProfilePage.container';
import { Loader } from './components/Loader/Loader.component';
import { Login } from './components/Login/Login.component';

import './hooks/useProducts';

function App() {
  const { isLoading } = useAuthentication();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Router>
      <Switch>
        {/* Home page */}
        <Route exact path="/">
          <LandingPage />
        </Route>
        {/* Contact page */}
        <Route exact path="/contact-us">
          <ContactUsPage />
        </Route>

        {/* Anonymous pages */}
        <SignInPage exact path="/sign-in" />
        <SignUpPage exact path="/sign-up" />
        <ResetPasswordPage exact path="/reset-password" />
        <Login exact path="/log-in" />

        {/* All routes below are authenticated routes - a user must login first */}
        <AuthenticatedRoute exact path="/profile">
          <ProfilePage />
        </AuthenticatedRoute>
      </Switch>
    </Router>
  );
}

export default App;
