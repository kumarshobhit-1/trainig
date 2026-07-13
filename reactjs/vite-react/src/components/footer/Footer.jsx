import React from 'react'

export const Footer = () => {
  return (
    <>
     
<footer className="bg-dark text-light pt-5 pb-3 mt-5">
  <div className="container">
    <div className="row">

      <div className="col-lg-4 col-md-6 mb-4">
        <h5 className="fw-bold">MyBlog</h5>
        <p className="text-light-emphasis">
          Sharing knowledge, tutorials, and insights on web development,
          programming, and technology.
        </p>
      </div>
      <div className="col-lg-2 col-md-6 mb-4">
        <h5 className="fw-bold">Quick Links</h5>
        <ul className="list-unstyled">
          <li><a href="#" className="text-decoration-none text-light">Home</a></li>
          <li><a href="#" className="text-decoration-none text-light">Blogs</a></li>
          <li><a href="#" className="text-decoration-none text-light">About</a></li>
          <li><a href="#" className="text-decoration-none text-light">Contact</a></li>
        </ul>
      </div>

      <div className="col-lg-3 col-md-6 mb-4">
        <h5 className="fw-bold">Categories</h5>
        <ul className="list-unstyled">
          <li><a href="#" className="text-decoration-none text-light">Java</a></li>
          <li><a href="#" className="text-decoration-none text-light">JavaScript</a></li>
          <li><a href="#" className="text-decoration-none text-light">Spring Boot</a></li>
          <li><a href="#" className="text-decoration-none text-light">Web Development</a></li>
        </ul>
      </div>

      <div className="col-lg-3 col-md-6 mb-4">
        <h5 className="fw-bold">Subscribe</h5>
        <form>
          <div className="input-group">
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
            />
            <button className="btn btn-primary" type="submit">
              Subscribe
            </button>
          </div>
       </form>

        <div className="mt-3">
          <a href="#" className="text-light fs-4 me-3">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="#" className="text-light fs-4 me-3">
            <i className="bi bi-twitter-x"></i>
          </a>
          <a href="#" className="text-light fs-4 me-3">
            <i className="bi bi-linkedin"></i>
          </a>
          <a href="#" className="text-light fs-4">
            <i className="bi bi-github"></i>
          </a>
        </div>
      </div>

    </div>

    <hr className="border-secondary" />

    <div className="text-center">
      <p className="mb-0">
        &copy; 2026 MyBlog. All Rights Reserved. Designed with ❤️ using Bootstrap 5.
      </p>
    </div>
  </div>
</footer>
    </>
  )
}
