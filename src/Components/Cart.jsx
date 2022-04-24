import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { DeletItem } from '../store/cartSlice'

const Cart = () => {
    const { data } = useSelector((state) => state.data)
    const dispatch = useDispatch()

    const hadleClose  = (Itenid) => {
      dispatch(DeletItem({Itenid}))
    }

    const CartEmpty = () => {
        return (
            <div className="px-4 my-5 bg-light rounded-3 py-5">
                <div className="container py-4">
                    <div className="row">
                        <h3>Your Cart is Empty</h3>
                    </div>
                </div>
            </div>
        )
    }
   
    const cartItems = (cartItem) => {
         return (
             <div className="px-4 my-5 bg-light rouded-3" key={cartItem.product.id}>
                 <div className="container py-4 ">
                     <button className="btn-close float-end"
                             onClick={() => hadleClose(cartItem.product.id)}></button>
                     <div className="row justify-cotet-center">
                         <div className="col-md-4">
                             <img src={cartItem.product.img} alt={cartItem.product.title}
                                  height="200px" width="180px"/>
                         </div>
                          <div className="col-md-4">
                              <h3>{cartItem.product.title}</h3>
                              <p className='lead fw-bold'>$ {cartItem.product.price}</p>
                          </div>
                     </div>
                 </div>
             </div>
         )
    }

    const button = () => {
        return(
            <div className="container">
                <div className="row">
                    <NavLink to="/checkout" className="btn btn-outline-primary mb-5 w-25 mx-auto">Proceed To checkout</NavLink>
                </div>
            </div>
        );
    }

    return (
        <>
          {data.length === 0 && CartEmpty()}
          {data.length !== 0 && data.map(cartItems)}
          {data.length !== 0 && button()} 
        </>
    )
}

export default Cart