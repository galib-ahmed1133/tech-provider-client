import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
       <footer className='footer'>
           <div className='container'>
               <div className='row'>
                   <div className='col-md-3 d-flex align-items-center'>
                       <div className='footer-logo text-center'>
                           <h3>TECH PROVIDER</h3>
                       </div>
                   </div>
                   <div className='col-md-2'>
                    <ul>
                        <li className='footer-items-active'>Company</li>
                        <li className='footer-items'>About Us</li>
                        <li className='footer-items'>Meet Our Team</li>
                        <li className='footer-items'>Pricing & Plans</li>
                        <li className='footer-items'>News & Media</li>
                        <li className='footer-items'>Case Studies</li>
                        <li className='footer-items'>Investors</li>
                    </ul>
                   </div>
                   <div className='col-md-2'>
                    <ul>
                        <li className='footer-items-active'>Solutions</li>
                        <li className='footer-items'>IT Managements</li>
                        <li className='footer-items'>Cyber Security</li>
                        <li className='footer-items'>Cloud Computing</li>
                        <li className='footer-items'>IT Consulting</li>
                        <li className='footer-items'>software Dev</li>
                        <li className='footer-items'>IT Support</li>
                    </ul>
                   </div>
                   <div className='col-md-2'>
                    <ul>
                        <li className='footer-items-active'>Resources</li>
                        <li className='footer-items'>Pricing & Plans</li>
                        <li className='footer-items'>Terms & Services</li>
                        <li className='footer-items'>Help & FAQs</li>
                        <li className='footer-items'>Contacts</li>
                        <li className='footer-items'>Site Map</li>
                        <li className='footer-items'>Investors</li>
                    </ul>
                   </div>
                   <div className='col-md-3'>
                        <h4 className='text-white font-weight-bold p-3 text-center'>Newsletter</h4>
                        <input className='form-control ml-5' placeholder='Enter Your Email Address'></input>
                        <input type='checkbox' className='ml-5 mt-3'></input>
                        <p className='ml-5 text-white'>I Accept All Terms & Conditions</p>
                   </div>
                    
               </div>
               <p className='text-muted text-center pt-5'>@2021 || Tech Provider, All Right Reserved.</p>

           </div>
       </footer>
    );
};

export default Footer;