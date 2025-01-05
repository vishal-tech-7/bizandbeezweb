import React from 'react'
import './CorporateEvents.css'
import servicePageImg from '../../../assets/servicePageImg.png'
import serviceHeadImg from '../../../assets/headImg.png'
import serviceSecondImg from '../../../assets/serviceSecondImg.png'
import franchiseImg from '../../../assets/franchiseImg.png'
import corporateEventsImg from '../../../assets/corporateEventsImg.png'

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
                            <h3 className='individual-servicepage-headtext'>Corporate Events</h3>
                            <div className='individual-servicepage-paracontainer'>
                                <p className='individual-servicepage-paratext'>Whether you're hosting a conference, team-building retreat, or gala, we design and
                                     execute corporate events that align with your company’s goals and values. Let us handle the details while you focus on making 
                                     an impact.</p>
                            </div>
                            <ul className='individual-servicepage-listcontainer'>
                                <li>Corporate Conference Planning</li>
                                <li>Team-Building Activities & Workshops</li>
                                <li>Gala & Award Ceremony Coordination</li>
                                <li>Product Launches & Executive Events</li>
                            </ul>
                        </div>
                    </div>
                    <div className='individual-servicepage-Rightcontainer'>
                        <div className='individual-servicepage-imgcontainer'>
                            <img className='individual-servicepage-corporateimg' src={corporateEventsImg} alt="" />
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