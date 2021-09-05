import { useParams } from "react-router-dom";


const BLogDetails = () => {
    const { id } = useParams()

    return (
        <div className="blog-detail">
            <h2>Blog information - { id }</h2>
        </div>
    );
}
 
export default BLogDetails;