import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
        <div className="container">
            <div className="footer-top-section">
                <div className="row g-4">
                    <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                        <div className="footer-branding">
                            <i className="fas fa-mosque me-2"></i>Jamia Shere Rabbani
                        </div>
                        <p className="text-white-50 mb-4">A leading Islamic educational institution dedicated to spiritual and academic excellence.</p>
                        <div className="footer-social-links">
                            <a href="#" aria-label="Facebook" data-bs-toggle="tooltip" data-bs-placement="top" title="Facebook"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" aria-label="Twitter" data-bs-toggle="tooltip" data-bs-placement="top" title="Twitter"><i className="fab fa-twitter"></i></a>
                            <a href="#" aria-label="YouTube" data-bs-toggle="tooltip" data-bs-placement="top" title="YouTube"><i className="fab fa-youtube"></i></a>
                            <a href="#" aria-label="Instagram" data-bs-toggle="tooltip" data-bs-placement="top" title="Instagram"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                    
                    <div className="col-lg-2 col-md-6 mb-4 mb-lg-0 footer-links">
                        <h5>Quick Links</h5>
                        <ul>
                            <li><Link href="/about">About Us</Link></li>
                            <li><Link href="/courses">Courses</Link></li>
                            <li><Link href="/teachers">Teachers</Link></li>
                            <li><Link href="/admission">Admission</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    
                    <div className="col-lg-3 col-md-6 mb-4 mb-lg-0 footer-contact">
                        <h5>Contact Info</h5>
                        <div className="footer-contact-item">
                            <i className="fas fa-map-marker-alt"></i>
                            <div>
                                <p className="mb-0">Mananwala, Nankana Sahib, Punjab, Pakistan</p>
                            </div>
                        </div>
                        <div className="footer-contact-item">
                            <i className="fas fa-phone"></i>
                            <div>
                                <a href="tel:+923001234567">+92-300-1234567</a>
                            </div>
                        </div>
                        <div className="footer-contact-item">
                            <i className="fas fa-envelope"></i>
                            <div>
                                <a href="mailto:info@jamia.com">info@jamia.com</a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-3 col-md-6 footer-newsletter">
                        <h5>Newsletter</h5>
                        <p className="text-white-50 mb-3">Subscribe to our newsletter for latest updates and news.</p>
                        <form action="#" method="POST">
                            <div className="input-group mb-3">
                                <input type="email" className="form-control" placeholder="Your Email Address" required />
                            </div>
                            <button className="btn btn-primary" type="submit">Subscribe Now</button>
                        </form>
                    </div>
                </div>
            </div>
            
            <div className="footer-bottom text-center">
                <p className="mb-0">&copy; 2024 <Link href="/" className="text-white-50">Jamia Shere Rabbani Mananwala</Link>. All rights reserved.</p>
                <p className="mb-0 mt-1">Designed with <i className="fas fa-heart text-danger mx-1"></i> for Islamic Education</p>
            </div>
        </div>

        {/* Back to Top Button */}
        <a href="#" className="back-to-top" id="backToTop">
            <i className="fas fa-arrow-up"></i>
        </a>
    </footer>
  );
}
