"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

const teachers = [
    {
        id: 1,
        name: "Maulana Abdul Rahman",
        role: "Principal",
        qualification: "Dars-e-Nizami, PhD",
        image: "https://images.pexels.com/photos/6238272/pexels-photo-6238272.jpeg?auto=compress&cs=tinysrgb&w=300",
        email: "abdulrahman@jamia.com"
    },
    {
        id: 2,
        name: "Qari Muhammad Ali",
        role: "Qirat Teacher",
        qualification: "Hifz, Qirat",
        image: "https://randomuser.me/api/portraits/men/1.jpg",
        email: "muhammadali@jamia.com"
    },
    {
        id: 3,
        name: "Mufti Bilal Khan",
        role: "Fiqh Specialist",
        qualification: "Ifta, Dars-e-Nizami",
        image: "https://randomuser.me/api/portraits/men/2.jpg",
        email: "bilalkhan@jamia.com"
    },
    {
        id: 4,
        name: "Dr. Sanaullah Tariq",
        role: "Hadith Scholar",
        qualification: "PhD Hadith, M.Phil",
        image: "https://randomuser.me/api/portraits/men/3.jpg",
        email: "sanaullah@jamia.com"
    }
];

export default function Teachers() {
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

    const statsSection = document.querySelector('.stats-section-container');
    if (statsSection) {
        observer.observe(statsSection);
    }
  }, []);

  return (
    <>
      <div className="page-header">
          <div className="container">
              <h1 className="display-4 fw-bold mb-3">Our Faculty</h1>
              <p className="lead mb-4">Meet the dedicated Islamic scholars and educators shaping the future.</p>
              <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                      <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                      <li className="breadcrumb-item active" aria-current="page">Teachers</li>
                  </ol>
              </nav>
          </div>
          <div className="custom-shape-divider-bottom-16689839">
              <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                  <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
              </svg>
          </div>
      </div>

      {/* Faculty Stats Strip */}
      <div className="container stats-section-container" style={{ marginTop: '-50px', position: 'relative', zIndex: 10 }}>
          <div className="row justify-content-center">
              <div className="col-lg-10">
                  <div className="glass-panel p-4 rounded-4 shadow-lg border-0" style={{ background: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(10px)' }}>
                      <div className="row text-center divide-cols">
                          <div className="col-md-4 mb-3 mb-md-0">
                              <div className="d-flex align-items-center justify-content-center">
                                  <div className="icon-circle bg-white text-primary shadow-sm me-3">
                                      <i className="fas fa-chalkboard-teacher fa-2x"></i>
                                  </div>
                                  <div className="text-start">
                                      <h3 className="fw-bold mb-0 counter text-dark" data-count="30">0</h3>
                                      <small className="text-muted fw-bold text-uppercase">Expert Scholars</small>
                                  </div>
                              </div>
                          </div>
                          <div className="col-md-4 mb-3 mb-md-0">
                              <div className="d-flex align-items-center justify-content-center">
                                  <div className="icon-circle bg-white text-success shadow-sm me-3">
                                      <i className="fas fa-user-graduate fa-2x"></i>
                                  </div>
                                  <div className="text-start">
                                      <h3 className="fw-bold mb-0 counter text-dark" data-count="5">0</h3>
                                      <small className="text-muted fw-bold text-uppercase">PhD Holders</small>
                                  </div>
                              </div>
                          </div>
                          <div className="col-md-4">
                              <div className="d-flex align-items-center justify-content-center">
                                  <div className="icon-circle bg-white text-warning shadow-sm me-3">
                                      <i className="fas fa-clock fa-2x"></i>
                                  </div>
                                  <div className="text-start">
                                      <h3 className="fw-bold mb-0 counter text-dark" data-count="10">0</h3>
                                      <small className="text-muted fw-bold text-uppercase">Avg Years Exp.</small>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      {/* Principal's Message Section */}
      <section className="section-padding">
          <div className="container">
              <div className="row align-items-center">
                  <div className="col-lg-5 mb-4 mb-lg-0">
                      <div className="position-relative">
                          <div className="absolute-pattern"></div>
                          <Image 
                            src="https://images.pexels.com/photos/6238280/pexels-photo-6238280.jpeg?auto=compress&cs=tinysrgb&w=600" 
                            width={600}
                            height={400}
                            className="img-fluid rounded-4 shadow-lg position-relative z-1" 
                            alt="Principal"
                            style={{ objectFit: 'cover' }}
                          />
                          <div className="quote-badge bg-primary text-white p-3 rounded-circle shadow position-absolute top-0 start-0 translate-middle z-2">
                              <i className="fas fa-quote-left fa-2x"></i>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-7 ps-lg-5">
                      <h5 className="text-primary fw-bold text-uppercase mb-2">Message from the Principal</h5>
                      <h2 className="display-6 fw-bold mb-4">Moulana Abdul Rahman</h2>
                      <p className="lead text-dark fst-italic mb-4">&quot;Our teachers are not just instructors; they are spiritual guides and mentors who carry the sacred trust of imparting prophetic knowledge to the next generation.&quot;</p>
                      <p className="text-muted mb-4">We select our faculty based on their academic excellence, spiritual standing, and dedication to student development. Each member of our team brings a wealth of knowledge from both traditional Dars-e-Nizami curriculums and modern educational methodologies.</p>
                      <div className="d-flex align-items-center mt-4">
                          <Link href="/contact" className="btn btn-outline-primary rounded-pill px-4">Contact Principal</Link>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* Teachers Grid Section */}
      <section className="section-padding bg-light-pattern">
          <div className="container">
              <div className="section-title-wrapper">
                  <h2 className="section-title">Distinguished Faculty</h2>
                  <p className="text-muted">Qualified mentors dedicated to your spiritual growth</p>
              </div>
              
              <div className="row g-4 justify-content-center">
                  {teachers.map((teacher) => (
                    <div key={teacher.id} className="col-lg-3 col-md-4 col-sm-6">
                        <div className="teacher-card-compact text-center p-3 rounded-4 bg-white shadow-sm hover-up h-100 position-relative group">
                            <div className="position-relative d-inline-block mb-3">
                                <div className="teacher-avatar-wrapper rounded-circle p-1 border border-2 border-primary border-opacity-25">
                                    <Image 
                                        src={teacher.image}
                                        width={120}
                                        height={120}
                                        className="rounded-circle object-fit-cover" 
                                        alt={teacher.name}
                                        style={{ objectFit: 'cover' }}
                                    />
                                </div>
                                <span className="position-absolute bottom-0 end-0 bg-primary text-white badge rounded-pill border border-white">
                                    <i className="fas fa-check-circle small"></i>
                                </span>
                            </div>
                            <div className="teacher-info">
                                <h5 className="fw-bold mb-1 text-dark text-truncate px-2">{teacher.name}</h5>
                                <p className="text-primary small mb-2 fw-semibold text-uppercase" style={{ fontSize: '0.75rem', letterSpacing: '1px' }}>{teacher.role}</p>
                                <div className="d-inline-flex bg-light rounded-pill px-3 py-1 mb-3">
                                    <small className="text-muted" style={{ fontSize: '0.75rem' }}><i className="fas fa-graduation-cap me-1"></i> {teacher.qualification}</small>
                                </div>
                                <div className="d-flex justify-content-center gap-2 opacity-0 group-hover-opacity transition mt-2">
                                    <a href="#" className="btn btn-sm btn-outline-primary rounded-circle" style={{ width: '32px', height: '32px', padding: '0', lineHeight: '30px' }}><i className="fas fa-user small"></i></a>
                                    <a href={`mailto:${teacher.email}`} className="btn btn-sm btn-outline-primary rounded-circle" style={{ width: '32px', height: '32px', padding: '0', lineHeight: '30px' }}><i className="fas fa-envelope small"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                  ))}
              </div>
          </div>
      </section>

      {/* Teaching Excellence Section */}
      <section className="section-padding">
          <div className="container">
              <div className="section-title-wrapper">
                  <h2 className="section-title">Teaching Excellence</h2>
                  <p className="text-muted">Why our faculty stands out</p>
              </div>
              <div className="row g-4">
                  <div className="col-md-4">
                      <div className="course-feature-box">
                          <div className="course-feature-icon">
                              <i className="fas fa-medal"></i>
                          </div>
                          <h5>Qualified Scholars</h5>
                          <p className="text-muted mb-0">Our teachers are highly qualified Islamic scholars (Ulama) with recognized degrees from prestigious institutions and Ijazah in their fields.</p>
                      </div>
                  </div>
                  <div className="col-md-4">
                      <div className="course-feature-box">
                          <div className="course-feature-icon">
                              <i className="fas fa-heart"></i>
                          </div>
                          <h5>Dedicated Mentors</h5>
                          <p className="text-muted mb-0">Beyond teaching, each faculty member serves as a mentor, providing personal guidance, spiritual counseling, and support to every student.</p>
                      </div>
                  </div>
                  <div className="col-md-4">
                      <div className="course-feature-box">
                          <div className="course-feature-icon">
                              <i className="fas fa-lightbulb"></i>
                          </div>
                          <h5>Innovative Methods</h5>
                          <p className="text-muted mb-0">We combine traditional Islamic teaching methodologies (Dars-e-Nizami) with modern educational psychology and tools.</p>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* Departments & Expertise */}
      <section className="section-padding bg-white">
          <div className="container">
              <div className="section-title-wrapper">
                  <h2 className="section-title">Departments & Expertise</h2>
                  <p className="text-muted">Specialized knowledge across disciplines</p>
              </div>
              
              <div className="row g-4">
                  {/* Quranic Studies Dept */}
                  <div className="col-lg-6">
                      <div className="dept-card p-5 rounded-4 h-100 position-relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)' }}>
                          <div className="position-absolute top-0 end-0 p-4 opacity-25 text-primary">
                              <i className="fas fa-quran fa-8x"></i>
                          </div>
                          <div className="position-relative z-1">
                              <div className="d-inline-flex align-items-center mb-4">
                                  <div className="bg-primary text-white p-3 rounded-circle me-3">
                                      <i className="fas fa-quran fa-2x"></i>
                                  </div>
                                  <h3 className="fw-bold mb-0 text-primary">Quranic Studies</h3>
                              </div>
                              <p className="text-muted mb-4">Our dedicated department for the Holy Quran, ensuring preservation and perfect recitation.</p>
                              
                              <div className="row g-3">
                                  <div className="col-sm-6">
                                      <div className="expertise-item bg-white p-3 rounded-3 shadow-sm d-flex align-items-center">
                                          <i className="fas fa-check-circle text-success me-3 fa-lg"></i>
                                          <span className="fw-bold text-dark">Certified Qaris</span>
                                      </div>
                                  </div>
                                  <div className="col-sm-6">
                                      <div className="expertise-item bg-white p-3 rounded-3 shadow-sm d-flex align-items-center">
                                          <i className="fas fa-brain text-success me-3 fa-lg"></i>
                                          <span className="fw-bold text-dark">Hifz Experts</span>
                                      </div>
                                  </div>
                                  <div className="col-sm-6">
                                      <div className="expertise-item bg-white p-3 rounded-3 shadow-sm d-flex align-items-center">
                                          <i className="fas fa-microphone-alt text-success me-3 fa-lg"></i>
                                          <span className="fw-bold text-dark">Tajweed Specialists</span>
                                      </div>
                                  </div>
                                  <div className="col-sm-6">
                                      <div className="expertise-item bg-white p-3 rounded-3 shadow-sm d-flex align-items-center">
                                          <i className="fas fa-book-reader text-success me-3 fa-lg"></i>
                                          <span className="fw-bold text-dark">Tafseer Scholars</span>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>

                  {/* Islamic Sciences Dept */}
                  <div className="col-lg-6">
                      <div className="dept-card p-5 rounded-4 h-100 position-relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #fff3cd 0%, #ffe69c 100%)' }}>
                          <div className="position-absolute top-0 end-0 p-4 opacity-25 text-warning">
                              <i className="fas fa-book fa-8x"></i>
                          </div>
                          <div className="position-relative z-1">
                              <div className="d-inline-flex align-items-center mb-4">
                                  <div className="bg-warning text-dark p-3 rounded-circle me-3">
                                      <i className="fas fa-book fa-2x"></i>
                                  </div>
                                  <h3 className="fw-bold mb-0 text-dark">Islamic Sciences</h3>
                              </div>
                              <p className="text-dark mb-4 opacity-75">Deep diving into the intellectual heritage of Islam through rigorous academic study.</p>
                              
                              <div className="row g-3">
                                  <div className="col-sm-6">
                                      <div className="expertise-item bg-white p-3 rounded-3 shadow-sm d-flex align-items-center">
                                          <i className="fas fa-balance-scale text-warning me-3 fa-lg"></i>
                                          <span className="fw-bold text-dark">Fiqh & Jurisprudence</span>
                                      </div>
                                  </div>
                                  <div className="col-sm-6">
                                      <div className="expertise-item bg-white p-3 rounded-3 shadow-sm d-flex align-items-center">
                                          <i className="fas fa-history text-warning me-3 fa-lg"></i>
                                          <span className="fw-bold text-dark">Hadith Sciences</span>
                                      </div>
                                  </div>
                                  <div className="col-sm-6">
                                      <div className="expertise-item bg-white p-3 rounded-3 shadow-sm d-flex align-items-center">
                                          <i className="fas fa-language text-warning me-3 fa-lg"></i>
                                          <span className="fw-bold text-dark">Arabic Literature</span>
                                      </div>
                                  </div>
                                  <div className="col-sm-6">
                                      <div className="expertise-item bg-white p-3 rounded-3 shadow-sm d-flex align-items-center">
                                          <i className="fas fa-landmark text-warning me-3 fa-lg"></i>
                                          <span className="fw-bold text-dark">Islamic History</span>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="cta-section">
          <div className="cta-pattern"></div>
          <div className="container cta-content">
              <h2 className="display-5 fw-bold mb-4">Join Our Teaching Team</h2>
              <p className="lead mb-5 opacity-75">Are you a qualified Islamic scholar passionate about teaching? We welcome applications from dedicated educators.</p>
              <div className="d-flex justify-content-center gap-3 flex-wrap">
                  <Link href="/contact" className="btn btn-light btn-lg px-4 py-3 text-primary fw-bold">
                      <i className="fas fa-file-alt me-2"></i>Send Your CV
                  </Link>
                  <Link href="/contact" className="btn btn-outline-light btn-lg px-4 py-3">
                      <i className="fas fa-phone me-2"></i>Contact Us
                  </Link>
              </div>
          </div>
      </section>

      <style jsx>{`
        .divide-cols > div:not(:last-child) {
            border-right: 1px solid #eee;
        }
        @media (max-width: 768px) {
            .divide-cols > div:not(:last-child) {
                border-right: none;
                border-bottom: 1px solid #eee;
                padding-bottom: 15px;
            }
        }
        .icon-circle {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .expertise-item {
            transition: transform 0.2s;
        }
        .expertise-item:hover {
            transform: translateX(5px);
        }
        .glass-panel {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
        }
        .hover-up {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .hover-up:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important;
        }
        .group-hover-opacity {
            opacity: 0;
            transition: opacity 0.3s ease;
        }
        .group:hover .group-hover-opacity {
            opacity: 1;
        }
      `}</style>
    </>
  );
}
