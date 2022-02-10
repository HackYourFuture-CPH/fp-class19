import React from 'react';
import './AboutUsPage.Style.css';
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';
import AboutUs from '../../components/AboutUs/aboutus.component';
import Footer from '../../components/Footer/Footer';

function AboutUsPage() {
  return (
    <div>
      <Header />
      <Menu />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default AboutUsPage;
