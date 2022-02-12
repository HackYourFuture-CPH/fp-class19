import React from 'react';
import '../../index.css';
import './aboutus.style.css';
import aboutImage from '../../assets/images/image26.png';

function AboutUs() {
  return (
    <div className="aboutus-content-container">
      <h1
        style={{
          fontFamily: 'Roboto',
          fontSize: '24px',
          lineHeight: '28px',
          margin: '2rem',
          color: '#534E4E',
          paddingTop: '0.8rem',
        }}
      >
        {' '}
        ABOUT US{' '}
      </h1>
      <p
        style={{
          fontFamily: 'DancingScript',
          fontSize: '24px',
          marginTop: '5rem',
          paddingInline: '1rem',
          textAlign: 'center',
          color: 'black',
        }}
      >
        We at{' '}
        <span style={{ color: '#5EA370', fontFamily: 'DancingScript' }}>
          The Green Store
        </span>{' '}
        pride ourselves on being able to offer you the biggest choice of plants.
        A good garden center can give you several plant varieties to choose
        from. If you’re worried about all this choice. We can help it narrow it
        dowwn for you.
      </p>
      <img
        className="aboutus-image"
        src={aboutImage}
        alt="aboutImage"
        style={{ margin: '3rem', width: '390px', height: '305px' }}
      />
    </div>
  );
}

export default AboutUs;
