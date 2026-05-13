import { useParams } from "react-router"
import Card from "../components/Card.jsx";

function ProductDetails({ productList }) {

    const { id } = useParams();
    const productIdReal = parseInt(id);

    if (!productIdReal) {
        return (
            <div className="container py-5 text-center">
                <h3>Prodotto in caricamento o non trovato...</h3>
            </div>
        );
    }

    return (
        <div className="container py-5 d-flex justify-content-center">
            <Card
                image={productList.image}
                title={productList.title}
                category={productList.category}
                description={productList.description}
                price={productList.price}
                rating={productList.rating}
            />
        </div>
    )
}
export default ProductDetails