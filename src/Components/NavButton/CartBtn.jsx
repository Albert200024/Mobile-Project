import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function CartBtn() {
  const {data} = useSelector((state) => state)
  
  return (
    <>
        <NavLink  to ="/cart" className="btn btn-outline-primary ms-2">
              <span className="fa fa-shopping-cart me-1"></span> Cart({data.data.length})
         </NavLink>     
    </>
  )
}
