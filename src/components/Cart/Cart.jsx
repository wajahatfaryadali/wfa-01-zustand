
const Cart = () => {
    let cart = []
    const handleRemoveFromCart = (product) => {
        console.log(product)
    }

    const handleEmptyCart = () => {
        console.log('clear')
    }

    if(!cart.length){
        return <div>empty cart...</div>
    }

    return (
        <div>
            {cart?.map(prod => (
                <div key={prod.id}>
                    <span className={classes.span}>{prod.name}</span>
                    <button onClick={() => handleRemoveFromCart(prod.id)} className={classes.button}>remove</button>
                    <hr className={classes.hr} />
                </div>
            ))}
            {cart.length ?
                <button onClick={handleEmptyCart} className={classes.button}>
                    empty cart
                </button>
                :
                <div />
            }
        </div>
    )
}

export default Cart