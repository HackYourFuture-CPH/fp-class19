import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useAuthentication } from './hooks/useAuthentication';
import LandingPage from './containers/LandingPage/LandingPage.container';
import SignIn from './containers/SignIn';
import SignUp from './containers/SignUp';
import ResetPassword from './containers/ResetPassword';
import AuthenticatedRoute from './components/Auth/AuthenticatedRoute';
import Profile from './containers/Profile';
import Loader from './components/Loader/Loader.component';
import Header from './components/Header/Header.component';
import Menu from './components/Menu/Menu.component';
import LogIn from './components/Login/Login.component';
import Footer from './components/Footer/Footer.component';
import './hooks/useProducts';
import AboutUsPage from './containers/AboutUsPage/AboutUsPage.container';
import ContactUsPage from './containers/ContactUsPage/ContactUsPage.container';

function App() {
  const { isLoading, isAuthenticated } = useAuthentication();

  if (isLoading) {
    return (
      <>
        <h1>
          isAuthenticated={isAuthenticated ? 'logged in' : 'how dare you!'}
        </h1>
        <Loader />
      </>
    );
  }

  return (
    <Router>
      <h1>isAuthenticated={isAuthenticated ? 'logged in' : 'how dare you!'}</h1>
      <Header />
      <Menu />
      <Switch>
        {/* Home page */}
        <Route exact path="/">
          <LandingPage />
        </Route>
        {/* AboutUs Page */}
        <Route exact path="/about-us">
          <AboutUsPage />
        </Route>
        {/* Contact page */}
        <Route exact path="/contact-us">
          <ContactUsPage />
        </Route>

        {/* Anonymous pages */}
        <SignIn exact path="/sign-in" />
        <SignUp exact path="/sign-up" />
        <ResetPassword exact path="/reset-password" />
        <LogIn exact path="/login" />

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
