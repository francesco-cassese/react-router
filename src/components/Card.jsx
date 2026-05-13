function Card({ image, title, category, description, price, rating }) {
    return (
        <section className="container py-2">
            <div className="d-flex align-items-center">
                <div className="section-left">
                    <div className="single-product-img">
                        <img src={image} alt={title} />
                    </div>
                </div>
                <div className="section-right mx-5">
                    <h1 className="display-6 fw-semibold mb-3">{title}</h1>
                    <span className="badge bg-success mb-3">{category}</span>
                    <h2 className="fw-bold">&euro;{price}</h2>
                    <p>⭐ {rating?.rate} ({rating?.count})</p>
                    <div className="product-description">
                        <h3>Descrizione</h3>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Card
