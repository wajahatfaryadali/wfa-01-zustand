import { useCartStore, useCartStoreSelectors } from "../../store/cartStore"

const Cart = () => {
    // const cart = []

    // const cart = useCartStore(state => state.cart)
    // const removeFromCart = useCartStore(state => state.removeFromCart)
    // const clearCart = useCartStore(state => state.clearCart)

    const cart = useCartStoreSelectors.use.cart();
    const removeFromCart = useCartStoreSelectors.use.removeFromCart();
    const clearCart = useCartStoreSelectors.use.clearCart();



    const handleRemoveFromCart = (product) => {
        removeFromCart(product)
    }

    const handleEmptyCart = () => {
        clearCart()
    }

    if (!cart.length) {
        return <div>empty cart...</div>
    }

    return (
        <div className="flex items-center gap-3 flex-col">
            {cart?.map((prod, index) => (
                <div key={index}>
                    <span className={''}>{prod.id} : {prod.name}</span>
                    <button onClick={() => handleRemoveFromCart(prod)} className={'border border-red-500 px-4 py-1 m-1'}>remove</button>
                    <hr className={"border-b-orange-500"} />
                </div>
            ))}
            {cart.length ?
                <button onClick={handleEmptyCart} className={'border border-red-900 bg-red-400 px-4 py-2'}>
                    clear all
                </button>
                :
                <div />
            }
        </div>
    )
}

export default Cart