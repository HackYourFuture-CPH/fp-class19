import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import LandingPage from './containers/LandingPage/LandingPage.Container';
import SignIn from './containers/SignIn';
import SignUp from './containers/SignUp';
import ResetPassword from './containers/ResetPassword';
import AuthenticatedRoute from './components/Auth/AuthenticatedRoute';
import { useAuthentication } from './hooks/useAuthentication';
import { Header } from './components/Header/Header.component';
import Profile from './containers/Profile';
import Loader from './components/Loader/Loader.component';
import LogIn from './components/LoginComponent/LoginComponent.component';
import Menu from './components/Menu/Menu.component';
import Footer from './components/Footer/Footer.component';
import Contact from './components/ContactPage/ContactPage.component';
import AboutUs from './components/AboutUs/AboutUs.component';

import './hooks/useProducts';

function App() {
  const { isLoading } = useAuthentication();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Router>
      <Header />
      <Menu />
      <Switch>
        {/* Home page */}
        <Route exact path="/">
          <LandingPage />
        </Route>

        {/* Anonymous pages */}
        <SignIn exact path="/sign-in" />
        <SignUp exact path="/sign-up" />
        <ResetPassword exact path="/reset-password" />
        <AboutUs exact path="/about-us" />
        <Contact exact path="/contact-us" />
        <LogIn exact path="/log-in" />

        {/* All routes below are authenticated routes - a user must login first */}
        <AuthenticatedRoute exact path="/profile">
          <Profile />
        </AuthenticatedRoute>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
