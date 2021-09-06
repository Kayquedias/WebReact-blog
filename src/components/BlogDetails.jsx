import { useHistory, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";


const BLogDetails = () => {
    const { id } = useParams()
    const { data: blog, isPending, error} = useFetch('http://localhost:8000/blogs/' + id)
    const history = useHistory()

    const handleDelete = () => {
        fetch('http://localhost:8000/blogs/' + id, {
            method: "DELETE"
        })
        .then(() => {
            history.push('/')
        })
    }

    return (
        <div className="blog-detail">
            {isPending && <div>Loading...</div>}
            {error && <div>{ error }</div>}
            {blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                    <div>{ blog.body }</div>
                </article>
            )}
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
}
 
export default BLogDetails;