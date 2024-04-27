import { Link } from "react-router-dom"
import "./Item.css"

const Item = ({ id, description, img, price, stock }) => {
  return (
    <article className={stock > 0 ? "CardItem" : "CardItem SinStock"}>
      <header className="Header">
        <h6 className="ItemHeader">{description}</h6>
      </header>
      <picture>
        <img src={img} alt={description} className="ItemImg" />
      </picture>
      <section>
        <p className="Info"> Precio: ${price}</p>
        <p className="Info">
          {stock > 0 ? (
            "Stock disponible: " + stock
          ) : (
            <span className="SpanSinStock">Sin stock</span>
          )}
        </p>
      </section>
      <footer className="ItemFooter">
        <Link to={`/item/${id}`} className="Option">
          Ver detalle
        </Link>
      </footer>
    </article>
  )
}

export default Item
