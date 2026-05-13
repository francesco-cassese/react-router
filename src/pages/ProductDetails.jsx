function ProductDetails() {
    return (
        <Card
            image={filteredProduct.image}
            title={filteredProduct.title}
            category={filteredProduct.category}
            description={filteredProduct.description}
            price={filteredProduct.price}
            rating={filteredProduct.rating}
        />
    )
}
export default ProductDetails