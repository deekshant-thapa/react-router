import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="container">
        <h3>Page not found</h3>
        <p>Go back to <Link to="/">Homepage</Link></p>
      </div>
    </section>
  )
}
