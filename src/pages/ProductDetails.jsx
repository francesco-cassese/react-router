import { useParams } from "react-router"
import Card from "../components/Card.jsx";
import useFetch from "../hooks/useFetch.js";

function ProductDetails({ productList, fakeEcomUrl }) {

    const { id } = useParams();

    const product = useFetch(`${fakeEcomUrl}/${id}`);
    console.log(`${fakeEcomUrl}/${id}`);

    if (!product) {
        return (
            <div className="container py-5 text-center">
                <h3>Prodotto in caricamento...</h3>
            </div>
        );
    }

    return (
        <Card
            image={product.image}
            title={product.title}
            category={product.category}
            description={product.description}
            price={product.price}
            rating={product.rating}
        />
    )
}
export default ProductDetails