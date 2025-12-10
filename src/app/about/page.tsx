import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <>
      <div className="page-header">
          <div className="container">
              <h1 className="display-4 fw-bold mb-3">About Us</h1>
              <p className="lead mb-4">Learn about our history, mission, and commitment to Islamic education</p>
              <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                      <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                      <li className="breadcrumb-item active" aria-current="page">About Us</li>
                  </ol>
              </nav>
          </div>
          <div className="custom-shape-divider-bottom-16689839">
              <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                  <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
              </svg>
          </div>
      </div>

      {/* History Section */}
      <section className="section-padding">
          <div className="container">
              <div className="row align-items-center">
                  <div className="col-lg-6 mb-5 mb-lg-0">
                      <div className="position-relative">
                          <Image 
                            src="https://images.pexels.com/photos/6238291/pexels-photo-6238291.jpeg?auto=compress&cs=tinysrgb&w=600" 
                            width={600}
                            height={400}
                            className="img-fluid rounded-4 shadow-lg" 
                            alt="Madrassa History"
                            style={{ objectFit: 'cover' }}
                          />
                          <div className="position-absolute bottom-0 start-0 bg-white p-4 rounded-3 shadow-lg m-4 d-none d-md-block" style={{ maxWidth: '250px' }}>
                              <div className="d-flex align-items-center mb-2">
                                  <i className="fas fa-history text-primary fa-2x me-3"></i>
                                  <div>
                                      <h5 className="mb-0 fw-bold">Est. 1995</h5>
                                      <small className="text-muted">Years of Excellence</small>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-6 ps-lg-5">
                      <div className="section-title-wrapper text-start mb-4">
                          <h2 className="section-title text-start ms-0">Our Rich History</h2>
                      </div>
                      <p className="lead text-dark mb-4">Jamia Shere Rabbani Mananwala has been a beacon of Islamic education since its establishment, founded with the vision of providing comprehensive Islamic education.</p>
                      <p className="text-muted mb-4">Our institution has grown from a small madrassa to a well-recognized center of Islamic learning, producing scholars, Hafiz-e-Quran, and well-educated individuals who serve the Muslim community worldwide.</p>
                      <p className="text-muted mb-4">We take pride in our traditional approach to Islamic education while incorporating modern teaching methodologies to ensure our students receive the best possible education.</p>
                      
                      <div className="d-flex gap-4 mt-4">
                          <div className="d-flex align-items-center">
                              <i className="fas fa-check-circle text-success fa-lg me-2"></i>
                              <span className="fw-bold">Traditional Values</span>
                          </div>
                          <div className="d-flex align-items-center">
                              <i className="fas fa-check-circle text-success fa-lg me-2"></i>
                              <span className="fw-bold">Modern Approach</span>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* Mission & Vision Cards */}
      <section className="section-padding bg-light-pattern">
          <div className="container">
              <div className="row g-4">
                  <div className="col-md-6">
                      <div className="card h-100 border-0 shadow-sm hover-lift overflow-hidden">
                          <div className="card-body p-5 position-relative">
                              <div className="position-absolute top-0 end-0 p-4 opacity-10">
                                  <i className="fas fa-bullseye fa-6x text-primary"></i>
                              </div>
                              <div className="d-inline-flex align-items-center justify-content-center bg-primary bg-opacity-10 p-3 rounded-circle mb-4 text-primary">
                                  <i className="fas fa-bullseye fa-2x"></i>
                              </div>
                              <h3 className="fw-bold mb-4">Our Mission</h3>
                              <p className="text-muted mb-4 lead">To provide quality Islamic education and moral training to students for their spiritual and intellectual growth.</p>
                              <ul className="list-unstyled">
                                  <li className="mb-3 d-flex align-items-center"><i className="fas fa-check-circle text-success me-3"></i>Provide quality Islamic education</li>
                                  <li className="mb-3 d-flex align-items-center"><i className="fas fa-check-circle text-success me-3"></i>Build strong moral character</li>
                                  <li className="mb-3 d-flex align-items-center"><i className="fas fa-check-circle text-success me-3"></i>Preserve Islamic traditions</li>
                                  <li className="mb-3 d-flex align-items-center"><i className="fas fa-check-circle text-success me-3"></i>Serve the community</li>
                              </ul>
                          </div>
                      </div>
                  </div>
                  <div className="col-md-6">
                      <div className="card h-100 border-0 shadow-sm hover-lift overflow-hidden">
                          <div className="card-body p-5 position-relative">
                              <div className="position-absolute top-0 end-0 p-4 opacity-10">
                                  <i className="fas fa-eye fa-6x text-warning"></i>
                              </div>
                              <div className="d-inline-flex align-items-center justify-content-center bg-warning bg-opacity-10 p-3 rounded-circle mb-4 text-warning">
                                  <i className="fas fa-eye fa-2x"></i>
                              </div>
                              <h3 className="fw-bold mb-4">Our Vision</h3>
                              <p className="text-muted mb-4 lead">To become a center of excellence in Islamic education and character building, empowering individuals to contribute positively to society.</p>
                              <ul className="list-unstyled">
                                  <li className="mb-3 d-flex align-items-center"><i className="fas fa-star text-warning me-3"></i>Excellence in Islamic education</li>
                                  <li className="mb-3 d-flex align-items-center"><i class="fas fa-star text-warning me-3"></i>Character development</li>
                                  <li className="mb-3 d-flex align-items-center"><i className="fas fa-star text-warning me-3"></i>Community leadership</li>
                                  <li className="mb-3 d-flex align-items-center"><i className="fas fa-star text-warning me-3"></i>Global recognition</li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* Founder Section */}
      <section className="section-padding">
          <div className="container">
              <div className="row align-items-center bg-white rounded-4 shadow overflow-hidden">
                  <div className="col-lg-5 p-0">
                      <Image 
                        src="https://images.pexels.com/photos/6238280/pexels-photo-6238280.jpeg?auto=compress&cs=tinysrgb&w=400" 
                        width={400}
                        height={500}
                        className="img-fluid w-100 h-100 object-fit-cover" 
                        style={{ minHeight: '400px', objectFit: 'cover' }}
                        alt="Founder"
                      />
                  </div>
                  <div className="col-lg-7 p-5">
                      <h5 className="text-primary fw-bold text-uppercase mb-2">Our Founder</h5>
                      <h2 className="display-6 fw-bold mb-4">Dr. Farooq Ali</h2>
                      <p className="lead text-muted mb-4">A distinguished Islamic scholar with over 25 years of experience in Islamic education and community service.</p>
                      <p className="text-muted mb-4">Dr. Farooq Ali established Jamia Shere Rabbani Mananwala with the vision of creating a center of excellence for Islamic education. His dedication to preserving Islamic traditions while adapting to modern educational needs has been the cornerstone of our institution&apos;s success.</p>
                      
                      <div className="row g-4 mt-2">
                          <div className="col-md-6">
                              <div className="d-flex align-items-start">
                                  <div className="text-primary me-3"><i className="fas fa-graduation-cap fa-2x"></i></div>
                                  <div>
                                      <h6 className="fw-bold mb-1">Qualifications</h6>
                                      <p className="small text-muted mb-0">Dars-e-Nizami, M.A Islamic Studies, PhD</p>
                                  </div>
                              </div>
                          </div>
                          <div className="col-md-6">
                              <div className="d-flex align-items-start">
                                  <div className="text-primary me-3"><i className="fas fa-award fa-2x"></i></div>
                                  <div>
                                      <h6 className="fw-bold mb-1">Experience</h6>
                                      <p className="small text-muted mb-0">18+ years in education & leadership</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-primary text-white position-relative overflow-hidden">
          <div className="position-absolute top-0 start-0 w-100 h-100 opacity-10"></div>
          <div className="container position-relative z-1">
              <div className="section-title-wrapper mb-5">
                  <h2 className="fw-bold text-white mb-2">Our Core Values</h2>
                  <p className="text-white-50">The principles that guide our every action</p>
              </div>
              <div className="row g-4 text-center">
                  <div className="col-md-3">
                      <div className="p-4 rounded-3 bg-white bg-opacity-10 h-100 backdrop-blur">
                          <i className="fas fa-heart fa-3x text-white mb-4"></i>
                          <h5 className="fw-bold">Compassion</h5>
                          <p className="small text-white-50 mb-0">We treat all students with kindness and understanding</p>
                      </div>
                  </div>
                  <div className="col-md-3">
                      <div className="p-4 rounded-3 bg-white bg-opacity-10 h-100 backdrop-blur">
                          <i className="fas fa-balance-scale fa-3x text-white mb-4"></i>
                          <h5 className="fw-bold">Justice</h5>
                          <p className="small text-white-50 mb-0">We uphold fairness and equality in all our dealings</p>
                      </div>
                  </div>
                  <div className="col-md-3">
                      <div className="p-4 rounded-3 bg-white bg-opacity-10 h-100 backdrop-blur">
                          <i className="fas fa-gem fa-3x text-white mb-4"></i>
                          <h5 className="fw-bold">Excellence</h5>
                          <p className="small text-white-50 mb-0">We strive for the highest standards in education</p>
                      </div>
                  </div>
                  <div className="col-md-3">
                      <div className="p-4 rounded-3 bg-white bg-opacity-10 h-100 backdrop-blur">
                          <i className="fas fa-handshake fa-3x text-white mb-4"></i>
                          <h5 className="fw-bold">Integrity</h5>
                          <p className="small text-white-50 mb-0">We maintain honesty and moral principles</p>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* Gallery Preview */}
      <section className="section-padding">
          <div className="container">
              <div className="section-title-wrapper">
                  <h2 className="section-title">Campus Life</h2>
                  <p className="text-muted">A glimpse into our daily activities</p>
              </div>
              <div className="row g-3">
                  <div className="col-md-4 col-sm-6">
                      <div className="gallery-item rounded-3 overflow-hidden shadow-sm position-relative group">
                          <Image 
                            src="https://images.pexels.com/photos/6238287/pexels-photo-6238287.jpeg?auto=compress&cs=tinysrgb&w=600" 
                            width={400}
                            height={250}
                            className="img-fluid w-100 object-fit-cover" 
                            style={{ height: '250px', objectFit: 'cover' }}
                            alt="Gallery Image 1"
                          />
                          <div className="gallery-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-dark bg-opacity-50 opacity-0 group-hover-opacity transition">
                              <h6 className="text-white mb-0">Madrassa View</h6>
                          </div>
                      </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                      <div className="gallery-item rounded-3 overflow-hidden shadow-sm position-relative group">
                          <Image 
                            src="https://images.pexels.com/photos/6238291/pexels-photo-6238291.jpeg?auto=compress&cs=tinysrgb&w=600" 
                            width={400}
                            height={250}
                            className="img-fluid w-100 object-fit-cover" 
                            style={{ height: '250px', objectFit: 'cover' }}
                            alt="Gallery Image 2"
                          />
                          <div className="gallery-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-dark bg-opacity-50 opacity-0 group-hover-opacity transition">
                              <h6 className="text-white mb-0">Student Gathering</h6>
                          </div>
                      </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                      <div className="gallery-item rounded-3 overflow-hidden shadow-sm position-relative group">
                          <Image 
                            src="https://images.pexels.com/photos/6238285/pexels-photo-6238285.jpeg?auto=compress&cs=tinysrgb&w=600" 
                            width={400}
                            height={250}
                            className="img-fluid w-100 object-fit-cover" 
                            style={{ height: '250px', objectFit: 'cover' }}
                            alt="Gallery Image 3"
                          />
                          <div className="gallery-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-dark bg-opacity-50 opacity-0 group-hover-opacity transition">
                              <h6 className="text-white mb-0">Classroom Session</h6>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
          <div className="cta-pattern"></div>
          <div className="container cta-content">
              <h2 className="display-5 fw-bold mb-4">Want to Learn More?</h2>
              <p className="lead mb-5 opacity-75">Get in touch with us to learn more about our programs and admission process.</p>
              <div className="d-flex justify-content-center gap-3 flex-wrap">
                  <Link href="/contact" className="btn btn-light btn-lg px-4 py-3 text-primary fw-bold">
                      <i className="fas fa-envelope me-2"></i>Contact Us
                  </Link>
                  <Link href="/admission" className="btn btn-outline-light btn-lg px-4 py-3">
                      <i className="fas fa-graduation-cap me-2"></i>Apply Now
                  </Link>
              </div>
          </div>
      </section>

      <style jsx>{`
        .hover-lift {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .hover-lift:hover {
            transform: translateY(-5px);
            box-shadow: 0 1rem 3rem rgba(0,0,0,.175)!important;
        }
        .backdrop-blur {
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
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
