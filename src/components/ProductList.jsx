import Card from "./Card"

function ProductList({ products }) {
    console.log('productList', products);
    return (
        <div className="container">
            <ul className="row list-unstyled d-flex flex-wrap">
                {products.map(product => {
                    return (
                        <li key={product.id} className="col-12 col-md-6 col-lg-3">
                            <Card
                                image={product.image}
                                title={product.title}
                                category={product.category}
                                description={product.description}
                                price={product.price}
                                rating={product.rating}
                            />
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
export default ProductList