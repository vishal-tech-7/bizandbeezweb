import React from 'react'
import './WhyChooseUs.css'

const WhyChooseUs = () => {
  return (
    <section id='WhyChooseUs'>
        <div className='whychooseus-container'>
            <div className='whychooseus-headtext-container'>
                <h3 className='whychooseus-headtext'>Why Choose Us?</h3>
            </div>
            <ul className='list-container'>
                <li>Tailored Solutions: Each service is customized to your brand’s unique needs and goals.</li>
                <li>Experienced Team: We bring years of experience in event management, marketing, and franchise development.</li>
                <li>End-to-End Support: From concept to execution, we handle every detail to ensure your success</li>
            </ul>
            <div className='whychoose-paracontainer'>
            <p className='whychoose-para'>Ready to take your business to the next level? Contact us today and let’s turn your ideas into reality with Biz and Beez!</p>
            </div>
        </div>
    </section>
  )
}

export default WhyChooseUs