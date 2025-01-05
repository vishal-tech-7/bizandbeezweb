import React, { useRef } from 'react';
import './CreativeTeam.css';
import kiranImg from '../../assets/kiranImg.png';
import chandrakalaImg from '../../assets/chandrakalaImg.png';
import ramImg from '../../assets/ramImg.png';
import bhaskarImg from '../../assets/bhaskarImg.png';
import srinivasImg from '../../assets/srinivasImg.png';
import bhanuImg from '../../assets/bhanuImg.png';
import saiImg from '../../assets/saiImg.png';
import manideepImg from '../../assets/manideep.png';
import { IoArrowBackCircleOutline, IoArrowForwardCircleOutline} from "react-icons/io5";


const CreativeTeam = () => {
  const teamContainerRef = useRef(null);

  const handleScroll = (direction) => {
    const teamMemberWidth = 250; // Width of one team member card
    const scrollAmount = direction === 'left' ? -teamMemberWidth : teamMemberWidth;
    teamContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <div className="creative-team">
      <h3 className="creativeteam-headtext">Creative Team</h3>
      <div className="creative-team-wrapper">
        {/* Left Scroll Button */}
        <button className="scroll-button-left" onClick={() => handleScroll('left')}>
          <IoArrowBackCircleOutline size={30} />
        </button>

        {/* Team Member Container */}
        <div className="team-container" ref={teamContainerRef}>
          {[kiranImg, chandrakalaImg, ramImg, bhaskarImg, srinivasImg, bhanuImg, saiImg, manideepImg].map(
            (imgSrc, index) => (
              <div className="individual-teammember-container" key={index}>
                <img className="team-memberImg" src={imgSrc} alt={`Team Member ${index + 1}`} />
              </div>
            )
          )}
        </div>

        {/* Right Scroll Button */}
        <button className="scroll-button-right" onClick={() => handleScroll('right')}>
          <IoArrowForwardCircleOutline size={30} />
        </button>
      </div>
    </div>
  );
};

export default CreativeTeam;
