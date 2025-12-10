"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

export default function Home() {

  // Simulating the "Count Up" animation logic from the legacy JS
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              const counters = entry.target.querySelectorAll('.counter');
              counters.forEach((counter) => {
                  const target = +(counter.getAttribute('data-count') || 0);
                  const duration = 2000; 
                  const increment = target / (duration / 16); 
                  
                  let current = 0;
                  const updateCounter = () => {
                      current += increment;
                      if (current < target) {
                          (counter as HTMLElement).innerText = Math.ceil(current).toString();
                          requestAnimationFrame(updateCounter);
                      } else {
                          (counter as HTMLElement).innerText = target.toString();
                      }
                  };
                  updateCounter();
              });
              observer.unobserve(entry.target);
          }
      });
    }, observerOptions);

    const statsSection = document.querySelector('.stats-section');
    if (statsSection) {
        observer.observe(statsSection);
    }
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
          <div className="hero-overlay"></div>
          <div className="container hero-content">
              <div className="row align-items-center">
                  <div className="col-lg-7">
                      <h1 className="hero-title">Welcome to <br />Jamia Shere Rabbani</h1>
                      <p className="hero-subtitle lead text-white-50">A leading Islamic educational institution dedicated to spiritual and academic excellence.</p>
                      <div className="hero-buttons d-flex gap-3 flex-wrap">
                          <Link href="/admission" className="btn btn-primary btn-lg px-4 py-3 shadow-sm">
                              <i className="fas fa-graduation-cap me-2"></i>Apply Now
                          </Link>
                          <Link href="/courses" className="btn btn-outline-light btn-lg px-4 py-3">
                              <i className="fas fa-book me-2"></i>View Courses
                          </Link>
                      </div>
                  </div>
                  <div className="col-lg-5 d-none d-lg-block">
                      <div className="hero-image-wrapper text-center">
                          <Image 
                            src="https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg?auto=compress&cs=tinysrgb&w=600" 
                            width={600}
                            height={400}
                            className="img-fluid" 
                            alt="Madrassa Life"
                            style={{ objectFit: 'cover' }}
                          />
                      </div>
                  </div>
              </div>
          </div>
          <a href="#stats" className="scroll-down"><i className="fas fa-chevron-down"></i></a>
          <div className="custom-shape-divider-bottom-16689839">
              <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                  <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
              </svg>
          </div>
      </section>

      {/* Statistics Section (Floating) */}
      <section className="stats-section" id="stats">
          <div className="container">
              <div className="row g-4 justify-content-center">
                  <div className="col-md-4">
                      <div className="stat-card">
                          <div className="stat-icon-wrapper">
                              <i className="fas fa-users"></i>
                          </div>
                          <span className="stat-number counter" data-count="500">0</span>
                          <p className="text-muted fw-bold">Active Students</p>
                      </div>
                  </div>
                  <div className="col-md-4">
                      <div className="stat-card">
                          <div className="stat-icon-wrapper">
                              <i className="fas fa-chalkboard-teacher"></i>
                          </div>
                          <span className="stat-number counter" data-count="25">0</span>
                          <p className="text-muted fw-bold">Expert Teachers</p>
                      </div>
                  </div>
                  <div className="col-md-4">
                      <div className="stat-card">
                          <div className="stat-icon-wrapper">
                              <i className="fas fa-book-open"></i>
                          </div>
                          <span className="stat-number counter" data-count="10">0</span>
                          <p className="text-muted fw-bold">Courses Offered</p>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
          <div className="container">
              <div className="section-title-wrapper">
                  <h2 className="section-title">Why Choose Us?</h2>
                  <p className="text-muted">We provide a unique blend of traditional and modern education.</p>
              </div>
              <div className="row g-4">
                  <div className="col-md-4">
                      <div className="course-feature-box">
                          <div className="course-feature-icon">
                              <i className="fas fa-star"></i>
                          </div>
                          <h5>Quality Education</h5>
                          <p className="text-muted">High standards of Islamic and contemporary academic education.</p>
                      </div>
                  </div>
                  <div className="col-md-4">
                      <div className="course-feature-box">
                          <div className="course-feature-icon">
                              <i className="fas fa-user-shield"></i>
                          </div>
                          <h5>Safe Environment</h5>
                          <p className="text-muted">A secure and nurturing environment for students to grow.</p>
                      </div>
                  </div>
                  <div className="col-md-4">
                      <div className="course-feature-box">
                          <div className="course-feature-icon">
                              <i className="fas fa-hands-helping"></i>
                          </div>
                          <h5>Character Building</h5>
                          <p className="text-muted">Focus on moral values, ethics, and spiritual development.</p>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="section-padding bg-light-pattern">
          <div className="container">
              <div className="row align-items-center">
                  <div className="col-lg-6 mb-5 mb-lg-0">
                      <div className="mission-image-col">
                          <div className="mission-img-bg"></div>
                          <Image 
                            src="https://images.pexels.com/photos/6238287/pexels-photo-6238287.jpeg?auto=compress&cs=tinysrgb&w=600" 
                            width={600}
                            height={400}
                            className="img-fluid mission-img-main" 
                            alt="Vision"
                            style={{ objectFit: 'cover' }}
                          />
                      </div>
                  </div>
                  <div className="col-lg-6 ps-lg-5">
                      <div className="section-title-wrapper text-start">
                          <h2 className="section-title text-start ms-0">Our Mission & Vision</h2>
                      </div>
                      <p className="lead text-muted mb-4">Dedicated to providing holistic Islamic education that nurtures the soul and mind.</p>
                      
                      <div className="feature-list-item">
                          <div className="feature-icon">
                              <i className="fas fa-quote-right"></i>
                          </div>
                          <div>
                              <h5 className="mb-1">Our Mission</h5>
                              <p className="mb-0 text-muted small">To provide quality Islamic education and moral training to students for their spiritual and intellectual growth.</p>
                          </div>
                      </div>
                      
                      <div className="feature-list-item">
                          <div className="feature-icon">
                              <i className="fas fa-eye"></i>
                          </div>
                          <div>
                              <h5 className="mb-1">Our Vision</h5>
                              <p className="mb-0 text-muted small">To become a center of excellence in Islamic education and character building, empowering individuals to contribute positively to society.</p>
                          </div>
                      </div>
                      
                      <div className="mt-4">
                          <Link href="/about" className="btn btn-primary">Learn More About Us</Link>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* Video Tour Section (Parallax) */}
      <section className="video-section">
          <div className="video-overlay"></div>
          <div className="container position-relative z-2 text-center text-white">
              <a href="https://www.youtube.com/watch?v=your-video-id" target="_blank" className="play-btn mx-auto mb-4">
                  <i className="fas fa-play"></i>
              </a>
              <h2 className="fw-bold mb-3">Watch Our Campus Tour</h2>
              <p className="lead opacity-75">Experience the spiritual atmosphere of Jamia Shere Rabbani</p>
          </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-light">
          <div className="container">
              <div className="section-title-wrapper">
                  <h2 className="section-title">What Parents Say</h2>
                  <p className="text-muted">Feedback from our community</p>
              </div>
              <div className="row g-4">
                  <div className="col-md-4">
                      <div className="testimonial-card">
                          <i className="fas fa-quote-left testimonial-icon"></i>
                          <Image 
                            src="https://randomuser.me/api/portraits/men/32.jpg" 
                            width={80} 
                            height={80} 
                            alt="Parent" 
                            className="testimonial-img"
                          />
                          <p className="text-muted fst-italic mb-3">&quot;Jamia Shere Rabbani has transformed my son&apos;s life. The teachers are incredibly dedicated and the environment is perfect for learning.&quot;</p>
                          <h6 className="fw-bold mb-0">Muhammad Ahmed</h6>
                          <small className="text-primary">Parent</small>
                      </div>
                  </div>
                  <div className="col-md-4">
                      <div className="testimonial-card">
                          <i className="fas fa-quote-left testimonial-icon"></i>
                          <Image 
                            src="https://randomuser.me/api/portraits/men/45.jpg" 
                            width={80} 
                            height={80} 
                            alt="Parent" 
                            className="testimonial-img"
                          />
                          <p className="text-muted fst-italic mb-3">&quot;I am amazed by the progress my child has made in Hifz. The modern facilities combined with traditional teaching are excellent.&quot;</p>
                          <h6 className="fw-bold mb-0">Ali Hassan</h6>
                          <small className="text-primary">Parent</small>
                      </div>
                  </div>
                  <div className="col-md-4">
                      <div className="testimonial-card">
                          <i className="fas fa-quote-left testimonial-icon"></i>
                          <Image 
                            src="https://randomuser.me/api/portraits/men/22.jpg" 
                            width={80} 
                            height={80} 
                            alt="Parent" 
                            className="testimonial-img"
                          />
                          <p className="text-muted fst-italic mb-3">&quot;The focus on character building along with education is what sets this institution apart. Highly recommended.&quot;</p>
                          <h6 className="fw-bold mb-0">Usman Khan</h6>
                          <small className="text-primary">Alumni</small>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* Latest News Section */}
      <section className="section-padding bg-white">
          <div className="container">
              <div className="section-title-wrapper">
                  <h2 className="section-title">Latest News & Events</h2>
                  <p className="text-muted mt-2">Stay updated with the latest happenings at Jamia</p>
              </div>
              
              <div className="row g-4">
                  <div className="col-md-4">
                      <div className="news-card">
                          <div className="news-img-wrapper">
                              <Image 
                                src="https://images.pexels.com/photos/6238285/pexels-photo-6238285.jpeg?auto=compress&cs=tinysrgb&w=400" 
                                width={400} 
                                height={220} 
                                alt="News Image 1"
                                style={{ objectFit: 'cover' }}
                              />
                              <div className="date-badge">
                                  <span>Jan</span>
                                  01
                              </div>
                          </div>
                          <div className="news-body">
                              <div className="news-meta">
                                  <i className="far fa-clock me-1"></i> January 01, 2024
                              </div>
                              <h5 className="news-title">
                                  <Link href="/news">New Hifz Program Launched for Young Students</Link>
                              </h5>
                              <p className="text-muted small mb-0">Jamia Shere Rabbani is excited to announce the launch of its new Hifz program...</p>
                          </div>
                      </div>
                  </div>
                  <div className="col-md-4">
                      <div className="news-card">
                          <div className="news-img-wrapper">
                                <Image 
                                    src="https://images.pexels.com/photos/6238285/pexels-photo-6238285.jpeg?auto=compress&cs=tinysrgb&w=400" 
                                    width={400} 
                                    height={220} 
                                    alt="News Image 2"
                                    style={{ objectFit: 'cover' }}
                                />
                              <div className="date-badge">
                                  <span>Dec</span>
                                  25
                              </div>
                          </div>
                          <div className="news-body">
                              <div className="news-meta">
                                  <i className="far fa-clock me-1"></i> December 25, 2023
                              </div>
                              <h5 className="news-title">
                                  <Link href="/news">Annual Quranic Recitation Competition Held</Link>
                              </h5>
                              <p className="text-muted small mb-0">Our annual Quranic recitation competition saw enthusiastic participation...</p>
                          </div>
                      </div>
                  </div>
                  <div className="col-md-4">
                      <div className="news-card">
                          <div className="news-img-wrapper">
                                <Image 
                                    src="https://images.pexels.com/photos/6238285/pexels-photo-6238285.jpeg?auto=compress&cs=tinysrgb&w=400" 
                                    width={400} 
                                    height={220} 
                                    alt="News Image 3"
                                    style={{ objectFit: 'cover' }}
                                />
                              <div className="date-badge">
                                  <span>Nov</span>
                                  15
                              </div>
                          </div>
                          <div className="news-body">
                              <div className="news-meta">
                                  <i className="far fa-clock me-1"></i> November 15, 2023
                              </div>
                              <h5 className="news-title">
                                  <Link href="/news">Guest Lecture on Islamic Jurisprudence</Link>
                              </h5>
                              <p className="text-muted small mb-0">Renowned scholar Dr. Aisha Khan delivered a captivating lecture on Fiqh...</p>
                          </div>
                      </div>
                  </div>
              </div>
              
              <div className="text-center mt-5">
                  <Link href="/news" className="btn btn-outline-primary btn-lg px-4">View All News</Link>
              </div>
          </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
          <div className="cta-pattern"></div>
          <div className="container cta-content">
              <h2 className="display-5 fw-bold mb-4">Ready to Start Your Journey?</h2>
              <p className="lead mb-5 opacity-75">Join thousands of students who have benefited from our quality education and spiritual guidance.</p>
              <div className="d-flex justify-content-center gap-3 flex-wrap">
                  <Link href="/admission" className="btn btn-light btn-lg px-4 py-3 text-primary fw-bold">
                      <i className="fas fa-graduation-cap me-2"></i>Apply for Admission
                  </Link>
                  <Link href="/contact" className="btn btn-outline-light btn-lg px-4 py-3">
                      <i className="fas fa-phone me-2"></i>Contact Us
                  </Link>
              </div>
          </div>
      </section>
    </>
  );
}
