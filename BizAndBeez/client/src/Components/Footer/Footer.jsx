import React from 'react'
import './Footer.css'
import copyright_symbol from '../../assets/copyright.png'
import linkedinIcon from '../../assets/linkedinIcon.png'
import twitterIcon from '../../assets/twitterIcon.png'
import fbIcon from '../../assets/fbIcon.png'
import instaIcon from '../../assets/instaIcon.png'
import locationIcon from '../../assets/locationIcon.png'

const Footer = () => {
    return (
        <section id='Footer'>
            <div className='footer-container'>
                <div className='footer-textcontainer'>
                    <div className='location-container'>
                        <div>
                            <img className='footer-locationIcon' src={locationIcon} alt="" />
                        </div>
                        <div>
                            <p className='locationtext'>Street No: 2, Boss Towers, 1st Floor, Near Medicover Hospital, Patrika Nagar,
                                Madhapur, Hyderabad, Telangana 500081
                            </p>
                        </div>
                    </div>
                    <p className='rights-text'>&#169; 2025 BizandBeez Creative llp All Rights Reserved </p>
                    <p className='terms-text'>Terms and Conditions</p>
                </div>
                <div className='social-container'>
                    <a target='_blank' href="https://www.linkedin.com/company/biz-and-beez-creatives-llp/">
                        <img className='social-icon' src={linkedinIcon} alt="Biz and Beez LinkedIn" />
                    </a>
                    <a target='_blank' href="https://www.instagram.com/bizandbeez?igsh=aHJzdWptMDR2dDNx">
                        <img className='social-icon' src={instaIcon} alt="Biz and Beez Instagram" />
                    </a>
                    <img className='social-icon' src={fbIcon} alt="Biz and Beez Facebook" />
                </div>
            </div>
        </section>
    )
}

export default Footer