import React from 'react';
import Head from 'next/head';
import Root from '../components/common/Root';
import Footer from '../components/common/Footer';
import SocialMedia from '../components/common/SocialMedia';
import ExploreBanner2 from '../components/productAssets/ExploreBanner2';
import HeroSection from '../components/homepage/HeroSection';
import HomeBanner3 from '../components/homepage/HomeBanner3';
import HomeBanner2 from '../components/homepage/HomeBanner2';
import CategoryBanner from '../components/homepage/CategoryBanner';
import ProductsBanner from '../components/homepage/ProductsBanner';

const Our = () => (
  <Root transparentHeader={true}>
    <Head>
      <title>Our Services | Allinone</title>
    </Head>


     <SocialMedia/>
    <ExploreBanner2/>  
    <HomeBanner3 />
      <SocialMedia />

    
    <Footer />
  </Root>
);

export default Our;
