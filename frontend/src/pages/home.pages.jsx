import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const HomePage = () => {
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
                <a className="nav-link" href="#hero">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#blog">
                  Blog
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

      {/* Hero Section */}
      <section id="hero" className="bg-primary text-white text-center py-5">
        <div className="container">
          <h1>Welcome to MyWebsite</h1>
          <p className="lead">Explore our latest blogs and updates</p>
          <a href="#blog" className="btn btn-light btn-lg">
            Read More
          </a>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">Latest Blogs</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card">
                <img
                  src="https://via.placeholder.com/150"
                  className="card-img-top"
                  alt="Blog 1"
                />
                <div className="card-body">
                  <h5 className="card-title">Blog Title 1</h5>
                  <p className="card-text">
                    A short description of the blog content goes here.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card">
                <img
                  src="https://via.placeholder.com/150"
                  className="card-img-top"
                  alt="Blog 2"
                />
                <div className="card-body">
                  <h5 className="card-title">Blog Title 2</h5>
                  <p className="card-text">
                    A short description of the blog content goes here.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card">
                <img
                  src="https://via.placeholder.com/150"
                  className="card-img-top"
                  alt="Blog 3"
                />
                <div className="card-body">
                  <h5 className="card-title">Blog Title 3</h5>
                  <p className="card-text">
                    A short description of the blog content goes here.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Read More
                  </a>
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

export default HomePage;
