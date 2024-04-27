import { useContext } from "react"
import "./Cart.css"
import { CartContext } from "../../contexts/CartContext"
import CartItem from "../CartItem/CartItem"
import { Link } from "react-router-dom"

const Cart = () => {
  const { cart, clearCart, totalQuantity, total } = useContext(CartContext)

  if (totalQuantity === 0) {
    return (
      <div>
        <h1>No hay items en el carrito</h1>
        <Link to="/" className="Option">
          Productos
        </Link>
      </div>
    )
  }

  return (
    <div className="cart-container">
      {cart.map((p) => (
        <CartItem className="cartItem-child" key={p.id} {...p} />
      ))}
      <h3 className="total-cart">Total: ${total}</h3>
      <div>
        <button onClick={() => clearCart()} className="Button">
          Limpiar carrito
        </button>
        <Link to="/checkout" className="Option">
          Checkout
        </Link>
      </div>
    </div>
  )
}
export default Cart
