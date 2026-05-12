function Card({ image, title, category, description, price, rating }) {
    return (
        < article className="card p-3 h-100 d-flex f-column justify-content-between" >
            <h5>{title}</h5>
            <div className="container-img">
                <img src={image} alt={title} className="d-block w-100" />
            </div>
            <div className="container-info small">
                <span>{category}</span>
                <p>{description}</p>
                <div className="container-details d-flex fw-bold justify-content-between">
                    <span>&euro;{price}</span>
                    <span>{rating?.rate}</span>
                    <span>{rating?.count}</span>
                </div>
            </div>
        </article>
    )
}
export default Card
