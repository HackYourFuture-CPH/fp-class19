import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useAuthentication } from './hooks/useAuthentication';
import LandingPage from './containers/LandingPage/LandingPage.container';
import SignIn from './containers/SignIn';
import ResetPassword from './containers/ResetPassword';
import AuthenticatedRoute from './components/Auth/AuthenticatedRoute';
import Loader from './components/Loader/Loader.component';
import Header from './components/Header/Header.component';
import Menu from './components/Menu/Menu.component';
import LogInPage from './containers/LogInPage/LogInPage.Container';
import Footer from './components/Footer/Footer.component';
import './hooks/useProducts';
import SpecialOfferPage from './containers/SpecialOfferPage/SpecialOfferPage.container';
import AboutUsPage from './containers/AboutUsPage/AboutUsPage.container';
import ContactUsPage from './containers/ContactUsPage/ContactUsPage.container';
import ShoppingCartPage from './containers/ShoppingCartPage/ShoppingCartPage.Container';
import ForgotPasswordPage from './containers/ForgotPasswordPage/ForgotPasswordPage.container';
import CreateAccountPage from './containers/CreateAccountPage/CreateAccountPage.container';
import OrderConfirmationPage from './containers/OrderConfirmationPage/OrderConfirmationPage.Container';
import Page404Container from './containers/404Page/404Page.Container';
import UserProfilePage from './containers/UserProfilePage/UserProfilePage.Container';
import ProductPage from './containers/ProductPage/ProductPage.container';

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
        <Route path="/products/:productId">
          <ProductPage />
        </Route>
        {/* Special Offer Page */}
        <Route exact path="/special-offers">
          <SpecialOfferPage />
        </Route>
        {/* AboutUs Page */}
        <Route exact path="/about-us">
          <AboutUsPage />
        </Route>
        {/* Contact page */}
        <Route exact path="/contact-us">
          <ContactUsPage />
        </Route>
        {/* shoppingCart page */}
        <Route exact path="/shopping-cart">
          <ShoppingCartPage />
        </Route>

        <Route exact path="/order-confirmation">
          <OrderConfirmationPage />
        </Route>

        {/* Anonymous pages */}
        <SignIn exact path="/sign-in" />
        <CreateAccountPage exact path="/sign-up" />
        <ResetPassword exact path="/reset-password" />
        <LogInPage exact path="/log-in" />
        <ForgotPasswordPage exact path="/forgot-password" />

        {/* All routes below are authenticated routes - a user must login first */}
        <AuthenticatedRoute exact path="/user-profile">
          <UserProfilePage />
        </AuthenticatedRoute>
        {/* this has to be bottom always.. pls dont move and dont keep under this any routes */}
        <Route path="*">
          <Page404Container />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
