import { useContext, useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import "./ItemDetail.css"
import { Link } from "react-router-dom"
import { CartContext } from "../../contexts/CartContext"

const ItemDetail = ({ id, description, img, categoryId, price, stock }) => {
  const [quantityAdded, setQuantityAdded] = useState(0)

  const { addItem } = useContext(CartContext)

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity)

    const item = {
      id,
      description,
      price,
      img,
    }

    addItem(item, quantity)
  }

  return (
    <article className="CardItem">
      <header className="Header">
        <h6 className="ItemHeader">{description}</h6>
      </header>
      <picture>
        <img src={img} alt={description} className="ItemImg" />
      </picture>
      <section>
        <p className="Info"> Categoria: {categoryId}</p>
        <p className="Info"> Precio: ${price}</p>
        <p className={stock ? "Info" : "Info sinStock"}>
          {" "}
          Stock disponible: {stock}
        </p>
      </section>
      <footer className="ItemFooter">
        {quantityAdded > 0 ? (
          <Link to="/cart" className="Option">
            Terminar compra
          </Link>
        ) : (
          <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
        )}
      </footer>
    </article>
  )
}
export default ItemDetail
