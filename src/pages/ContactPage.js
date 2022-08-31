import React from 'react';

import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import Subscribe from '../components/Subscribe';
import ContactHeader from '../components/ContactHeader';
import Contact from '../components/Contact';


export default function ContactPage() {
  return (
    <div>
      <div className="home-header">
        <NavBar />
        <ContactHeader />
      </div>
      <Contact />
      <Subscribe />
      <Footer />
    </div>
  );
}
