import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ServicePage = () => {
  return (
    <div>
      {/* Menu Section */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            MyWebsite
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#footer">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Services Section */}
      <section id="services" className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">Our Services</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card text-center shadow-sm">
                <div className="card-body">
                  <div className="icon mb-3">
                    <i className="bi bi-briefcase-fill fs-1 text-primary"></i>
                  </div>
                  <h5 className="card-title">Service One</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card text-center shadow-sm">
                <div className="card-body">
                  <div className="icon mb-3">
                    <i className="bi bi-gear-fill fs-1 text-primary"></i>
                  </div>
                  <h5 className="card-title">Service Two</h5>
                  <p className="card-text">
                    Praesent tincidunt, turpis ac venenatis luctus.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card text-center shadow-sm">
                <div className="card-body">
                  <div className="icon mb-3">
                    <i className="bi bi-chat-dots-fill fs-1 text-primary"></i>
                  </div>
                  <h5 className="card-title">Service Three</h5>
                  <p className="card-text">
                    Phasellus ut velit scelerisque, faucibus lorem quis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer id="footer" className="bg-dark text-white text-center py-4">
        <div className="container">
          <p className="mb-0">&copy; 2024 MyWebsite. All rights reserved.</p>
          <a href="#" className="text-white ms-3">
            Privacy Policy
          </a>
          <a href="#" className="text-white ms-3">
            Terms of Service
          </a>
        </div>
      </footer>
    </div>
  );
};

export default ServicePage;
