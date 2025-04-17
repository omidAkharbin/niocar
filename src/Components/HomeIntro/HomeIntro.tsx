import React from "react";
import {Link} from "react-router-dom";
import "./HomeIntro.css";

const HomeIntro: React.FC = () => {
  return (
    <div className="home-intro">
      <div className="container">
        <div className="intro-content">
          <div className="intro-text">
            <h2>Electric Luxury Redefined</h2>
            <p>
              Welcome to Audi Excellence, where cutting-edge technology meets
              uncompromising luxury. Our electric vehicles represent the
              pinnacle of automotive engineering, combining breathtaking
              performance with sustainable innovation.
            </p>
            <p>
              Experience the future of driving today with our range of premium
              electric vehicles that offer exhilarating performance, impressive
              range, and the sophisticated design that Audi is renowned for
              worldwide.
            </p>
            <div className="intro-stats">
              <div className="stat">
                <span className="stat-number">3.1</span>
                <span className="stat-label">seconds 0-60 mph</span>
              </div>
              <div className="stat">
                <span className="stat-number">300+</span>
                <span className="stat-label">miles of range</span>
              </div>
              <div className="stat">
                <span className="stat-number">800V</span>
                <span className="stat-label">fast charging</span>
              </div>
            </div>
          {/* features buttons  */}
            <div className="intro-buttons">
              <Link to="/features" className="btn-primary">
                Explore Features
              </Link>
              <Link to="/contact" className="btn-outline">
                Schedule Test Drive
              </Link>
            </div>
          </div>
          {/* main image  */}
          <div className="intro-image">
            <img
              src="https://picsum.photos/id/1071/600/600"
              alt="Audi electric vehicle"
            />
            {/*  badge */}
            <div className="intro-badge">
              <div className="badge-content">
                <span className="badge-title">Premium Electric</span>
                <span className="badge-subtitle">Experience</span>
              </div>
            </div>
          </div>
        </div>
        {/* second features */}
        <div className="intro-features">
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-bolt"></i>
            </div>
            <h3>Electric Performance</h3>
            <p>
              Experience instant torque and smooth acceleration with our
              advanced electric powertrains.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-leaf"></i>
            </div>
            <h3>Sustainability</h3>
            <p>
              Zero emissions driving with sustainable materials and eco-friendly
              manufacturing processes.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-tachometer-alt"></i>
            </div>
            <h3>Advanced Technology</h3>
            <p>
              Cutting-edge infotainment, driver assistance, and connectivity
              features for a superior driving experience.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-shield-alt"></i>
            </div>
            <h3>Safety First</h3>
            <p>
              Comprehensive safety systems that protect you and your passengers
              in all driving conditions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeIntro;
