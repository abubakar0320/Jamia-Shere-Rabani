"use client";

import Link from 'next/link';

export default function Admission() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Application submitted successfully! (Demo)');
  };

  return (
    <>
      <div className="page-header">
          <div className="container">
              <h1 className="display-4 fw-bold mb-3">Online Admission</h1>
              <p className="lead mb-4">Start your journey of knowledge with Jamia Shere Rabbani.</p>
              <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                      <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                      <li className="breadcrumb-item active" aria-current="page">Admission</li>
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
          <div className="row justify-content-center">
              <div className="col-lg-10">
                  {/* Progress/Info Card */}
                  <div className="card border-0 shadow-sm rounded-4 mb-5 overflow-hidden">
                      <div className="card-body p-0">
                          <div className="row g-0">
                              <div className="col-md-4 bg-primary text-white p-4 p-lg-5 d-flex flex-column justify-content-center">
                                  <h3 className="fw-bold mb-3">Why Apply Online?</h3>
                                  <ul className="list-unstyled mb-0 opacity-75">
                                      <li className="mb-3"><i className="fas fa-check-circle me-2"></i> Fast & Secure Process</li>
                                      <li className="mb-3"><i className="fas fa-check-circle me-2"></i> Track Application Status</li>
                                      <li className="mb-3"><i className="fas fa-check-circle me-2"></i> Instant Confirmation</li>
                                      <li><i className="fas fa-check-circle me-2"></i> 24/7 Support Available</li>
                                  </ul>
                              </div>
                              <div className="col-md-8 p-4 p-lg-5 bg-white">
                                  <h4 class="mb-4 text-primary">Admission Requirements</h4>
                                  <div className="row g-4">
                                      <div className="col-sm-6">
                                          <div className="d-flex">
                                              <div className="flex-shrink-0">
                                                  <i className="fas fa-id-card text-primary fa-lg"></i>
                                              </div>
                                              <div className="ms-3">
                                                  <h6 className="fw-bold mb-1">Valid CNIC/B-Form</h6>
                                                  <p className="small text-muted mb-0">Student&apos;s own identification document.</p>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="col-sm-6">
                                          <div className="d-flex">
                                              <div className="flex-shrink-0">
                                                  <i className="fas fa-user-tie text-primary fa-lg"></i>
                                              </div>
                                              <div className="ms-3">
                                                  <h6 className="fw-bold mb-1">Guardian Info</h6>
                                                  <p className="small text-muted mb-0">Father or Guardian&apos;s CNIC copy.</p>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="col-sm-6">
                                          <div className="d-flex">
                                              <div className="flex-shrink-0">
                                                  <i className="fas fa-camera text-primary fa-lg"></i>
                                              </div>
                                              <div className="ms-3">
                                                  <h6 className="fw-bold mb-1">Recent Photographs</h6>
                                                  <p className="small text-muted mb-0">Passport size blue background photos.</p>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="col-sm-6">
                                          <div className="d-flex">
                                              <div className="flex-shrink-0">
                                                  <i className="fas fa-file-alt text-primary fa-lg"></i>
                                              </div>
                                              <div className="ms-3">
                                                  <h6 className="fw-bold mb-1">Academic Records</h6>
                                                  <p className="small text-muted mb-0">Certificates of previous education.</p>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>

                  {/* Form Card */}
                  <div className="card border-0 shadow-lg rounded-4 overflow-hidden">
                      <div className="card-header bg-white border-0 pt-5 px-5 pb-0">
                          <div className="text-center">
                              <span className="badge bg-light text-primary rounded-pill px-3 py-2 mb-2">Registration Form</span>
                              <h2 className="fw-bold text-dark">Student Registration</h2>
                              <p className="text-muted">Please fill in all the required fields carefully.</p>
                          </div>
                      </div>
                      <div className="card-body p-5">
                          <form onSubmit={handleSubmit} className="needs-validation form-floating-custom">
                              
                              {/* Step 1: Personal Info */}
                              <div className="step-indicator">
                                  <div className="step-number">1</div>
                                  <h5 className="fw-bold mb-4 pt-1">Personal Information</h5>
                              </div>
                              
                              <div className="row g-4 mb-5">
                                  <div className="col-md-6">
                                      <label htmlFor="name" className="form-label-custom">Full Name <span className="text-danger">*</span></label>
                                      <input type="text" className="form-control" id="name" name="name" placeholder="Enter full name" required />
                                  </div>
                                  <div className="col-md-6">
                                      <label htmlFor="father_name" className="form-label-custom">Father&apos;s Name <span className="text-danger">*</span></label>
                                      <input type="text" className="form-control" id="father_name" name="father_name" placeholder="Enter father's name" required />
                                  </div>
                                  <div className="col-md-6">
                                      <label htmlFor="dob" className="form-label-custom">Date of Birth <span className="text-danger">*</span></label>
                                      <input type="date" className="form-control" id="dob" name="dob" required />
                                  </div>
                                  <div className="col-md-6">
                                      <label htmlFor="cnic" className="form-label-custom">CNIC / B-Form <span className="text-danger">*</span></label>
                                      <input type="text" className="form-control" id="cnic" name="cnic" placeholder="12345-1234567-1" required />
                                  </div>
                                  <div className="col-12">
                                      <label htmlFor="address" className="form-label-custom">Residential Address <span className="text-danger">*</span></label>
                                      <textarea className="form-control" id="address" name="address" rows={3} placeholder="Enter complete address" required></textarea>
                                  </div>
                              </div>

                              {/* Step 2: Academic & Guardian */}
                              <div className="step-indicator">
                                  <div className="step-number">2</div>
                                  <h5 className="fw-bold mb-4 pt-1">Academic & Guardian Details</h5>
                              </div>

                              <div className="row g-4 mb-5">
                                  <div className="col-md-6">
                                      <label htmlFor="course" className="form-label-custom">Select Program <span className="text-danger">*</span></label>
                                      <select className="form-select" id="course" name="course" defaultValue="" required>
                                          <option value="" disabled>Choose a course...</option>
                                          <option value="Hifz-e-Quran">Hifz-e-Quran</option>
                                          <option value="Dars-e-Nizami">Dars-e-Nizami</option>
                                          <option value="Islamic-Studies">Islamic Studies</option>
                                          <option value="Qirat-Course">Qirat Course</option>
                                      </select>
                                  </div>
                                  <div className="col-md-6">
                                      <label htmlFor="previous_education" className="form-label-custom">Previous Qualification</label>
                                      <input type="text" className="form-control" id="previous_education" name="previous_education" placeholder="e.g. Matric, Middle" />
                                  </div>
                                  <div className="col-md-6">
                                      <label htmlFor="guardian_name" className="form-label-custom">Guardian Name <span className="text-danger">*</span></label>
                                      <input type="text" className="form-control" id="guardian_name" name="guardian_name" required />
                                  </div>
                                  <div className="col-md-6">
                                      <label htmlFor="guardian_phone" className="form-label-custom">Guardian Phone <span className="text-danger">*</span></label>
                                      <input type="tel" className="form-control" id="guardian_phone" name="guardian_phone" placeholder="0300-1234567" required />
                                  </div>
                              </div>

                              {/* Step 3: Documents */}
                              <div className="step-indicator">
                                  <div className="step-number">3</div>
                                  <h5 className="fw-bold mb-4 pt-1">Document Upload</h5>
                              </div>

                              <div className="row g-4 mb-5">
                                  <div className="col-md-6">
                                      <label className="form-label-custom">Student Photo <span className="text-danger">*</span></label>
                                      <div className="alert alert-info small mt-2">
                                          File upload functionality removed for basic PHP. Please submit physical documents.
                                      </div>
                                  </div>
                                  <div className="col-md-6">
                                      <label className="form-label-custom">CNIC/B-Form Scan</label>
                                      <div className="alert alert-info small mt-2">
                                          File upload functionality removed for basic PHP. Please submit physical documents.
                                      </div>
                                  </div>
                              </div>

                              <div className="form-check mb-4">
                                  <input className="form-check-input" type="checkbox" id="terms" name="terms" required />
                                  <label className="form-check-label small" htmlFor="terms">
                                      I hereby declare that the information provided is true and correct. I agree to abide by the rules and regulations of the institution.
                                  </label>
                              </div>

                              <div className="d-grid gap-2">
                                  <button type="submit" className="btn btn-primary btn-lg py-3 rounded-3 shadow-sm fw-bold">
                                      <i className="fas fa-paper-plane me-2"></i> Submit Application
                                  </button>
                              </div>
                          </form>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </>
  );
}
