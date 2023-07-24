import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='top'>
                <div>
                    <h1>Pauri<span>Farm</span></h1>
                    <p>Here to Make a Difference!</p>

                </div>
                <div>
                    <a href='/'>
                        <i className='fa-brands fa-facebook-square'></i>
                    </a>

                    <a href='/'>
                        <i className='fa-brands fa-instagram-square'></i>
                    </a>

                    <a href='/'>
                        <i className='fa-brands fa-youtube-square'></i>
                    </a>

                    <a href='/'>
                        <i className='fa-brands fa-twitter-square'></i>
                    </a>

                </div>
            </div>

            <div className='bottom'>
                <div>
                    <h4>Company</h4>
                    <a href='/'>About Us</a>
                    <a href='/'>Our Services</a>
                    <a href='/'>Sign Up</a>
                </div>

                <div>
                    <h4>Get Help</h4>
                    <a href='/'>Contact Us</a>
                    <a href='/'>Support</a>
                    <a href='/'>LinkedIn</a>
                </div>

                <div>
                    <h4>Others</h4>
                    <a href='/'>Terms and Conditions</a>
                    <a href='/'>Privacy Policy</a>
                    <a href='/'>license</a>
                </div>
            </div>

            <hr></hr>

            <div className='sb__footer-below'>
                <div className='sb__footer-copyright'>
                    <p>
                        @{new Date().getFullYear()} PauriFarm. All rights Reserved.
                    </p>
                </div>

                <div className='sb__footer-below-links'>
                    <a href='/'><div><p>Terms & Conditions</p></div></a>
                    <a href='/'><div><p>Privacy</p></div></a>
                </div>
            </div>





        </div>

    );
}


export default Footer;