import "./CartWidget.css"
import Cart from "../../assets/Cart.svg"
import { useContext } from "react"
import { CartContext } from "../../contexts/CartContext"
import { Link } from "react-router-dom"

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext)

  return (
    <Link
      to="/cart"
      className="CartWidget"
      style={{ display: totalQuantity > 0 ? "block" : "none" }}
    >
      <span id="contadorCarrito" className="badge text-bg-danger">
        {totalQuantity}
      </span>
      <img className="CartImg" src={Cart} alt="cart-widget" />
    </Link>
  )
}

export default CartWidget
