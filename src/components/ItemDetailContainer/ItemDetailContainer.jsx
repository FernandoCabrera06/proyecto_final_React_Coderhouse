import React, { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import ClipLoader from "react-spinners/ClipLoader"
import "./ItemDetailContainer.css"

import { getDoc, doc } from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const { itemId } = useParams()

  useEffect(() => {
    setLoading(true)

    const docRef = doc(db, "items", itemId)

    getDoc(docRef)
      .then((response) => {
        const data = response.data()
        const productAdapted = { id: response.id, ...data }
        setProduct(productAdapted)
      })
      .catch((error) => {
        console.error(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [itemId])

  return (
    <div className="ItemDetailContainer">
      {loading ? (
        <ClipLoader className="spinner" size={50} />
      ) : (
        <ItemDetail {...product} />
      )}
    </div>
  )
}

export default ItemDetailContainer
