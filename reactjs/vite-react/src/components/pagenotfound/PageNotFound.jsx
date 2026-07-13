import React from 'react'
import { Link } from 'react-router-dom'

export const PageNotFound = () => {
  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="text-center">
        <h1
          className="display-1 fw-bold text-danger"
          style={{ fontSize: "8rem" }}
        >
          404
        </h1>

        <h2 className="fw-bold mb-3">Oops! Page Not Found</h2>

        <p className="text-muted mb-4">
          The page you are looking for doesn't exist or has been moved.
        </p>

        <Link to="/" className="btn btn-primary btn-lg">
          ← Back to Home
        </Link>
      </div>
    </div>
  )
}
