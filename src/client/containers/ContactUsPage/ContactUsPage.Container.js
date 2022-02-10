import React from 'react';
import './ContactUsPage.styles.css';
import { Header } from '../../components/Header/Header.component';
import { Menu } from '../../components/Menu/Menu.component';
import { Footer } from '../../components/Footer/Footer.component';
import { ContactPage } from '../../components/ContactPage/ContactPage.component';

function ContactUsPage() {
  return (
    <div>
      <Header />
      <Menu />
      <ContactPage />
      <Footer />
    </div>
  );
}

export { ContactUsPage };
