import React from 'react';
import './AboutUsPage.styles.css';
import Header from '../../components/Header/Header.component';
import Menu from '../../components/Menu/Menu.component';
import AboutUs from '../../components/AboutUs/AboutUs.component';
import Footer from '../../components/Footer/Footer.component';

export default function AboutUsPage() {
  return (
    <div>
      <Header />
      <Menu />
      <AboutUs />
      <Footer />
    </div>
  );
}
