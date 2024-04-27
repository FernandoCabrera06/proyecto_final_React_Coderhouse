import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import { getDocs, collection, query, where } from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"

import ItemList from "../ItemList/ItemList"
import ClipLoader from "react-spinners/ClipLoader"
import "./ItemListContainer.css"

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const { categoryId } = useParams()

  useEffect(() => {
    setLoading(true)
    const collectionRef = categoryId
      ? query(collection(db, "items"), where("categoryId", "==", categoryId))
      : collection(db, "items")

    getDocs(collectionRef)
      .then((response) => {
        const productsAdapted = response.docs.map((doc) => {
          const data = doc.data()
          return { id: doc.id, ...data }
        })
        setProducts(productsAdapted)
      })
      .catch((error) => {
        console.error(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [categoryId])

  return (
    <div>
      {loading ? (
        <ClipLoader className="spinner" size={50} />
      ) : (
        <>
          <h1>{greeting}</h1>
          <ItemList products={products} />
        </>
      )}
    </div>
  )
}

export default ItemListContainer
