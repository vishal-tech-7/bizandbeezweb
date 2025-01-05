import React, { useRef, useEffect } from 'react'
import ScrollReveal from 'scrollreveal'
import './Pricing.css'

const Pricing = () => {

    const leftScroll = useRef(null)
    const rightScroll = useRef(null)
  
    useEffect(() => {
      ScrollReveal().reveal(leftScroll.current, {
        origin: 'left',
        distance: '50px',
        duration: 2000,
        delay: 100,
        viewFactor: 0.2,
        reset: true,
      })
      ScrollReveal().reveal(rightScroll.current, {
        origin: 'right',
        distance: '50px',
        duration: 2000,
        delay: 100,
        viewFactor: 0.2,
        reset: true,
      })
    }, [])

  return (
    <section id='pricing'>
        <div ref={leftScroll} className='pricing-headtext-container'>
            <h3 className='pricing-headtext'>Our Plans</h3>
        </div>
        <div ref={rightScroll} className='plans-container'>
            <div className='individual-plancontainer'>
                <h4 className='individual-planheadtext'>BBC Silver Plan</h4>
                <span className='line' />
                <div className='plans-textcontainer'></div>
                <button>Know more</button>
            </div>
            <div className='individual-plancontainer'>
                <h4 className='individual-planheadtext'>BBC Gold Plan</h4>
                <span className='line' />
                <div className='plans-textcontainer'></div>
                <button>Know more</button>
            </div>
            <div className='individual-plancontainer'>
                <h4 className='individual-planheadtext'>BBC Platinum Plan</h4>
                <span className='line' />
                <div className='plans-textcontainer'></div>
                <button>Know more</button>
            </div>
        </div>
    </section>
  )
}

export default Pricing