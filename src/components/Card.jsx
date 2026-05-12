function Card() {
    return (
        <article>
            <div className="container-img">
                <img src={image} alt={title} />
            </div>
            <h1>{title}</h1>
            <div className="container-info">
                <span>{category}</span>
                <p>{description}</p>
                <span>{price}</span>
                <span>{rating.rate}</span>
            </div>
        </article>
    )
}
export default Card


// category
// :
// "men's clothing"
// description
// :
// "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
// id
// :
// 1
// image
// :
// "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"
// price
// :
// 109.95
// rating
// :
// count
// :
// 120
// rate
// :
// 3.9
// [[Prototype]]
// :
// Object
// title
// :
// "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"