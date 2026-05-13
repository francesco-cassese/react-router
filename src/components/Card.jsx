import { useState } from "react"

function Card({ image, title, category, description, price, rating }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleDescription = event => {
        event.preventDefault();
        setIsExpanded(!isExpanded);
    };
    return (
        <section className="d-flex">
            <div className="section-left">
                <div className="single-product-img">
                    <img src={image} alt={title} />
                </div>
            </div>
            <div className="section-right">
                <h1>{title}</h1>
                <span className="badge bg-succes">{category}</span>
                <span className="fw-bold">&euro;{price}</span>
            </div>

        </section>
    )
}
export default Card
