import React from 'react'
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaBootstrap, 
  FaPython,
  FaGithub,
  FaGitAlt
} from 'react-icons/fa'
import { 
  SiDjango, 
  SiMongodb 
} from 'react-icons/si'

const skills = [
  { name: 'HTML', icon: FaHtml5, color: '#e34f26' },
  { name: 'CSS', icon: FaCss3Alt, color: '#1572b6' },
  { name: 'JavaScript', icon: FaJs, color: '#f7df1e' },
  { name: 'React', icon: FaReact, color: '#61dafb' },
  { name: 'Bootstrap', icon: FaBootstrap, color: '#7952b3' },
  { name: 'React Bootstrap', icon: FaBootstrap, color: '#61dafb' },
  { name: 'Django', icon: SiDjango, color: '#092e20' },
  { name: 'Python', icon: FaPython, color: '#3776ab' },
  { name: 'MongoDB', icon: SiMongodb, color: '#4db33d' },
  { name: 'GitHub', icon: FaGithub, color: '#ffffff' },
  { name: 'Git', icon: FaGitAlt, color: '#f05032' },
]

export default function Skills() {
  return (
    <div className="section" id="skills">
      <div className="container-narrow">
        <h2 className="section-title gradient-text text-center">Technical Skills</h2>
        <p className="section-subtitle">A snapshot of the technologies I use to build modern applications.</p>
        <div className="skills-grid">
          {skills.map((s, idx) => {
            const Icon = s.icon
            return (
              <div key={idx} className="glass glow card-neo skill-card">
                <Icon size={56} color={s.color} />
                <div className="skill-name">{s.name}</div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
