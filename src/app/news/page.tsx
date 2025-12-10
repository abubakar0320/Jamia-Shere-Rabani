import Image from 'next/image';
import Link from 'next/link';

export default function News() {
  return (
    <>
      <div className="page-header">
          <div className="container">
              <h1 className="display-4 fw-bold mb-3">News & Events</h1>
              <p className="lead mb-4">Stay updated with the latest happenings and upcoming activities.</p>
              <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                      <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                      <li className="breadcrumb-item active" aria-current="page">News</li>
                  </ol>
              </nav>
          </div>
          <div className="custom-shape-divider-bottom-16689839">
              <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                  <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
              </svg>
          </div>
      </div>

      <div className="container py-5">
          <div className="row g-5">
              {/* Main Content */}
              <div className="col-lg-8">
                  <div className="row g-4">
                      {/* Static News Item 1 */}
                      <div className="col-md-6">
                          <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden hover-up">
                              <div className="position-relative">
                                  <Image 
                                    src="https://images.pexels.com/photos/6238285/pexels-photo-6238285.jpeg?auto=compress&cs=tinysrgb&w=400" 
                                    width={400}
                                    height={220}
                                    className="card-img-top object-fit-cover" 
                                    style={{ height: '220px', objectFit: 'cover' }}
                                    alt="News Title 1"
                                  />
                                  <span className="position-absolute top-0 end-0 m-3 badge bg-white text-primary shadow-sm rounded-pill px-3 py-2 text-uppercase fw-bold" style={{ fontSize: '0.75rem' }}>
                                      News
                                  </span>
                              </div>
                              
                              <div className="card-body p-4 d-flex flex-column">
                                  <div className="text-muted small mb-2 d-flex align-items-center">
                                      <i className="far fa-clock me-2"></i> Jan 20, 2024
                                  </div>
                                  
                                  <h5 className="card-title fw-bold mb-3">
                                      <a href="#" className="text-dark text-decoration-none stretched-link">
                                          Annual Hifz Competition Successfully Concludes
                                      </a>
                                  </h5>
                                  
                                  <p className="card-text text-muted mb-4 flex-grow-1">Jamia Shere Rabbani held its annual Hifz competition with students from various programs participating...</p>
                                  
                                  <div className="mt-auto pt-3 border-top d-flex justify-content-between align-items-center">
                                      <span></span>
                                      <span className="text-primary fw-bold small">Read More <i className="fas fa-arrow-right ms-1"></i></span>
                                  </div>
                              </div>
                          </div>
                      </div>

                      {/* Static Event Item 1 */}
                      <div className="col-md-6">
                          <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden hover-up">
                              <div className="position-relative">
                                  <Image 
                                    src="https://images.pexels.com/photos/1181273/pexels-photo-1181273.jpeg?auto=compress&cs=tinysrgb&w=400" 
                                    width={400}
                                    height={220}
                                    className="card-img-top object-fit-cover" 
                                    style={{ height: '220px', objectFit: 'cover' }}
                                    alt="Event Title 1"
                                  />
                                  <span className="position-absolute top-0 end-0 m-3 badge bg-white text-success shadow-sm rounded-pill px-3 py-2 text-uppercase fw-bold" style={{ fontSize: '0.75rem' }}>
                                      Event
                                  </span>
                              </div>
                              
                              <div className="card-body p-4 d-flex flex-column">
                                  <div className="text-muted small mb-2 d-flex align-items-center">
                                      <i className="far fa-clock me-2"></i> Feb 10, 2024
                                  </div>
                                  
                                  <h5 className="card-title fw-bold mb-3">
                                      <a href="#" className="text-dark text-decoration-none stretched-link">
                                          Grand Mehfil-e-Naat to be Held Next Month
                                      </a>
                                  </h5>
                                  
                                  <p className="card-text text-muted mb-4 flex-grow-1">Join us for a spiritual evening of praise for Prophet Muhammad (PBUH) on February 15th...</p>
                                  
                                  <div className="mt-auto pt-3 border-top d-flex justify-content-between align-items-center">
                                      <small className="text-primary fw-bold">
                                          <i className="fas fa-calendar-alt me-1"></i> Feb 15
                                      </small>
                                      <span className="text-primary fw-bold small">Read More <i className="fas fa-arrow-right ms-1"></i></span>
                                  </div>
                              </div>
                          </div>
                      </div>

                      {/* Static News Item 2 */}
                      <div className="col-md-6">
                          <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden hover-up">
                              <div className="position-relative">
                                  <Image 
                                    src="https://images.pexels.com/photos/7178786/pexels-photo-7178786.jpeg?auto=compress&cs=tinysrgb&w=400" 
                                    width={400}
                                    height={220}
                                    className="card-img-top object-fit-cover" 
                                    style={{ height: '220px', objectFit: 'cover' }}
                                    alt="News Title 2"
                                  />
                                  <span className="position-absolute top-0 end-0 m-3 badge bg-white text-primary shadow-sm rounded-pill px-3 py-2 text-uppercase fw-bold" style={{ fontSize: '0.75rem' }}>
                                      News
                                  </span>
                              </div>
                              
                              <div className="card-body p-4 d-flex flex-column">
                                  <div className="text-muted small mb-2 d-flex align-items-center">
                                      <i className="far fa-clock me-2"></i> Jan 05, 2024
                                  </div>
                                  
                                  <h5 className="card-title fw-bold mb-3">
                                      <a href="#" className="text-dark text-decoration-none stretched-link">
                                          New Arabic Language Course Starting Soon
                                      </a>
                                  </h5>
                                  
                                  <p className="card-text text-muted mb-4 flex-grow-1">Enroll now in our intensive Arabic language course designed for beginners and intermediates...</p>
                                  
                                  <div className="mt-auto pt-3 border-top d-flex justify-content-between align-items-center">
                                      <span></span>
                                      <span className="text-primary fw-bold small">Read More <i className="fas fa-arrow-right ms-1"></i></span>
                                  </div>
                              </div>
                          </div>
                      </div>

                      {/* Static Event Item 2 */}
                      <div className="col-md-6">
                          <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden hover-up">
                              <div className="position-relative">
                                  <Image 
                                    src="https://images.pexels.com/photos/7178822/pexels-photo-7178822.jpeg?auto=compress&cs=tinysrgb&w=400" 
                                    width={400}
                                    height={220}
                                    className="card-img-top object-fit-cover" 
                                    style={{ height: '220px', objectFit: 'cover' }}
                                    alt="Event Title 2"
                                  />
                                  <span className="position-absolute top-0 end-0 m-3 badge bg-white text-success shadow-sm rounded-pill px-3 py-2 text-uppercase fw-bold" style={{ fontSize: '0.75rem' }}>
                                      Event
                                  </span>
                              </div>
                              
                              <div className="card-body p-4 d-flex flex-column">
                                  <div className="text-muted small mb-2 d-flex align-items-center">
                                      <i className="far fa-clock me-2"></i> Mar 01, 2024
                                  </div>
                                  
                                  <h5 className="card-title fw-bold mb-3">
                                      <a href="#" className="text-dark text-decoration-none stretched-link">
                                          Seminar on Islamic Banking & Finance
                                      </a>
                                  </h5>
                                  
                                  <p className="card-text text-muted mb-4 flex-grow-1">An insightful seminar on contemporary Islamic banking practices and principles...</p>
                                  
                                  <div className="mt-auto pt-3 border-top d-flex justify-content-between align-items-center">
                                      <small className="text-primary fw-bold">
                                          <i className="fas fa-calendar-alt me-1"></i> Mar 10
                                      </small>
                                      <span className="text-primary fw-bold small">Read More <i className="fas fa-arrow-right ms-1"></i></span>
                                  </div>
                              </div>
                          </div>
                      </div>

                  </div>
              </div>
              
              {/* Sidebar */}
              <div className="col-lg-4">
                  {/* Search Widget */}
                  <div className="sidebar-card">
                      <div className="sidebar-body">
                          <div className="input-group">
                              <input type="text" className="form-control border-end-0" placeholder="Search news..." />
                              <span className="input-group-text bg-white border-start-0"><i className="fas fa-search text-muted"></i></span>
                          </div>
                      </div>
                  </div>

                  {/* Upcoming Events */}
                  <div className="sidebar-card">
                      <div className="sidebar-header">
                          <h5><i className="fas fa-calendar-check me-2"></i>Upcoming Events</h5>
                      </div>
                      <div className="sidebar-body">
                          <div className="upcoming-event-item d-flex align-items-start">
                              <div className="event-date-box flex-shrink-0">
                                  <span className="event-month">Feb</span>
                                  <span className="event-day">15</span>
                              </div>
                              <div>
                                  <h6 className="fw-bold mb-1 text-dark">
                                      <a href="#" className="text-decoration-none text-dark stretched-link">
                                          Grand Mehfil-e-Naat
                                      </a>
                                  </h6>
                                  <p className="small text-muted mb-0">Join us for a spiritual evening of praise...</p>
                              </div>
                          </div>
                          <div className="upcoming-event-item d-flex align-items-start">
                              <div className="event-date-box flex-shrink-0">
                                  <span className="event-month">Mar</span>
                                  <span className="event-day">10</span>
                              </div>
                              <div>
                                  <h6 className="fw-bold mb-1 text-dark">
                                      <a href="#" className="text-decoration-none text-dark stretched-link">
                                          Seminar on Islamic Banking
                                      </a>
                                  </h6>
                                  <p className="small text-muted mb-0">An insightful seminar on contemporary practices...</p>
                              </div>
                          </div>
                          <div className="upcoming-event-item d-flex align-items-start">
                              <div className="event-date-box flex-shrink-0">
                                  <span className="event-month">Apr</span>
                                  <span className="event-day">01</span>
                              </div>
                              <div>
                                  <h6 className="fw-bold mb-1 text-dark">
                                      <a href="#" className="text-decoration-none stretched-link">
                                          Annual Quran Recitation
                                      </a>
                                  </h6>
                                  <p className="small text-muted mb-0">Our annual Quran recitation competition...</p>
                              </div>
                          </div>
                      </div>
                  </div>
                  
                  {/* Quick Links */}
                  <div className="sidebar-card">
                      <div className="sidebar-header">
                          <h5><i className="fas fa-bolt me-2"></i>Quick Access</h5>
                      </div>
                      <div className="sidebar-body">
                          <Link href="/admission" className="quick-link-item">
                              <i className="fas fa-user-plus text-primary me-2"></i>Admission Portal
                          </Link>
                          <Link href="/courses" className="quick-link-item">
                              <i className="fas fa-book-open text-primary me-2"></i>Browse Courses
                          </Link>
                          <a href="#" className="quick-link-item">
                              <i className="fas fa-images text-primary me-2"></i>Photo Gallery
                          </a>
                          <Link href="/contact" className="quick-link-item">
                              <i className="fas fa-headset text-primary me-2"></i>Support Center
                          </Link>
                      </div>
                  </div>
                  
                  {/* Newsletter Widget */}
                  <div className="sidebar-card bg-primary text-white">
                      <div className="sidebar-body text-center">
                          <i className="fas fa-envelope-open-text fa-3x mb-3 opacity-50"></i>
                          <h5 className="fw-bold">Subscribe</h5>
                          <p className="small opacity-75 mb-3">Get the latest updates directly in your inbox.</p>
                          <form action="#" className="mb-2">
                              <input type="email" className="form-control form-control-sm mb-2" placeholder="Your Email" />
                              <button className="btn btn-light btn-sm w-100 fw-bold text-primary">Join Now</button>
                          </form>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <style jsx>{`
        .hover-up {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .hover-up:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important;
        }
      `}</style>
    </>
  );
}
