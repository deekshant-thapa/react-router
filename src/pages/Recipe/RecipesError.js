import { useRouteError, Link } from "react-router-dom"

export default function RecipesError() {

    const error = useRouteError();

    return (
      <div className="recipe-error">
          <h3>oops, looks like an error</h3>
          <p>{error.message}</p>
          <p>Back to <Link to='/' className="homepage-redirect">Homepage</Link></p>
      </div>
    )
  }
