import React from 'react';
import Destination from '../components/Destination';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HowItWork from '../components/HowItWork';
import NavBar from '../components/NavBar';
import OurSuccess from '../components/OurSuccess';
import Pannar from '../components/Pannar';
import Subscribe from '../components/Subscribe';

export default function HomePage() {
  return (
    <div>
      <div className='home-header'>
        <NavBar />
        <Header />
      </div>
      <Destination />
      <HowItWork />
      <Pannar />
      <OurSuccess />
      <Subscribe />
      <Footer />
    </div>
  );
}
