import React from 'react'
import { Container, Button } from 'react-bootstrap'
import profile from '../assets/images/profile.png'

export default function Hero() {
  return (
    <div className="section">
      <div className="container-narrow">
        <div className="hero">
          <div className="hero-content">
            <div className="mb-2 text-uppercase" style={{ letterSpacing: '2px', color: 'var(--text)' }}>
              Hello, I'm PRIYANSHU
            </div>
            <h1 className="hero-title gradient-text">Full Stack Developer</h1>
            <p className="hero-description mb-4 text-white fs-5">
              Passionate developer specializing in building exceptional digital experiences. 
              I love working with modern technologies to solve complex problems.
            </p>
            <div className="d-flex gap-3">
              <Button href="#projects" className="btn-primary-neo">View Projects</Button>
              <Button href="#contact" className="btn-outline-neo">Contact Me</Button>
            </div>
          </div>
          <div className="hero-img-container">
            <div className="hero-profile-card glass glow">
              <img src={profile} alt="Profile" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
