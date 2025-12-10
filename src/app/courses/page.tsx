import Link from 'next/link';

export default function Courses() {
  return (
    <>
      <div className="page-header">
          <div className="container">
              <h1 className="display-4 fw-bold mb-3">Courses Offered</h1>
              <p className="lead mb-4">Explore our comprehensive range of Islamic education programs designed to nurture knowledge and character.</p>
              <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                      <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                      <li className="breadcrumb-item active" aria-current="page">Courses</li>
                  </ol>
              </nav>
          </div>
          <div className="custom-shape-divider-bottom-16689839">
              <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                  <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
              </svg>
          </div>
      </div>

      {/* Courses Grid Section */}
      <section className="section-padding bg-light-pattern">
          <div className="container">
              <div className="row g-4">
                  <div className="col-lg-6">
                      <div className="modern-course-card">
                          <div className="course-card-body d-flex flex-column h-100">
                              <h3 className="course-title">Hifz-e-Quran</h3>
                              <p className="card-text text-muted">Complete memorization of the Holy Quran with proper Tajweed and pronunciation.</p>
                              
                              <div className="course-meta">
                                  <div className="course-meta-item">
                                      <span className="course-meta-label">Duration</span>
                                      <div className="course-meta-value">
                                          <i className="far fa-clock"></i> 2-4 Years
                                      </div>
                                  </div>
                                  <div className="course-meta-item">
                                      <span className="course-meta-label">Eligibility</span>
                                      <div className="course-meta-value">
                                          <i className="fas fa-user-graduate"></i> Age 6-16
                                      </div>
                                  </div>
                              </div>
                              
                              <div className="course-actions">
                                  <a href="#" className="btn btn-outline-primary flex-grow-1" target="_blank">
                                      <i className="fas fa-download me-1"></i> Syllabus
                                  </a>
                                  <Link href="/admission?course=Hifz-e-Quran" className="btn btn-primary flex-grow-1">
                                      <i className="fas fa-edit me-1"></i> Apply Now
                                  </Link>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-6">
                      <div className="modern-course-card">
                          <div className="course-card-body d-flex flex-column h-100">
                              <h3 className="course-title">Dars-e-Nizami</h3>
                              <p className="card-text text-muted">Comprehensive traditional Islamic curriculum covering various sciences.</p>
                              
                              <div className="course-meta">
                                  <div className="course-meta-item">
                                      <span className="course-meta-label">Duration</span>
                                      <div className="course-meta-value">
                                          <i className="far fa-clock"></i> 8 Years
                                      </div>
                                  </div>
                                  <div className="course-meta-item">
                                      <span className="course-meta-label">Eligibility</span>
                                      <div className="course-meta-value">
                                          <i className="fas fa-user-graduate"></i> Matric / Hafiz
                                      </div>
                                  </div>
                              </div>
                              
                              <div className="course-actions">
                                  <a href="#" className="btn btn-outline-primary flex-grow-1" target="_blank">
                                      <i className="fas fa-download me-1"></i> Syllabus
                                  </a>
                                  <Link href="/admission?course=Dars-e-Nizami" className="btn btn-primary flex-grow-1">
                                      <i className="fas fa-edit me-1"></i> Apply Now
                                  </Link>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-6">
                      <div className="modern-course-card">
                          <div className="course-card-body d-flex flex-column h-100">
                              <h3 className="course-title">Islamic Studies</h3>
                              <p className="card-text text-muted">Foundational course covering basic Islamic beliefs, practices, and history.</p>
                              
                              <div className="course-meta">
                                  <div className="course-meta-item">
                                      <span className="course-meta-label">Duration</span>
                                      <div className="course-meta-value">
                                          <i className="far fa-clock"></i> 1 Year
                                      </div>
                                  </div>
                                  <div className="course-meta-item">
                                      <span className="course-meta-label">Eligibility</span>
                                      <div className="course-meta-value">
                                          <i className="fas fa-user-graduate"></i> Any Background
                                      </div>
                                  </div>
                              </div>
                              
                              <div className="course-actions">
                                  <Link href="/admission?course=Islamic-Studies" className="btn btn-primary flex-grow-1">
                                      <i className="fas fa-edit me-1"></i> Apply Now
                                  </Link>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-6">
                      <div className="modern-course-card">
                          <div className="course-card-body d-flex flex-column h-100">
                              <h3 className="course-title">Qirat Course</h3>
                              <p className="card-text text-muted">Advanced course in Quranic recitation with various Qirat styles.</p>
                              
                              <div className="course-meta">
                                  <div className="course-meta-item">
                                      <span className="course-meta-label">Duration</span>
                                      <div className="course-meta-value">
                                          <i className="far fa-clock"></i> 2 Years
                                      </div>
                                  </div>
                                  <div className="course-meta-item">
                                      <span className="course-meta-label">Eligibility</span>
                                      <div className="course-meta-value">
                                          <i className="fas fa-user-graduate"></i> Hafiz-e-Quran
                                      </div>
                                  </div>
                              </div>
                              
                              <div className="course-actions">
                                  <Link href="/admission?course=Qirat-Course" className="btn btn-primary flex-grow-1">
                                      <i className="fas fa-edit me-1"></i> Apply Now
                                  </Link>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* Course Features Section */}
      <section className="section-padding">
          <div className="container">
              <div className="section-title-wrapper">
                  <h2 className="section-title">Why Choose Our Courses?</h2>
                  <p className="text-muted">We provide a balanced approach to Islamic education</p>
              </div>
              
              <div className="row g-4">
                  <div className="col-md-4">
                      <div className="course-feature-box">
                          <div className="course-feature-icon">
                              <i className="fas fa-book-open"></i>
                          </div>
                          <h5>Comprehensive Curriculum</h5>
                          <p className="text-muted mb-0">Well-structured courses covering all aspects of Islamic education, blending traditional wisdom with modern teaching methods.</p>
                      </div>
                  </div>
                  <div className="col-md-4">
                      <div className="course-feature-box">
                          <div className="course-feature-icon">
                              <i className="fas fa-chalkboard-teacher"></i>
                          </div>
                          <h5>Expert Faculty</h5>
                          <p className="text-muted mb-0">Learn directly from qualified and experienced Islamic scholars (Ulama) who have dedicated their lives to teaching.</p>
                      </div>
                  </div>
                  <div className="col-md-4">
                      <div className="course-feature-box">
                          <div className="course-feature-icon">
                              <i className="fas fa-certificate"></i>
                          </div>
                          <h5>Recognized Certification</h5>
                          <p className="text-muted mb-0">Receive certificates upon successful completion, recognized by major Islamic educational boards and institutions.</p>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* Course Categories Section */}
      <section className="section-padding bg-light">
          <div className="container">
              <div className="section-title-wrapper">
                  <h2 className="section-title">Program Categories</h2>
                  <p className="text-muted">Explore our diverse fields of study</p>
              </div>
              
              <div className="row g-4">
                  <div className="col-md-6">
                      <div className="category-card">
                          <div className="category-header">
                              <div className="category-icon">
                                  <i className="fas fa-quran"></i>
                              </div>
                              <h4 className="mb-0 text-white">Quranic Studies</h4>
                          </div>
                          <div className="category-body">
                              <ul className="category-list">
                                  <li><i className="fas fa-check-circle"></i>Hifz-e-Quran (Memorization)</li>
                                  <li><i className="fas fa-check-circle"></i>Qirat (Advanced Recitation)</li>
                                  <li><i className="fas fa-check-circle"></i>Tajweed (Correct Pronunciation)</li>
                                  <li><i className="fas fa-check-circle"></i>Tafseer (Exegesis & Interpretation)</li>
                              </ul>
                          </div>
                      </div>
                  </div>
                  <div className="col-md-6">
                      <div className="category-card">
                          <div className="category-header bg-success">
                              <div className="category-icon">
                                  <i className="fas fa-mosque"></i>
                              </div>
                              <h4 className="mb-0 text-white">Islamic Sciences</h4>
                          </div>
                          <div className="category-body">
                              <ul className="category-list">
                                  <li><i className="fas fa-check-circle"></i>Hadith Studies (Prophetic Traditions)</li>
                                  <li><i className="fas fa-check-circle"></i>Fiqh (Islamic Jurisprudence)</li>
                                  <li><i className="fas fa-check-circle"></i>Arabic Language & Grammar</li>
                                  <li><i className="fas fa-check-circle"></i>Seerah & Islamic History</li>
                              </ul>
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
              <h2 className="display-5 fw-bold mb-4">Start Your Spiritual Journey Today</h2>
              <p className="lead mb-5 opacity-75">Enroll in our courses and deepen your understanding of Islam under the guidance of expert scholars.</p>
              <div className="d-flex justify-content-center gap-3 flex-wrap">
                  <Link href="/admission" className="btn btn-light btn-lg px-4 py-3 text-primary fw-bold">
                      <i className="fas fa-graduation-cap me-2"></i>Apply for Admission
                  </Link>
                  <Link href="/contact" className="btn btn-outline-light btn-lg px-4 py-3">
                      <i className="fas fa-envelope me-2"></i>Contact Us
                  </Link>
              </div>
          </div>
      </section>
    </>
  );
}
