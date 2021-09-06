import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div className="unknown-page">
            <h2>Sorry, page not found /:</h2>
            <p>We could not access the requested page.</p>
            <Link to="/">Return to the main page</Link>
        </div>
    );
}
 
export default NotFoundPage;