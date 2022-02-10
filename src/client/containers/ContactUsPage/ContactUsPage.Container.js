import React from 'react';
import './ContactUsPage.styles.css';
import { Header } from '../../components/Header/Header.component';
import { Menu } from '../../components/Menu/Menu.component';
import { Footer } from '../../components/Footer/Footer.component';
import { ContactUs } from '../../components/ContactUs/ContactUs.component';

function ContactUsPage() {
  return (
    <div>
      <Header />
      <Menu />
      <ContactUs />
      <Footer />
    </div>
  );
}

export { ContactUsPage };
