import { useState } from "react"

function Card({ image, title, category, description, price, rating }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleDescription = event => {
        event.preventDefault();
        setIsExpanded(!isExpanded);
    };
    return (
        < article className="card p-3 h-100 d-flex flex-column justify-content-between shadow" >
            <h5 className="card-title line-clamp">{title}</h5>
            <div className="container-img">
                <img src={image} alt={title} className="d-block w-100 mb-2" />
            </div>
            <div className="container-info small">
                <span className="badge rounded-pill bg-success mb-2 p-2">{category}</span>
                <p
                    className={`card-text text-muted ${isExpanded ? "" : "clamp-3"}`}
                    onClick={toggleDescription}
                >{description}</p>
                <div className="container-details d-flex justify-content-between">
                    <div className="container-price d-flex flex-column">
                        <span className="text-muted">Price</span>
                        <span className="fw-bold">&euro;{price}</span>
                    </div>
                    <div className="container-rate d-flex flex-column">
                        <span className="text-muted">Rate</span>
                        <span>⭐{rating?.rate}</span>
                    </div>
                    <div className="container-count d-flex flex-column">
                        <span className="text-muted">Count</span>
                        <span className="text-muted">{rating?.count}</span>
                    </div>
                </div>
            </div>
        </article >
    )
}
export default Card
