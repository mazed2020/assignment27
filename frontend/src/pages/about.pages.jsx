import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const AboutPage = () => {
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
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#team">
                  Team
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

      {/* About Section */}
      <section id="about" className="py-5">
        <div className="container text-center">
          <h2>About Us</h2>
          <p className="lead">
            We are a passionate team dedicated to delivering exceptional
            services and creating impactful solutions for our clients.
          </p>
          <p>
            Our mission is to innovate and excel in every project, ensuring our
            customers achieve their goals with confidence and success.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4">Our Team</h2>
          <div className="row">
            <div className="col-md-4 text-center">
              <img
                src="https://via.placeholder.com/150"
                className="rounded-circle mb-3"
                alt="Team Member 1"
              />
              <h5>John Doe</h5>
              <p>CEO & Founder</p>
            </div>
            <div className="col-md-4 text-center">
              <img
                src="https://via.placeholder.com/150"
                className="rounded-circle mb-3"
                alt="Team Member 2"
              />
              <h5>Jane Smith</h5>
              <p>Lead Developer</p>
            </div>
            <div className="col-md-4 text-center">
              <img
                src="https://via.placeholder.com/150"
                className="rounded-circle mb-3"
                alt="Team Member 3"
              />
              <h5>Mike Johnson</h5>
              <p>Project Manager</p>
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

export default AboutPage;
