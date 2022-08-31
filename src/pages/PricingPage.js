import React from 'react';

import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import Subscribe from '../components/Subscribe';
import PagesHeader from '../components/PagesHeader';
import Plans from '../components/Plans';
import Questions from '../components/Questions';

export default function PricingPage() {
  return (
    <div>
      <div className="home-header">
        <NavBar />
        <PagesHeader title="Plans for Everyone" imgUrl="images/img_2.jpg" />
      </div>
      <Plans />
      <Questions />
      <Subscribe />
      <Footer />
    </div>
  );
}
