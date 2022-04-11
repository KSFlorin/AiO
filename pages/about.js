import React from 'react';
import Head from 'next/head';
import Root from '../components/common/Root';
import Footer from '../components/common/Footer';

const About = () => (
  <Root>
    <Head>
      <title>About | Allinone</title>
    </Head>
    <div className="about-container">
      {/* Row */}
      <div className="row mt-5 pt-5 about-hero">
        <div className="col-12 col-md-10 col-lg-6 offset-md-1 offset-lg-0 row-content">
            <div className="h-100 d-flex flex-column py-5 px-4 px-sm-5 justify-content-center">
              <h2 className="font-size-header mb-4">
                About us
              </h2>
              <h4 className="font-size-subheader mb-4">
              We strive to deliver top quality products fast and securely at affordable prices.
              Our 24 hour customer service line is here to help you from first click until delivery and beyond. We undertake thorough quality assurance checks to ensure you receive the highest quality product possible.
              Why shop for your desired items all over the internet?
              </h4>
              <div className="about-cjs mt-3 d-flex flex-row">
                
            
                <a className="px-4 py-3 about-dev" href="https://www.facebook.com/consumergoodsliamnaude" target="_blank" rel="noopener noreferrer">
                  Go to our facebook page
                </a>

              </div>
            </div>
          </div>

        <div className="col-sm-3 col-md-6">
          <div className="about-image h-100">
            <div className="d-flex align-items-center justify-content-center h-100">
              <img src="/images/aboutus2.jpg" className="img-fluid"  alt="Allinone-About 1"/>
            </div>
          </div>
        </div>
      </div>

      {/* Row 2 */}
      <div className="row">
        <div className="col-12 col-lg-6">
          <div className="about-image h-100">
            <div className="d-flex align-items-center justify-content-center h-100">
              <img src="/images/aboutus2.jpg"  className="img-fluid"  alt="Allinone-About 2"/>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-10 col-lg-6 offset-md-1 offset-lg-0 row-content">
          <div className="h-100 d-flex flex-column justify-content-center py-5 px-4 px-sm-5">
            <h3 className="font-size-header mb-4">
                About myself.
            </h3>
            <h4 className="font-size-subheader mb-4">
            

I grew up in Cape Town South Africa before moving to Shanghai / Quanzhou China in 2018. During my time here I have studied Chinese language and culture, enabling me to have good communication with Chinese suppliers. I am a motivated individual with a passion for business, I believe that end to end customer service and satisfaction is key to building a successful company.
            </h4>
            <div className="mt-3">
           <a
                className="px-4 py-3 flex-grow-1 font-color-white about-gb"
                href="https://wa.me/+8615618034279"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact me
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Row 3 */}
      <div className="row">
        <div className="col-12 col-md-10 col-lg-6 offset-md-1 offset-lg-0 row-content">
          <div className="h-100 d-flex flex-column justify-content-center py-5 px-4 px-sm-5">
            <h3 className="font-size-header mb-4">
                  My vision
            </h3>
            <h4 className="font-size-subheader mb-4">
       

I am continually looking to improve and streamline my business and endeavour to make the experience as smooth as possible for the customer, while also providing top quality products.
Any questions please don’t hesitate to contact me.


            </h4>
            <div className="mt-3">
              <a
                className="px-4 py-3 flex-grow-1 font-color-white about-gb"
                href="https://wa.me/+8615618034279"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact me
              </a>
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-6">
          <div className="about-image h-100">
            <div className="d-flex align-items-center justify-content-center h-100">
              <img src="/images/aboutus3.jpg" className="img-fluid"  alt="Allinone-About 3"/>
            </div>
          </div>
        </div>
      </div>

    </div>

    <Footer />
  </Root>
);

export default About;
