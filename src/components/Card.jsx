function Card({ image, title, category, description, price, rating }) {
    return (
        <section className="container py-4">
            <div className="d-flex align-items-center">
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
