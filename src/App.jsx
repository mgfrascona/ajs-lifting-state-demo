import { useState } from 'react'

import Cart from './components/Cart'
import CartSummary from './components/CartSummary'
import ProductList from './components/ProductList'

const App = () => {
    const [ cart, setCart ] = useState([])

    const onAddToCart = product => {
        setCart([...cart, product])
    }

    const onRemoveFromCart = index => {
        setCart(cart.filter((item, i) => i !== index))
    }

    console.log('Cart:', cart)

    return (
        <div>
            <CartSummary itemCount={cart.length} />
            <ProductList
                onAddToCart={onAddToCart}
            />
            <Cart
                items={cart}
                onRemove={onRemoveFromCart}
            />
        </div>
    )
}

export default App
