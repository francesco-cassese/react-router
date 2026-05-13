import { useState } from "react"

function Card({ image, title, category, description, price, rating }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleDescription = event => {
        event.preventDefault();
        setIsExpanded(!isExpanded);
    };
    return (
        <section>
            <div className="d-flex">
                <div className="section-left">
                    <div className="single-product-img">
                        <img src={image} alt={title} />
                    </div>
                </div>
                <div className="section-right">
                    <h1>{title}</h1>
                    <p className="bg-succes">{category}</p>
                    <h2 className="fw-bold">&euro;{price}</h2>
                    <p>⭐ {rating?.rate} ({rating?.count})</p>
                </div>
            </div>
            <div className="product-description">
                <h3>Descrizione</h3>
                <p>{description}</p>
            </div>

        </section>
    )
}
export default Card
