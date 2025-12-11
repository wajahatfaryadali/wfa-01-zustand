import { sampleProducts } from "../../utils/sampleData";

const ProductList = () => {

    const handleAddToCart = (prod) => {
        console.log('prod to be added ', prod)
    }

    return (
        <div>
            {sampleProducts.map((product, index) => (
                <div key={index}>
                    <h2 className="font-bold">{product.id} : {product.name}</h2>
                    <p>{product.description}</p>
                    <button onClick={() => handleAddToCart(product)}>
                        add to cart
                    </button>
                    <hr />
                </div>
            ))}
        </div>
    )
}

export default ProductList