import React from "react";

export const Dashboard = () => {
  return (
    <div className="container py-5">

      {/* Welcome */}
      <div className="bg-primary text-white rounded-4 p-4 mb-4">
        <h2>Welcome Back, John 👋</h2>
        <p className="mb-0">
          Manage your blog posts, comments, and profile from here.
        </p>
      </div>

      {/* Stats */}
      <div className="row mb-4">

        <div className="col-md-3 mb-3">
          <div className="card shadow-sm text-center">
            <div className="card-body">
              <h5>Total Posts</h5>
              <h2 className="text-primary">25</h2>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-3">
          <div className="card shadow-sm text-center">
            <div className="card-body">
              <h5>Likes</h5>
              <h2 className="text-success">520</h2>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-3">
          <div className="card shadow-sm text-center">
            <div className="card-body">
              <h5>Comments</h5>
              <h2 className="text-warning">134</h2>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-3">
          <div className="card shadow-sm text-center">
            <div className="card-body">
              <h5>Bookmarks</h5>
              <h2 className="text-danger">18</h2>
            </div>
          </div>
        </div>

      </div>

      <div className="row">

        {/* Left */}
        <div className="col-lg-8">

          {/* My Posts */}
          <div className="card shadow-sm mb-4">
            <div className="card-header fw-bold">
              My Recent Posts
            </div>

            <div className="table-responsive">
              <table className="table table-hover mb-0">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Status</th>
                    <th>Views</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>

                  <tr>
                    <td>Getting Started with React</td>
                    <td>
                      <span className="badge bg-success">
                        Published
                      </span>
                    </td>
                    <td>1,230</td>
                    <td>
                      <button className="btn btn-sm btn-primary">
                        Edit
                      </button>
                    </td>
                  </tr>

                  <tr>
                    <td>Bootstrap 5 Guide</td>
                    <td>
                      <span className="badge bg-warning text-dark">
                        Draft
                      </span>
                    </td>
                    <td>450</td>
                    <td>
                      <button className="btn btn-sm btn-primary">
                        Edit
                      </button>
                    </td>
                  </tr>

                  <tr>
                    <td>JavaScript ES6</td>
                    <td>
                      <span className="badge bg-success">
                        Published
                      </span>
                    </td>
                    <td>980</td>
                    <td>
                      <button className="btn btn-sm btn-primary">
                        Edit
                      </button>
                    </td>
                  </tr>

                </tbody>
              </table>
            </div>
          </div>

          {/* Recent Comments */}
          <div className="card shadow-sm">
            <div className="card-header fw-bold">
              Recent Comments
            </div>

            <ul className="list-group list-group-flush">

              <li className="list-group-item">
                <strong>Alice:</strong> Great article!
              </li>

              <li className="list-group-item">
                <strong>Bob:</strong> Very informative.
              </li>

              <li className="list-group-item">
                <strong>Emma:</strong> Thanks for sharing.
              </li>

            </ul>
          </div>

        </div>

        {/* Right */}
        <div className="col-lg-4">

          {/* Profile */}
          <div className="card shadow-sm mb-4">
            <div className="card-body text-center">

              <img
                src="https://i.pravatar.cc/150?img=12"
                className="rounded-circle mb-3"
                width="120"
                alt="Profile"
              />

              <h4>John Doe</h4>

              <p className="text-muted">
                johndoe@gmail.com
              </p>

              <button className="btn btn-outline-primary w-100">
                Edit Profile
              </button>

            </div>
          </div>

          {/* Quick Actions */}
          <div className="card shadow-sm">
            <div className="card-header fw-bold">
              Quick Actions
            </div>

            <div className="card-body d-grid gap-2">

              <button className="btn btn-success">
                + Create New Post
              </button>

              <button className="btn btn-primary">
                My Posts
              </button>

              <button className="btn btn-warning">
                Saved Posts
              </button>

              <button className="btn btn-danger">
                Logout
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

