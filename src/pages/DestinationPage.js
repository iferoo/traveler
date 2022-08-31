import React from 'react';
import Destination from '../components/Destination';
import PagesHeader from '../components/PagesHeader';
import Footer from '../components/Footer';

import NavBar from '../components/NavBar';

import Subscribe from '../components/Subscribe';

export default function DestinationPage() {
  return (
    <div>
      <div className="home-header">
        <NavBar />
        <PagesHeader title="Destination" imgUrl="images/img_6.jpg" />
      </div>
      <Destination />
      <Subscribe />
      <Footer />
    </div>
  );
}
