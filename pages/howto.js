import React from 'react';
import Head from 'next/head';
import Root from '../components/common/Root';
import Footer from '../components/common/Footer';

const Howto = () => (
  <Root>
    <Head>
      <title>How to order | Allinone</title>
    </Head>
    <div className="about-container">
      {/* Row */}
      <div className="row mt-5 pt-5 about-hero">
        <div className="col-12 col-md-10 col-lg-6 offset-md-1 offset-lg-0 row-content">
            <div className="h-100 d-flex flex-column py-5 px-4 px-sm-5 justify-content-center">
              <h2 className="font-size-header mb-4">
               Step 1
              </h2>
              <h4 className="font-size-subheader mb-4">
              Take a photo of your desired item or use an existing photo from your camera roll to upload into the search bar. Then, within 5 minutes we'll show you listings that match the item you are looking for and their basic prices. 
              </h4>
              <div className="about-cjs mt-3 d-flex flex-row">
                
                  

              </div>
            </div>
          </div>

        <div className="col-12 col-lg-6">
          <div className="about-image h-48">
            <div className="d-flex align-items-center justify-content-center h-48">
              <img src="/" alt="Allinone-About 1"/>
            </div>
          </div>
        </div>
      </div>

      {/* Row 2 */}
      <div className="row">
        <div className="col-12 col-lg-6">
          <div className="about-image h-100">
            <div className="d-flex align-items-center justify-content-center h-100">
              <img src="/" alt="Allinone-About 2"/>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-10 col-lg-6 offset-md-1 offset-lg-0 row-content">
          <div className="h-100 d-flex flex-column justify-content-center py-5 px-4 px-sm-5">
            <h3 className="font-size-header mb-4">
                Step 2
            </h3>
            <h4 className="font-size-subheader mb-4">
            
        If you agree on the item and basic price my team will do an order quotation for you (including tax and delivery costs etc). This will be the full price you pay for the order.

            </h4>
            <div className="mt-3">
            </div>

          </div>
        </div>
      </div>



      {/* Row 3 */}
      <div className="row mt-5 pt-5 about-hero">
        <div className="col-12 col-md-10 col-lg-6 offset-md-1 offset-lg-0 row-content">
            <div className="h-100 d-flex flex-column py-5 px-4 px-sm-5 justify-content-center">
              <h2 className="font-size-header mb-4">
               Step 3
              </h2>
              <h4 className="font-size-subheader mb-4">
              Make payment to the banking details shown on the order quotation. 
              </h4>
              <div className="about-cjs mt-3 d-flex flex-row">
                
                  

              </div>
            </div>
          </div>

        <div className="col-12 col-lg-6">
          <div className="about-image h-100">
            <div className="d-flex align-items-center justify-content-center h-100">
              <img src="/" alt="Allinone-About 1"/>
            </div>
          </div>
        </div>
      </div>



 {/* Row 4 */}
      <div className="row">
        <div className="col-12 col-lg-6">
          <div className="about-image h-100">
            <div className="d-flex align-items-center justify-content-center h-100">
              <img src="/" alt="Allinone-About 2"/>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-10 col-lg-6 offset-md-1 offset-lg-0 row-content">
          <div className="h-100 d-flex flex-column justify-content-center py-5 px-4 px-sm-5">
            <h3 className="font-size-header mb-4">
                Step 4
            </h3>
            <h4 className="font-size-subheader mb-4">
            
        We will purchase the product from a supplier and perform quality assurance before shipping.

            </h4>
            <div className="mt-3">
            </div>

          </div>
        </div>
      </div>



      {/* Row 5 */}
      <div className="row mt-5 pt-5 about-hero">
        <div className="col-12 col-md-10 col-lg-6 offset-md-1 offset-lg-0 row-content">
            <div className="h-100 d-flex flex-column py-5 px-4 px-sm-5 justify-content-center">
              <h2 className="font-size-header mb-4">
               Step 5
              </h2>
              <h4 className="font-size-subheader mb-4">
              The product will thoroughly packaged and then shipped via UPS, FedEx or DHL. 
              </h4>
              <div className="about-cjs mt-3 d-flex flex-row">

                 <div className="about-cjs mt-3 d-flex flex-row">
                
            
                <a className="px-4 py-3 about-dev" href="/" target="_blank" rel="noopener noreferrer">
                  Launch our Widget now.
                </a>

              </div>
                
                  

              </div>
            </div>
          </div>

        <div className="col-12 col-lg-6">
          <div className="about-image h-100">
            <div className="d-flex align-items-center justify-content-center h-100">
              <img src="/" alt="Allinone-About 1"/>
            </div>
          </div>
        </div>
      </div>



    </div>

    <Footer />
  </Root>
);

export default Howto;
