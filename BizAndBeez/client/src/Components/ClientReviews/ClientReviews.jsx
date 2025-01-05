import React from 'react'
import './ClientReviews.css'
import userIcon from '../../assets/userIcon.png'

const ClientReviews = () => {
  return (
    <section id='ClientReviews'>
        <div className='clientReviews-container'>
            <div className='clientReview-headcontainer'>
                <h3 className='clientReview-headtext'>Client Reviews</h3>
            </div>
            <div className='reviews-container'>
                <div className='invidual-review-container'>
                    <div className='individual-userData'>
                        <img className='userIcon' src={userIcon} alt="" />
                        <div className='userdetails'>
                            <p className='username'>Ajay Babu</p>
                            <p className='userposition'>CEO of Countrymall</p>
                        </div>
                    </div>
                    <div className='individual-userReview'>
                        <p>Biz and Beez truly exceeded our expectations in organizing our recent startup event.
                            From the meticulous planning to the seamless execution, their team made sure every detail was perfect. </p>
                    </div>
                </div>
                <div className='invidual-review-container'>
                    <div className='individual-userData'>
                        <img className='userIcon' src={userIcon} alt="" />
                        <div className='userdetails'>
                            <p className='username'>Bharath Kumar</p>
                            <p className='userposition'>Head of PR Salesbeez</p>
                        </div>
                    </div>
                    <div className='individual-userReview'>
                        <p>Our experience with Biz and Beez in digital marketing has been exceptional! They crafted a tailored strategy for
                            our brand that included social media campaigns, SEO optimization, and targeted ad strategies </p>
                    </div>
                </div>
                <div className='invidual-review-container'>
                    <div className='individual-userData'>
                        <img className='userIcon' src={userIcon} alt="" />
                        <div className='userdetails'>
                            <p className='username'>Babu</p>
                            <p className='userposition'>CEO Of Startup League</p>
                        </div>
                    </div>
                    <div className='individual-userReview'>
                        <p>Biz and Beez delivered a flawless corporate event for us. From planning to execution, everything was great care.
                            They provided creative solutions that made our event stand out, and their team ensured every attendee had a remarkable experience.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ClientReviews