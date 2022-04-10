import React from 'react';
import Head from 'next/head';
import Root from '../components/common/Root';
import Footer from '../components/common/Footer';
import SocialMedia from '../components/common/SocialMedia';
import ExploreBanner from '../components/productAssets/ExploreBanner';
import HeroSection from '../components/homepage/HeroSection';
import HomeBanner from '../components/homepage/HomeBanner';
import HomeBanner2 from '../components/homepage/HomeBanner2';
import CategoryBanner from '../components/homepage/CategoryBanner';
import ProductsBanner from '../components/homepage/ProductsBanner';

const Home = () => (
  <Root transparentHeader={true}>
    <Head>
      <title>Home | Allinone</title>
    </Head>

    <HeroSection />
    <HomeBanner2 />
    <ExploreBanner />
    <ProductsBanner />
    <SocialMedia />
    <Footer />
  </Root>
);

export default Home;
