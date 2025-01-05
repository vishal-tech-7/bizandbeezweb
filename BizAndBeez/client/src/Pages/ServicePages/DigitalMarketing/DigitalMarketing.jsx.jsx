import React from 'react'
import './DigitalMarketing.css'
import servicePageImg from '../../../assets/servicePageImg.png'
import serviceHeadImg from '../../../assets/headImg.png'
import serviceSecondImg from '../../../assets/serviceSecondImg.png'
import franchiseImg from '../../../assets/franchiseImg.png'
import DigitalMarketingImg from '../../../assets/DigitalMarketingImg.png'

const FranchiseDev = () => {
    return (
        <section id='servicePage'>
            <div className='service-page'>
                <div className='service-headcontainer'>
                    <div className='service-headtext-container'>
                        <h2 className='service-head-text'>Services</h2>
                        <div className='service-para-container'>
                            <p className='service-para-text'>From concept to reality – Biz and Beez brings your vision to life!</p>
                        </div>
                        <button className='service-headbtn'>Speak with our Experts</button>
                    </div>
                </div>

                <div className='service-description-container'>
                    <div className='service-description-paracontainer'>
                        <p className='service-description-paratext'>At Biz and Beez, we offer a range of dynamic services tailored to help your business grow,
                            connect, and succeed. Whether you’re launching a startup, expanding through franchising, or
                            looking to engage your audience with unique events, we have the expertise and creativity to make
                            it happen. Here’s how we can help
                        </p>
                    </div>
                </div>

                <div className='individual-servicepage-container'>
                    <div className='individual-servicepage-leftcontainer'>
                        <div className='individual-servicepage-headcontainer'>
                            <h3 className='individual-servicepage-headtext'>Digital Marketing</h3>
                            <div className='individual-servicepage-paracontainer'>
                                <p className='individual-servicepage-paratext'>Take your brand online and drive results with our 
                                    tailored digital marketing services. We specialize in creating data-driven strategies that 
                                    increase your brand’s visibility and engagement across digital channels.</p>
                            </div>
                            <ul className='individual-servicepage-listcontainer'>
                                <li>Social Media Management & Campaigns</li>
                                <li>SEO (Search Engine Optimization)</li>
                                <li>Pay-Per-Click (PPC) Advertising</li>
                                <li>Content Creation & Strategy</li>
                            </ul>
                        </div>
                    </div>
                    <div className='individual-servicepage-Rightcontainer'>
                        <div className='individual-servicepage-imgcontainer'>
                            <img className='individual-servicepage-digitalmarketingimg' src={DigitalMarketingImg} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FranchiseDev





{/* <div className='serviceLeft'>
                    <h2 className='serviceheadtext'>Services</h2>
                    <div className='servicehead-subtext-container'>
                        <h3 className='servicehead-subtext'>From concept to reality – Biz and Beez brings your vision to life!</h3>
                    </div>
                    <button>Speak with our Excepts</button>
                </div>
                <div className='serviceRight'>
                    <img className='serviceheadImg' src={serviceHeadImg} alt="biz and beez services" />
                </div> */}