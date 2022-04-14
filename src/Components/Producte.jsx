import React from 'react'
import { NavLink } from 'react-router-dom'
import { Data } from './Date/Date'

export default function Producte() {
  const cardItem = (item) => {
      return(
        <div className="card my-5 py-4" key={item.id} style={{ width: "18rem" }}>
          <img src={item.img} className="card-img" alt={item.title} />
          <div className="card-body text-center">
            <h5 className="card-title">{item.title}</h5>
            <p className="lead">${item.price}</p>
            <NavLink to={`/products/${item.id}`} className="btn btn-outline-primary">Buy Now</NavLink>
          </div>
        </div>
      )
  }
  
  return (
    <div>
      <div className="container py-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Product</h1>
            <hr />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-around">
          {Data.map(cardItem)}
        </div>
      </div>
    </div>
  )
}
