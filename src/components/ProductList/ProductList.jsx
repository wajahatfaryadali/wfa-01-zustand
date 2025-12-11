import { useCartStore } from "../../store/cartStore";
import { sampleProducts } from "../../utils/sampleData";

const ProductList = () => {

    const addToCart = useCartStore(state => state.addToCart)

    const handleAddToCart = (prod) => {
        addToCart(prod)
    }

    return (
        <div>
            {sampleProducts.map((product, index) => (
                <div key={index}>
                    <h2 className="font-bold">{product.id} : {product.name}</h2>
                    <p>{product.description}</p>
                    <button onClick={() => handleAddToCart(product)} className={'border border-green-500 px-3 py-1 m-1'}>
                        add to cart
                    </button>
                    <hr />
                </div>
            ))}
        </div>
    )
}

export default ProductList