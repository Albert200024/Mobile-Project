import React, { useState } from 'react'
import { useParams } from 'react-router'
import { Data } from './Date/Date'
import { useDispatch, useSelector } from 'react-redux'
import { AddItem, DeletItem } from '../store/cartSlice'

const ProductDetali = () => {
    const [cartBtn, setCartBtn] = useState("Add to Cart") 
    const proid = useParams()
    let filterID = Data.filter(item => item.id === Number(proid.id))
    const product = filterID[0]
    const dispaatch = useDispatch()

    const hadleCart = (product) => {
          if(cartBtn === "Add to Cart" ){
              dispaatch(AddItem({product}))
              setCartBtn("Remove to Cart") 
          } else {
            dispaatch(DeletItem({product}))
            setCartBtn("Add to Cart") 
          }
    }
    
   return (
    <>
         <div className="container my-5 py-3">
              <div className="row">
                  <div className="col-md-6 d-flex justify-content-center mx-auto product">
                      <img src={product.img} alt={product.title} height="400px" />
                  </div>
                  <div className="col-md-6 d-flex flex-column justify-content-center">
                      <h1 className="display-5 fw-bold">{product.title}</h1>
                      <hr />
                       <h2 className="my-4">${product.price}</h2>
                      <p className="lead">{product.desc}</p>
                      <button onClick={() => hadleCart(product)}
                              className="btn btn-outline-primary my-5">{cartBtn}</button>
                  </div>
              </div>
          </div>
    </>
  )
}

export default ProductDetali
