import React from "react";

const blogs = [
  {
    id: 1,
    title: "Getting Started with React",
    image: "https://picsum.photos/400/250?random=1",
    author: "John Doe",
    date: "July 13, 2026",
  },
  {
    id: 2,
    title: "Learn Bootstrap 5 in One Day",
    image: "https://picsum.photos/400/250?random=2",
    author: "Alex",
    date: "July 12, 2026",
  },
  {
    id: 3,
    title: "Top 10 JavaScript Tips",
    image: "https://picsum.photos/400/250?random=3",
    author: "Emma",
    date: "July 11, 2026",
  },
  {
    id: 4,
    title: "Node.js Complete Guide",
    image: "https://picsum.photos/400/250?random=4",
    author: "David",
    date: "July 10, 2026",
  },
];

export const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary text-white py-5">
        <div className="container text-center">
          <h1 className="display-4 fw-bold">Welcome to My Blog</h1>

          <p className="lead mt-3">
            Read the latest articles on React, JavaScript, Java, Spring Boot,
            and Web Development.
          </p>

          <div className="row justify-content-center mt-4">
            <div className="col-md-6">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search blog..."
                />
                <button className="btn btn-dark">Search</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Blogs */}
      <div className="container my-5">
        <h2 className="fw-bold mb-4">Featured Posts</h2>

        <div className="row">
          {blogs.map((blog) => (
            <div className="col-lg-3 col-md-6 mb-4" key={blog.id}>
              <div className="card h-100 shadow-sm">

                <img
                  src={blog.image}
                  className="card-img-top"
                  alt={blog.title}
                />

                <div className="card-body">
                  <h5 className="card-title">{blog.title}</h5>

                  <p className="text-muted small">
                    By {blog.author} • {blog.date}
                  </p>

                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>

                  <button className="btn btn-primary">
                    Read More
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Categories */}
      <section className="bg-light py-5">
        <div className="container">

          <h2 className="fw-bold text-center mb-4">
            Popular Categories
          </h2>

          <div className="row text-center">

            <div className="col-md-3 mb-3">
              <div className="card p-4 shadow-sm">
                <h4>React</h4>
              </div>
            </div>

            <div className="col-md-3 mb-3">
              <div className="card p-4 shadow-sm">
                <h4>Java</h4>
              </div>
            </div>

            <div className="col-md-3 mb-3">
              <div className="card p-4 shadow-sm">
                <h4>Spring Boot</h4>
              </div>
            </div>

            <div className="col-md-3 mb-3">
              <div className="card p-4 shadow-sm">
                <h4>JavaScript</h4>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="container my-5">
        <div className="bg-dark text-white rounded p-5 text-center">

          <h2>Subscribe to Our Newsletter</h2>

          <p className="mb-4">
            Get the latest blog posts delivered directly to your inbox.
          </p>

          <div className="row justify-content-center">
            <div className="col-md-6">

              <div className="input-group">

                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                />

                <button className="btn btn-warning">
                  Subscribe
                </button>

              </div>

            </div>
          </div>

        </div>
      </section>
    </>
  );
};

