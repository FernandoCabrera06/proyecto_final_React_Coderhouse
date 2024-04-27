import { createContext, useState } from "react"

export const CartContext = createContext({
  cart: [],
})

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const addItem = (item, quantity) => {
    if (!isInCart(item.id)) {
      setCart((prev) => [...prev, { ...item, quantity }])
    } else {
      console.error("El producto ya fue agregado")
    }
  }

  const removeItem = (itemId) => {
    const cartUpdated = cart.filter((prod) => prod.id !== itemId)
    setCart(cartUpdated)
  }

  const clearCart = () => {
    setCart([])
  }

  const isInCart = (itemId) => {
    return cart.some((prod) => prod.id === itemId)
  }

  const totalQuantity = cart.reduce((acum, product) => {
    return acum + product.quantity
  }, 0)

  const total = cart.reduce((acum, product) => {
    return acum + product.quantity * product.price
  }, 0)

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, clearCart, totalQuantity, total }}
    >
      {children}
    </CartContext.Provider>
  )
}
