import React from 'react'
import './AboutUsPage.css'


const AboutUsPage = () => {
    return (
        <section id='AboutUsPage'>
            <div className='aboutuspage-container'>
                <div className='aboutus-imgcontainer'>
                    {/* add one */}
                </div>
                <div className='aboutus-headtext-container'>
                    <h3 className='aboutus-headtext'>About Us</h3>
                </div>
                <div className='whoweare-container'>
                    <div>
                        <h4 className='whoweare-text'>Who we are</h4>
                    </div>
                    <div>
                        <p className='whoweare-para'>We’re Biz and Beez – a startup marketing agency with big dreams, even bigger ideas, 
                           and a passion for helping brands thrive. Whether you’re a franchise or a growing startup, we understand that 
                           every brand has a unique story, and we’re here to help you tell yours in the most compelling and impactful way.
                            From digital marketing to corporate events, startup events, and even startup awards, our approach is all about 
                            personalized service, creative thinking, and data-driven results with expert execution. We don’t just follow trends – we set them.
                        </p>
                    </div>
                </div>
                <div className='whoweare-container'>
                    <div>
                        <h4 className='whoweare-text'>Our mission</h4>
                    </div>
                    <div>
                        <p className='whoweare-para'>Our mission is simple: to provide fresh, innovative marketing solutions that help
                             businesses—whether franchises or startups—grow, thrive, and stand out in today’s competitive corporate world.
                              From digital marketing to organizing startup events and awards, as well as executing impactful corporate 
                              events, we deliver tailored strategies that drive success and make a lasting impression.
                        </p>
                    </div>
                </div>

                <div className='whoweare-container'>
                    <div>
                        <h4 className='whoweare-text'>Our Founder’s Vision</h4>
                    </div>
                    <div>
                        <p className='whoweare-para'>At Biz and Beez, we believe every great idea deserves to be heard, and every
                             brand—whether a startup or franchise—has the potential to reach new heights. As a small, passionate 
                             agency, we understand what it’s like to start from scratch and build something meaningful. Our goal 
                             is simple: to help businesses stand out with creative, results-driven marketing. Whether it's digital
                              marketing, organizing startup events and awards, or executing memorable corporate events, we’re here 
                              to bring your brand to life and help it thrive. From the ground up to the next level, let’s grow together!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUsPage