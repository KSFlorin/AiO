import React from 'react';
import Link from 'next/link'

const Footer = () => (
  <footer className="pt-5">
    <div className="custom-container mb-5 pb-5 pt-5">
      <div className="row">
        <div className="col-12 col-sm-6 col-md-4">
          <p className="font-family-secondary font-size-display1 mb-4">
        Menu
          </p>
          <div className="d-flex font-color-medium mb-5 pb-3 pb-md-0 mb-md-0">
           
            <div className="pr-5">
            
        <Link  href="/">
          <a className="mb-3 d-block font-color-medium" >Home</a>
        </Link>

          <Link  href="/about">
          <a className="mb-3 d-block font-color-medium" >About</a>
        </Link>
               
       
          <Link  href="/Services">
          <a className="mb-3 d-block font-color-medium" >Our Services</a>
        </Link>

          </div>


          <div> 
          <Link  href="/howto">
          <a className="mb-3 d-block font-color-medium" >How to Order</a>
          </Link>

           <Link  href="/contact">
          <a className="mb-3 d-block font-color-medium" >Contact Us</a>
          </Link>

            </div>
          </div>
          </div>

        <div className="col-12 col-sm-6 col-md-4">
          <p className="font-family-secondary font-size-display1 mb-4">
           Social
          </p>
          <div className="d-flex font-color-medium mb-5 pb-3 pb-md-0 mb-md-0">
            <div className="pr-5">
              <a
                href="https://Facebook.com/consumergoodsliamnaude"
                className="mb-3 d-block font-color-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
              <a
                href="https://Facebook.com/consumergoodsliamnaude"
                className="d-block font-color-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Whatsapp
              </a>
            </div>
            <div>
            
            </div>
          </div>
        </div>



<div className="col-12 col-sm-6 col-md-4">
          <p className="font-family-secondary font-size-display1 mb-4">
           Shop Now
          </p>
          <div className="d-flex font-color-medium mb-5 pb-3 pb-md-0 mb-md-0">
            <div className="pr-5">
              <a
                href="https://Facebook.com/consumergoodsliamnaude"
                className="mb-3 d-block font-color-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook store
              </a>
              <a
                href="https://tripetto.app/run/3WRVGI02DK"
                className="d-block font-color-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Upload a photo
              </a>
            </div>
    
          </div>
        </div>



      </div>
    </div>

    <div className="pt-md-5">
      <div className="bg-brand300">
        <div className="custom-container d-flex flex-column flex-md-row align-items-center justify-content-between">
          <div className="pt-5 pb-0 pt-md-4 pb-md-4 d-flex align-items-center flex-wrap justify-content-center">
         
            
            <a
              href="https://Facebook.com/consumergoodsliamnaude"
              className="font-color-brand font-size-caption text-uppercase text-center"
              target="_blank"
              rel="noopener noreferrer"
            >
             Follow us on Facebook
            </a>

            <p className="px-2 font-color-brand font-size-caption">-</p>

           <Link  href="/terms-of-service">
          <a className="font-color-brand font-size-caption text-uppercase text-center">Terms of Service</a>
          </Link>

          </div>
          <div className="font-color-brand font-size-caption py-4 text-right">
          <a
              href="https://www.allinone1.hk/"
              className="font-color-brand font-size-caption text-uppercase text-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              &copy; { new Date().getFullYear() } Allinone.
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;