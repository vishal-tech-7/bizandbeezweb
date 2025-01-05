import React, { useRef, useEffect } from 'react'
import ScrollReveal from 'scrollreveal'
import './Hero.css'
import heroImg from '../../assets/main_sec_img.png'


const Home = () => {

  const leftScroll = useRef(null)
  const rightScroll = useRef(null)

  useEffect(() => {
    ScrollReveal().reveal(leftScroll.current, {
      origin: 'left',
      distance: '50px',
      duration: 500,
      delay: 100,
      viewFactor: 0.5,
      reset: true,
    })
    ScrollReveal().reveal(rightScroll.current, {
      origin: 'right',
      distance: '50px',
      duration: 500,
      delay: 100,
      viewFactor: 0.5,
      reset: true,
    })
  }, [])


  return (
    <section id='hero'>
      <div className='hero-container'>
        <div ref={leftScroll} className='hero-left'>
          <div className='hero-left-headtext-container'>
            <h1 className='hero-left-headtext'>Buzz Your Brand to Bigger Heights with <span>Biz and Beez</span></h1>
          </div>
          <div className='hero-left-para-container'>
            <h2 className='hero-left-paratext'>Creative strategies, innovative designs, and marketing solutions tailored to make your business thrive.</h2>
          </div>
          <a href="#ContactUs"><button>GET STARTED</button></a>
          {/* <a href="#pricing"><button>SEE OUR PRICING</button></a> */}
        </div>
        <div ref={rightScroll} className='hero-right'>
          <div className='hero-right-container'>
            <img className='heroimg' src={heroImg} alt="bizAndBeez" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home