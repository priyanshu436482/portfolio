import React from 'react'
import { Button } from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import p1 from '../assets/images/lifeline_pharmacy.png'
import p2 from '../assets/images/BikeValue.png'
import p3 from '../assets/images/bhagvati_kirana.png'
import { FaReact, FaNodeJs } from 'react-icons/fa'
import { SiMongodb } from 'react-icons/si'

const projects = [
  {
    title: 'LifeLine Pharmacy',
    img: p1,
    desc: 'A responsive healthcare web application that allows users to browse medicines, view product details, and place orders seamlessly.',
    tech: [FaReact, FaNodeJs, SiMongodb],
    repo: 'https://github.com/priyanshu436482'
  },
  {
    title: 'BikeValue',
    img: p2,
    desc: 'Full stack demo with authentication, dashboards, and charts.',
    tech: [FaReact, FaNodeJs],
    repo: 'https://github.com/priyanshu436482'
  },
  {
    title: 'Bhagvati kirana',
    img: p3,
    desc: 'Landing page with animations and a headless CMS backend.',
    tech: [FaReact],
    repo: 'https://github.com/priyanshu436482'
  },
  {
    title: 'E-Commerce App',
    img: p1,
    desc: 'A complete e-commerce solution with cart, checkout and payment integration.',
    tech: [FaReact, FaNodeJs],
    repo: 'https://github.com/priyanshu436482/ecommerce-app'
  },
  {
    title: 'Portfolio v2',
    img: p2,
    desc: 'A minimalist portfolio design with dark mode and smooth transitions.',
    tech: [FaReact],
    repo: 'https://github.com/priyanshu436482/portfolio-v2'
  }
]

export default function Projects() {
  return (
    <div className="section" id="projects">
      <div className="container-narrow">
        <h2 className="section-title gradient-text text-center">Projects</h2>
        <p className="section-subtitle">Selected work. Showcasing multiple projects with smooth transitions.</p>
        
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="project-swiper py-5"
        >
          {projects.map((p, idx) => (
            <SwiperSlide key={idx}>
              <div className="glass glow card-neo project-card h-100">
                <img src={p.img} alt={p.title} className="w-100" />
                <div className="p-4 d-flex flex-column h-100">
                  <h5 className="mb-2">{p.title}</h5>
                  <div className="tech-icons mb-3">
                    {p.tech.map((Icon, i) => (
                      <Icon key={i} className="me-2 text-secondary fs-5" />
                    ))}
                  </div>
                  <p className="mb-3 text-white flex-grow-1">{p.desc}</p>
                  <Button href={p.repo} className="btn-primary-neo w-100" target="_blank">GitHub</Button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
