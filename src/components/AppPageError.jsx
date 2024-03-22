import { Link, useRouteError } from "react-router-dom"

export default function AppPageError() {
    const error = useRouteError();
    return (
        <div className="pages">
            <h1>
                Oops - Something went wrong
            </h1>
            <p>{error.message}</p>
            <Link to="/">Go Back Home</Link>
        </div>
    )
}
