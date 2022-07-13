import React from 'react';
import Hero from "./Hero";
import Why from "./Why";
import Pricing from "./Pricing";
import FAQs from './FAQs';
import Footer from './Footer';
import Logo from "./Logo";

const Main = () => {
  return (
    <>
        <Logo/>
        <Hero/>
        <Why/>
        <Pricing/>
        <FAQs/>
        <Footer/>
    </>
  )
}

export default Main