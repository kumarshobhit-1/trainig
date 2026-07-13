import React from 'react'

export const Footer = () => {
  return (
    <>
     
<footer class="bg-dark text-light pt-5 pb-3 mt-5">
  <div class="container">
    <div class="row">

      <div class="col-lg-4 col-md-6 mb-4">
        <h5 class="fw-bold">MyBlog</h5>
        <p class="text-light-emphasis">
          Sharing knowledge, tutorials, and insights on web development,
          programming, and technology.
        </p>
      </div>
      <div class="col-lg-2 col-md-6 mb-4">
        <h5 class="fw-bold">Quick Links</h5>
        <ul class="list-unstyled">
          <li><a href="#" class="text-decoration-none text-light">Home</a></li>
          <li><a href="#" class="text-decoration-none text-light">Blogs</a></li>
          <li><a href="#" class="text-decoration-none text-light">About</a></li>
          <li><a href="#" class="text-decoration-none text-light">Contact</a></li>
        </ul>
      </div>

      <div class="col-lg-3 col-md-6 mb-4">
        <h5 class="fw-bold">Categories</h5>
        <ul class="list-unstyled">
          <li><a href="#" class="text-decoration-none text-light">Java</a></li>
          <li><a href="#" class="text-decoration-none text-light">JavaScript</a></li>
          <li><a href="#" class="text-decoration-none text-light">Spring Boot</a></li>
          <li><a href="#" class="text-decoration-none text-light">Web Development</a></li>
        </ul>
      </div>

      <div class="col-lg-3 col-md-6 mb-4">
        <h5 class="fw-bold">Subscribe</h5>
        <form>
          <div class="input-group">
            <input
              type="email"
              class="form-control"
              placeholder="Enter your email"
            />
            <button class="btn btn-primary" type="submit">
              Subscribe
            </button>
          </div>
       </form>

        <div class="mt-3">
          <a href="#" class="text-light fs-4 me-3">
            <i class="bi bi-facebook"></i>
          </a>
          <a href="#" class="text-light fs-4 me-3">
            <i class="bi bi-twitter-x"></i>
          </a>
          <a href="#" class="text-light fs-4 me-3">
            <i class="bi bi-linkedin"></i>
          </a>
          <a href="#" class="text-light fs-4">
            <i class="bi bi-github"></i>
          </a>
        </div>
      </div>

    </div>

    <hr class="border-secondary" />

    <div class="text-center">
      <p class="mb-0">
        &copy; 2026 MyBlog. All Rights Reserved. Designed with ❤️ using Bootstrap 5.
      </p>
    </div>
  </div>
</footer>
    </>
  )
}
