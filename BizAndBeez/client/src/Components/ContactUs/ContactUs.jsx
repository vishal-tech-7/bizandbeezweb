import React from 'react'
import './ContactUs.css'
import contactImg from '../../assets/contactus-img.png'

const ContactUs = () => {
    return (
        <section id='ContactUs'>
            <div className='contactus-container'>
                <div className='contactus-left'>
                    <h3 className='contactus-headtext'>Are You Ready to Elevate Your Business to the Next Level?</h3>
                    <div className='contactimg-container'>
                        <img className='contact-leftImg' src={contactImg} alt="" />
                    </div>
                </div>
                <div className='contact-divide-line'></div>
                <div className='contactus-right'>
                    <div class="form-head-container">
                        <h4 class="form-head-text">Connect with us</h4>
                    </div>
                    <form class="form-container" action="https://landingpage-biz.onrender.com/contact" method="post">
                        <input type="text" id="name" name="name" placeholder="Name:" /> <br /><br />
                        <input type="tel" id="mobile" name="mobile" placeholder="Mobile Number:" /><br /><br />
                        <input type="email" id="email" name="email" placeholder="Email:" /><br /><br />
                        <textarea id="message" name="message" placeholder="Message:" /><br /><br />
                        <input className='submit-btn' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </section>
    )
}

export default ContactUs