
import React from 'react';
import Head from 'next/head';
import Root from '../components/common/Root';
import Footer from '../components/common/Footer';


const Contact = () => (
  <Root>
    <Head>
      <title>Contact Us | Allinone</title>
    </Head>
    <div className="about-container">
      {/* Row */}
      <div className="row mt-5 pt-5 about-hero">
        <div className="col-12 col-md-10 col-lg-6 offset-md-1 offset-lg-0 row-content">
            <div className="h-100 d-flex flex-column py-5 px-4 px-sm-5 justify-content-center">
              <h2 className="font-size-header mb-4">
               Contact
              </h2>

              <h4 className="font-size-subheader mb-4">

                Whatsapp : +86 156 1803 4279

                Facebook: https://www.facebook.com/consumergoodsliamnaude

                Email: hello@allinone1.hk




              </h4>

             
              <div className="about-cjs mt-3 d-flex flex-row">
                
                                <form action="https://formspree.io/f/xayvdpld" method="POST">
  <label for="name">Name</label>
  <input id="name" type="text" autocomplete="name" required />
  <button type="submit">Register</button>
</form>
            
           
              </div>
            </div>
          </div>

   
      </div>

   



  
    

    </div>





    <Footer />
  </Root>
);

export default Contact;
