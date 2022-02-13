import React from 'react';
import './ContactUsPage.Style.css';
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';
import Footer from '../../components/Footer/Footer';
import ContactPage from '../../components/contact-page/Contact';

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

export default ContactUsPage;
