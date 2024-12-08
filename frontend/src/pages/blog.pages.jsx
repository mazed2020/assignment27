import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const BlogPage = () => {
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

      {/* Blog Details Section */}
      <section id="blog" className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">Blog Title</h2>
          <div className="row">
            <div className="col-md-8 mx-auto">
              <img
                src="https://via.placeholder.com/800x400"
                alt="Blog Thumbnail"
                className="img-fluid rounded mb-4"
              />
              <p className="lead">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                tristique, neque ac placerat ullamcorper, erat erat venenatis
                elit, vel vehicula libero nulla at ipsum. Phasellus in ligula id
                metus hendrerit consequat nec sit amet neque.
              </p>
              <p>
                Fusce vel dictum odio. Mauris accumsan, justo ac sagittis
                sollicitudin, odio nunc maximus mauris, vitae volutpat neque
                augue in magna. Sed nec lectus ut metus ornare sollicitudin.
                Suspendisse vehicula consectetur magna at pellentesque.
              </p>
              <p>
                Curabitur accumsan, felis eu consectetur pulvinar, velit dolor
                auctor velit, nec fringilla velit mi ut odio. Integer vehicula
                augue nec velit facilisis, id lacinia metus tincidunt.
              </p>
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

export default BlogPage;
