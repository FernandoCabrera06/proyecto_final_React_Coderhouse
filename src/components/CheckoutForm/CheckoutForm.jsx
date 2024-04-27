import { useState } from "react"
import "./CheckoutForm.css"

const CheckoutForm = ({ onConfirm }) => {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")

  const handleConfirm = (event) => {
    event.preventDefault()

    const userData = {
      name,
      phone,
      email,
    }

    onConfirm(userData)
  }

  return (
    <div className="formContainer">
      <form onSubmit={handleConfirm} className="Form">
        <label className="Label">Nombre</label>
        <input
          type="text"
          className="Input"
          value={name}
          onChange={({ target }) => setName(target.value)}
        />

        <label className="Label">Phone</label>
        <input
          type="text"
          className="Input"
          value={phone}
          onChange={({ target }) => setPhone(target.value)}
        />

        <label className="Label">Email</label>
        <input
          type="text"
          className="Input"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        />
        <button type="submit" className="Button">
          Crear Orden
        </button>
      </form>
    </div>
  )
}

export default CheckoutForm
