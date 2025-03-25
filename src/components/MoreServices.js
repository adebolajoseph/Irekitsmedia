import React from 'react';
import { Link } from 'react-router-dom';
import './ServicesSection.css';
import img1 from "../assets/images/onair.jpg";
import imgl2 from "../assets/images/blackmagic.jpg";
import imgl3 from "../assets/images/editor.jpg";
import imgl4 from "../assets/images/camerasetup.jpg";
import imgl5 from "../assets/images/churchvid.jpg";
import imgl6 from "../assets/images/drone3.jpg";

const ServicesSection = () => {
  return (
    <section id="services">
      <h2>Our Services</h2>
      <div className="services-list">
        <div className="service-item">
          <img src={img1} alt="onair" />
          <h3>Live Streaming</h3>
          <p>High-quality live video streaming services for events, conferences, and special occasions.</p>
        </div>
        <div className="service-item">
          <img src={imgl2} alt="blackmagic" />
          <h3>Videography</h3>
          <p>Professional videography services to capture your moments in stunning detail.</p>
        </div>
        <div className="service-item">
          <img src={imgl3} alt="editor" />
          <h3>Video Editing</h3>
          <p>Enhance your videos with expert editing services and cutting-edge effects.</p>
        </div>
        <div className="service-item">
          <img src={imgl4} alt="camerasetup" />
          <h3>Multi-Camera setup</h3>
          <p>We give a good and quality video coverage set up for your memorable events</p>
        </div>
        <div className="service-item">
        <img src={imgl5} alt="churchvid" />
          <h3>Professionalism</h3>
          <p>We offer an experienced and skilled team for your services </p>
        </div>
        <div className="service-item">
        <img src={imgl6} alt="drone3" />
          <h3>Drone Effects</h3>
          <p>Get a nice aerial shots through our drone effects</p>
      </div>
      </div>
      
    </section>
  );
};

export default ServicesSection;
