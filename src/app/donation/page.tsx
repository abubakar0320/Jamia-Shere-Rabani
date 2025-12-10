"use client";

import Link from 'next/link';

export default function Donation() {
  const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      alert('Thank you for your generous donation! (Demo)');
  };

  return (
    <>
      <div className="page-header">
          <div className="container">
              <h1 className="display-4 fw-bold mb-3">Support Our Mission</h1>
              <p className="lead mb-4">Your generous donation helps us provide quality Islamic education to deserving students.</p>
              <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                      <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                      <li className="breadcrumb-item active" aria-current="page">Donation</li>
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
              {/* Donation Information Side */}
              <div className="col-lg-5">
                  <div className="donation-benefits-card p-4 p-lg-5 shadow-sm border-0">
                      <h3 className="fw-bold text-primary mb-4">Why Contribute?</h3>
                      <p className="text-muted mb-4">Your contribution is an investment in the future of our Ummah. It supports:</p>
                      
                      <div className="benefit-item d-flex align-items-center">
                          <div className="flex-shrink-0 text-primary">
                              <i className="fas fa-graduation-cap fa-2x"></i>
                          </div>
                          <div className="ms-3">
                              <h6 className="fw-bold mb-1">Student Scholarships</h6>
                              <p className="small text-muted mb-0">Sponsor education for the needy.</p>
                          </div>
                      </div>
                      
                      <div className="benefit-item d-flex align-items-center">
                          <div className="flex-shrink-0 text-primary">
                              <i className="fas fa-book-reader fa-2x"></i>
                          </div>
                          <div className="ms-3">
                              <h6 className="fw-bold mb-1">Educational Resources</h6>
                              <p className="small text-muted mb-0">Providing books and digital tools.</p>
                          </div>
                      </div>
                      
                      <div className="benefit-item d-flex align-items-center">
                          <div className="flex-shrink-0 text-primary">
                              <i className="fas fa-mosque fa-2x"></i>
                          </div>
                          <div className="ms-3">
                              <h6 className="fw-bold mb-1">Infrastructure</h6>
                              <p className="small text-muted mb-0">Building better facilities.</p>
                          </div>
                      </div>
                      
                      <div className="benefit-item d-flex align-items-center">
                          <div className="flex-shrink-0 text-primary">
                              <i className="fas fa-hands-helping fa-2x"></i>
                          </div>
                          <div className="ms-3">
                              <h6 className="fw-bold mb-1">Sadqa Jariyah</h6>
                              <p className="small text-muted mb-0">Earn continuous rewards.</p>
                          </div>
                      </div>
                      
                      <div className="mt-4 p-4 bg-primary text-white rounded-3 text-center">
                          <h5 className="fw-bold mb-2">&quot;The best of you are those who learn the Quran and teach it.&quot;</h5>
                          <p className="small opacity-75 mb-0">- Sahih Al-Bukhari</p>
                      </div>
                  </div>
              </div>
              
              {/* Donation Form Side */}
              <div className="col-lg-7">
                  <div className="card border-0 shadow-lg rounded-4 overflow-hidden">
                      <div className="card-header bg-white border-0 pt-5 px-5 pb-0">
                          <h3 className="fw-bold text-dark mb-1">Make a Donation</h3>
                          <p className="text-muted">Fill out the form below to proceed.</p>
                      </div>
                      <div className="card-body p-5">
                          
                          <form onSubmit={handleSubmit} className="needs-validation form-floating-custom">
                              
                              <div className="row g-3">
                                  <div className="col-md-6">
                                      <label htmlFor="donor_name" className="form-label-custom">Donor Name <span className="text-danger">*</span></label>
                                      <input type="text" className="form-control" id="donor_name" name="donor_name" placeholder="Full Name" required />
                                  </div>
                                  <div className="col-md-6">
                                      <label htmlFor="donor_phone" className="form-label-custom">Contact Number</label>
                                      <input type="tel" className="form-control" id="donor_phone" name="donor_phone" placeholder="0300-1234567" />
                                  </div>
                                  <div className="col-md-12">
                                      <label htmlFor="donor_email" className="form-label-custom">Email Address</label>
                                      <input type="email" className="form-control" id="donor_email" name="donor_email" placeholder="email@example.com" />
                                  </div>
                                  
                                  <div className="col-md-6">
                                      <label htmlFor="amount" className="form-label-custom">Amount (PKR) <span className="text-danger">*</span></label>
                                      <div className="input-group">
                                          <span className="input-group-text bg-light border-end-0">Rs.</span>
                                          <input type="number" className="form-control border-start-0 ps-0" id="amount" name="amount" min="100" placeholder="5000" required />
                                      </div>
                                  </div>
                                  <div className="col-md-6">
                                      <label htmlFor="purpose" className="form-label-custom">Donation Purpose <span className="text-danger">*</span></label>
                                      <select className="form-select" id="purpose" name="purpose" defaultValue="" required>
                                          <option value="" disabled>Select Purpose...</option>
                                          <option value="general">General Fund</option>
                                          <option value="zakat">Zakat</option>
                                          <option value="sadqa">Sadqa</option>
                                          <option value="scholarships">Scholarship Fund</option>
                                          <option value="construction">Masjid Construction</option>
                                      </select>
                                  </div>
                                  
                                  <div className="col-12">
                                      <label htmlFor="message" className="form-label-custom">Message (Optional)</label>
                                      <textarea className="form-control" id="message" name="message" rows={3} placeholder="Any special instructions or prayers..."></textarea>
                                  </div>
                              </div>
                              
                              <div className="d-grid mt-4">
                                  <button type="submit" className="btn btn-primary btn-lg py-3 rounded-pill fw-bold shadow-sm">
                                      <i className="fas fa-hand-holding-heart me-2"></i> Donate Now
                                  </button>
                              </div>
                          </form>
                      </div>
                  </div>
              </div>
          </div>
          
          {/* Payment Methods & Impact */}
          <div className="row g-4 mt-4">
              {/* Payment Methods */}
              <div className="col-lg-12">
                  <div className="card border-0 shadow-sm rounded-4 p-4 bg-light-pattern">
                      <h4 className="text-center fw-bold text-dark mb-4">Payment Methods</h4>
                      <div className="row g-4">
                          <div className="col-md-6">
                              <div className="payment-method-card">
                                  <div className="d-flex align-items-center mb-3">
                                      <div className="bg-primary bg-opacity-10 p-3 rounded-circle text-primary me-3">
                                          <i className="fas fa-university fa-2x"></i>
                                      </div>
                                      <h5 className="fw-bold mb-0">Bank Transfer</h5>
                                  </div>
                                  <div className="ps-2 border-start border-3 border-primary ms-3">
                                      <p className="mb-1 ms-2"><small className="text-muted text-uppercase fw-bold">Bank Name</small><br /><strong>Allied Bank Limited</strong></p>
                                      <p className="mb-1 ms-2"><small class="text-muted text-uppercase fw-bold">Account Title</small><br /><strong>Jamia Shere Rabbani</strong></p>
                                      <p className="mb-0 ms-2"><small className="text-muted text-uppercase fw-bold">Account No.</small><br /><span className="font-monospace fs-5">1234 5678 9012 3456</span></p>
                                  </div>
                              </div>
                          </div>
                          <div className="col-md-6">
                              <div className="payment-method-card">
                                  <div className="d-flex align-items-center mb-3">
                                      <div className="bg-success bg-opacity-10 p-3 rounded-circle text-success me-3">
                                          <i className="fas fa-mobile-alt fa-2x"></i>
                                      </div>
                                      <h5 className="fw-bold mb-0">Mobile Wallets</h5>
                                  </div>
                                  <div className="row">
                                      <div className="col-6">
                                          <div className="p-2 rounded bg-white border text-center">
                                              <h6 className="fw-bold text-danger mb-1">JazzCash</h6>
                                              <span className="font-monospace">03XX-XXXXXXX</span>
                                          </div>
                                      </div>
                                      <div className="col-6">
                                          <div className="p-2 rounded bg-white border text-center">
                                              <h6 className="fw-bold text-success mb-1">EasyPaisa</h6>
                                              <span className="font-monospace">03XX-XXXXXXX</span>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          {/* Impact Stats */}
          <div className="row g-4 mt-4">
              <div className="col-12 text-center mb-2">
                  <h3 className="fw-bold">Your Impact</h3>
                  <p className="text-muted">See what your donation can achieve</p>
              </div>
              <div className="col-md-3 col-sm-6">
                  <div className="impact-card p-4 text-center">
                      <i className="fas fa-book fa-3x text-primary mb-3"></i>
                      <h4 className="fw-bold">Rs. 5,000</h4>
                      <p className="small text-muted mb-0">Provides books for one student for a year.</p>
                  </div>
              </div>
              <div className="col-md-3 col-sm-6">
                  <div className="impact-card p-4 text-center">
                      <i className="fas fa-user-graduate fa-3x text-success mb-3"></i>
                      <h4 className="fw-bold">Rs. 15,000</h4>
                      <p className="small text-muted mb-0">Sponsors a student&apos;s full monthly expense.</p>
                  </div>
              </div>
              <div className="col-md-3 col-sm-6">
                  <div className="impact-card p-4 text-center">
                      <i className="fas fa-utensils fa-3x text-warning mb-3"></i>
                      <h4 className="fw-bold">Rs. 25,000</h4>
                      <p className="small text-muted mb-0">Provides meals for 50 hostel students.</p>
                  </div>
              </div>
              <div className="col-md-3 col-sm-6">
                  <div className="impact-card p-4 text-center">
                      <i className="fas fa-laptop fa-3x text-info mb-3"></i>
                      <h4 className="fw-bold">Rs. 50,000</h4>
                      <p className="small text-muted mb-0">Funds digital learning equipment.</p>
                  </div>
              </div>
          </div>
      </div>
    </>
  );
}
