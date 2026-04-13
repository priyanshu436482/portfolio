import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container-narrow">
        <div className="social-links">
          <a href="https://github.com/priyanshu436482" className="social-link" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/patel-pinshu-3546953b3/" className="social-link" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="mailto:patelpinshu4246@gmail.com" className="social-link">
            <FaEnvelope />
          </a>
        </div>
        <p className="text-muted mb-0">
          &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
