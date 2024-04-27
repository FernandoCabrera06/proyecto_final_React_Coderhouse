import "./CartItem.css"
import { CartContext } from "../../contexts/CartContext"
import { useContext } from "react"
import Trash from "../../assets/Trash.svg"

const CartItem = (product) => {
  const { removeItem } = useContext(CartContext)

  return (
    <div className="cartItem-container">
      <img className="imgProducto" src={product.img} alt="producto" />
      <p>{product.description}</p>
      <p>
        <strong>Cantidad: </strong>
        {product.quantity}
      </p>
      <p>
        <strong>Precio unitario: $</strong>
        {product.price}
      </p>
      <p>
        <strong>Subtotal: $</strong>
        {product.price * product.quantity}
      </p>
      <button className="TrashButton" onClick={() => removeItem(product.id)}>
        <img className="TrashImg" src={Trash} alt="trash" />
      </button>
    </div>
  )
}
export default CartItem
