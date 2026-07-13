import React from "react";

export const About = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-dark text-white py-5">
        <div className="container text-center">
          <h1 className="display-4 fw-bold">About Us</h1>
          <p className="lead mt-3">
            Welcome to MyBlog, where we share knowledge, ideas, and inspiration
            through quality articles.
          </p>
        </div>
      </section>

      {/* About */}
      <section className="container py-5">
        <div className="row align-items-center">

          <div className="col-lg-6 mb-4">
            <img
              src="https://picsum.photos/600/400"
              className="img-fluid rounded shadow"
              alt="About"
            />
          </div>

          <div className="col-lg-6">
            <h2 className="fw-bold mb-3">Who We Are</h2>

            <p className="text-muted">
              MyBlog is a platform created for developers, students, and
              technology enthusiasts who love learning and sharing knowledge.
              We publish high-quality tutorials, programming tips, and
              technology news.
            </p>

            <p className="text-muted">
              Our goal is to make learning simple, practical, and accessible
              for everyone.
            </p>

            <button className="btn btn-primary mt-3">
              Learn More
            </button>
          </div>

        </div>
      </section>

      {/* Mission */}
      <section className="bg-light py-5">
        <div className="container text-center">

          <h2 className="fw-bold mb-5">Our Mission</h2>

          <div className="row">

            <div className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                  <h3>📚</h3>
                  <h5>Educate</h5>
                  <p className="text-muted">
                    Create easy-to-understand tutorials and learning resources.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                  <h3>💡</h3>
                  <h5>Inspire</h5>
                  <p className="text-muted">
                    Encourage developers to build innovative projects and
                    improve their skills.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                  <h3>🌍</h3>
                  <h5>Connect</h5>
                  <p className="text-muted">
                    Build a community where people can learn and grow together.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container py-5">
        <h2 className="text-center fw-bold mb-5">
          Why Choose Us?
        </h2>

        <div className="row">

          <div className="col-md-6 mb-4">
            <div className="card shadow-sm border-0">
              <div className="card-body">
                <h5>✔ High Quality Content</h5>
                <p className="text-muted">
                  Every article is carefully researched and written.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className="card shadow-sm border-0">
              <div className="card-body">
                <h5>✔ Beginner Friendly</h5>
                <p className="text-muted">
                  Tutorials are easy to follow for beginners.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className="card shadow-sm border-0">
              <div className="card-body">
                <h5>✔ Regular Updates</h5>
                <p className="text-muted">
                  Fresh content is published every week.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className="card shadow-sm border-0">
              <div className="card-body">
                <h5>✔ Free Resources</h5>
                <p className="text-muted">
                  Access free tutorials, guides, and coding tips.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Team */}
      <section className="bg-light py-5">
        <div className="container">

          <h2 className="text-center fw-bold mb-5">
            Meet Our Team
          </h2>

          <div className="row justify-content-center">

            <div className="col-md-4">
              <div className="card shadow-sm text-center border-0">
                <div className="card-body">

                  <img
                    src="https://i.pravatar.cc/150?img=12"
                    className="rounded-circle mb-3"
                    width="120"
                    alt="Founder"
                  />

                  <h4>John Doe</h4>

                  <p className="text-muted">
                    Founder & Content Creator
                  </p>

                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-white py-5">
        <div className="container text-center">

          <h2>Join Our Community</h2>

          <p className="mb-4">
            Stay updated with the latest articles and tutorials.
          </p>

          <button className="btn btn-light btn-lg">
            Explore Blogs
          </button>

        </div>
      </section>
    </>
  );
};

