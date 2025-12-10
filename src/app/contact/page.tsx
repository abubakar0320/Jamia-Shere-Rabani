"use client";

import Link from 'next/link';

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! This is a demo site, so no email was sent.');
  };

  return (
    <>
      <div className="page-header">
          <div className="container">
              <h1 className="display-4 fw-bold mb-3">Contact Us</h1>
              <p className="lead mb-4">Get in touch with us for any inquiries, information, or support.</p>
              <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                      <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                      <li className="breadcrumb-item active" aria-current="page">Contact</li>
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
              {/* Contact Information */}
              <div className="col-lg-4">
                  <div className="contact-info-card shadow-lg">
                      <h3 className="fw-bold text-white mb-4">Reach Out To Us</h3>
                      
                      <div className="info-item d-flex align-items-start mb-4">
                          <div className="icon-box me-3">
                              <i className="fas fa-map-marker-alt"></i>
                          </div>
                          <div>
                              <h6>Our Address</h6>
                              <p className="mb-0">Mananwala, Nankana Sahib, Punjab, Pakistan</p>
                          </div>
                      </div>
                      
                      <div className="info-item d-flex align-items-start mb-4">
                          <div className="icon-box me-3">
                              <i className="fas fa-phone"></i>
                          </div>
                          <div>
                              <h6>Phone Number</h6>
                              <p className="mb-0"><a href="tel:+923001234567">+92-300-1234567</a></p>
                          </div>
                      </div>
                      
                      <div className="info-item d-flex align-items-start mb-4">
                          <div className="icon-box me-3">
                              <i className="fas fa-envelope"></i>
                          </div>
                          <div>
                              <h6>Email Address</h6>
                              <p className="mb-0"><a href="mailto:info@jamia.com">info@jamia.com</a></p>
                          </div>
                      </div>
                      
                      <div className="info-item d-flex align-items-start">
                          <div className="icon-box me-3">
                              <i className="fas fa-clock"></i>
                          </div>
                          <div>
                              <h6>Office Hours</h6>
                              <p className="mb-0">Mon - Fri: 8:00 AM - 5:00 PM</p>
                              <p className="mb-0">Sat: 8:00 AM - 12:00 PM</p>
                          </div>
                      </div>
                  </div>
              </div>
              
              {/* Contact Form */}
              <div className="col-lg-8">
                  <div className="contact-form-card shadow-lg">
                      <h3 className="fw-bold text-dark mb-4 text-center">Send Us a Message</h3>
                      <p className="text-muted text-center mb-5">We are here to help and answer any question you might have. We look forward to hearing from you.</p>
                      
                      <form onSubmit={handleSubmit} className="needs-validation">
                          
                          <div className="row g-4 mb-4">
                              <div className="col-md-6">
                                  <label htmlFor="name" className="form-label visually-hidden">Your Name</label>
                                  <input type="text" className="form-control" id="name" name="name" 
                                         placeholder="Your Full Name *" required />
                              </div>
                              <div className="col-md-6">
                                  <label htmlFor="email" className="form-label visually-hidden">Email Address</label>
                                  <input type="email" className="form-control" id="email" name="email" 
                                         placeholder="Your Email Address *" required />
                              </div>
                          </div>
                          
                          <div className="mb-4">
                              <label htmlFor="subject" className="form-label visually-hidden">Subject</label>
                              <input type="text" className="form-control" id="subject" name="subject" 
                                     placeholder="Subject (Optional)" />
                          </div>
                          
                          <div className="mb-4">
                              <label htmlFor="message" className="form-label visually-hidden">Message</label>
                              <textarea className="form-control" id="message" name="message" rows={6} 
                                        placeholder="Your Message *" required></textarea>
                          </div>
                          
                          <div className="text-center">
                              <button type="submit" className="btn btn-primary btn-lg px-5 py-3 rounded-pill fw-bold">
                                  <i className="fas fa-paper-plane me-2"></i>Send Message
                              </button>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
          
          {/* Google Maps */}
          <div className="row mt-5">
              <div className="col-12">
                  <div className="map-container">
                      <iframe 
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.8179455!2d74.35!3d31.52!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDMxJzEyLjAiTiA3NMKwMjEnMDAuMCJF!5e0!3m2!1sen!2s!4v1234567890!5m2!1sen!2s" 
                          width="100%" 
                          height="450" 
                          style={{ border: 0 }} 
                          allowFullScreen
                          loading="lazy" 
                          referrerPolicy="no-referrer-when-downgrade">
                      </iframe>
                      <div className="map-overlay position-absolute p-3">
                          <div className="bg-white p-3 rounded-3 shadow">
                              <h6 className="text-primary mb-2">
                                  <i className="fas fa-mosque me-2"></i>Jamia Shere Rabbani Mananwala
                              </h6>
                              <p className="small mb-0 text-muted">Mananwala, Nankana Sahib, Punjab, Pakistan</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      {/* FAQ Section */}
      <section className="section-padding bg-light-pattern">
          <div className="container">
              <div className="section-title-wrapper">
                  <h2 className="section-title">Frequently Asked Questions</h2>
                  <p className="text-muted">Find answers to common questions about our institution</p>
              </div>
              <div className="row">
                  <div className="col-lg-8 mx-auto">
                      <div className="accordion faq-accordion" id="faqAccordion">
                          <div className="accordion-item">
                              <h2 className="accordion-header" id="faq1">
                                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                                      What are the admission requirements?
                                  </button>
                              </h2>
                              <div id="collapse1" className="accordion-collapse collapse show" aria-labelledby="faq1" data-bs-parent="#faqAccordion">
                                  <div className="accordion-body">
                                      Admission requirements vary by course. Generally, we require a completed application form, 
                                      educational certificates, CNIC copy, and photographs. Specific requirements are listed for each course.
                                  </div>
                              </div>
                          </div>
                          
                          <div className="accordion-item">
                              <h2 className="accordion-header" id="faq2">
                                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                                      What are the fees for different courses?
                                  </button>
                              </h2>
                              <div id="collapse2" className="accordion-collapse collapse" aria-labelledby="faq2" data-bs-parent="#faqAccordion">
                                  <div className="accordion-body">
                                      Our fees are very reasonable and vary by course. For detailed fee information, 
                                      please contact us directly or visit our office. We also offer scholarships for deserving students.
                                  </div>
                              </div>
                          </div>
                          
                          <div className="accordion-item">
                              <h2 className="accordion-header" id="faq3">
                                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                                      Do you provide accommodation?
                                  </button>
                              </h2>
                              <div id="collapse3" className="accordion-collapse collapse" aria-labelledby="faq3" data-bs-parent="#faqAccordion">
                                  <div className="accordion-body">
                                      Yes, we provide hostel facilities for out-of-town students. The hostel has all basic amenities 
                                      and is supervised by qualified staff. Please contact us for availability and charges.
                                  </div>
                              </div>
                          </div>
                          
                          <div className="accordion-item">
                              <h2 className="accordion-header" id="faq4">
                                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                                      When does the admission process start?
                                  </button>
                              </h2>
                              <div id="collapse4" className="accordion-collapse collapse" aria-labelledby="faq4" data-bs-parent="#faqAccordion">
                                  <div className="accordion-body">
                                      Admissions are open throughout the year for most courses. However, we recommend applying 
                                      at least one month before the desired starting date to complete all formalities.
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    </>
  );
}
