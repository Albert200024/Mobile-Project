import React from 'react'

export default function Footer() {
  return (
     <>
      <div className="container text-center text-md-left mt-5">
        <div className="row text-center text-md-left">
             <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
               <h5 className='text-upercase mb-4 font-weight-bold text-info'> About Us</h5>
               <p className='mb-4'>
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                 Doloribus alias obcaecati incidunt repellendus, maiores 
                 possimus perspiciatis, molestiae neque consequatur illum 
                 dicta delectus harum iusto nulla amet soluta quidem consequuntur perferendis.
               </p>
             </div>
             <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3 name">
               <h5 className='text-upercase mb-4 font-weight-bold text-info'>Let us Help</h5>
               <p><a href="#" className='text-dark ' >Your Accout</a></p>
               <p><a href="#" className='text-dark ' >Your Orders</a></p>
               <p><a href="#" className='text-dark ' >Manage You Contenet And Divece</a></p>
               <p></p>
               <p><a href="#" className='text-dark ' >Helps</a></p>
             </div>
             <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3 name">
               <h5 className='text-upercase mb-4 font-weight-bold text-info'>Make Money</h5>
               <p><a href="#" className='text-dark ' >Sell Poducte on Our Website</a></p>
               <p><a href="#" className='text-dark ' >Advertise Your Products</a></p>
               <p><a href="#" className='text-dark ' >Become an Affiliate</a></p>
               <p></p>
               <p><a href="#" className='text-dark ' >Self-Publish</a></p>
             </div>
             <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3 name">
               <h5 className='text-upercase mb-4 font-weight-bold text-info'>Contact</h5>
               <p><a href="#" className='text-dark ' >Your Accout</a></p>
                <p>
                  <li className='fa fa-home mr-3'></li> New Ork MY 2333, US
                </p>
                <p>
                  <li className='fa fa-envelope mr-3'></li> ghumasgyan200mail.ru
                </p>
                <p>
                  <li className='fa fa-phone mr-3'></li> +374 93349605
                </p>
                <p>
                  <li className='fa fa-print mr-3'></li>  Iphone
                </p>
             </div> 
             <hr className='mb-4'/>
             <div className="row f-flex justify-content-center">
                  <div>
                      <p>
                         Copyright 2022 All Rights Reerved By :
                         <a href = "#"  style={{textDecoration:"none"}}>
                                  <strong className='text-info'>The Product</strong>
                         </a> 
                      </p>
                  </div>
             </div>
             <div className='row f-flex justify-content-center'>
                   <div className='text-center'>
                          <ul className='list-unstyled list-inline'>
                               <li className='list-inline-item'>
                                  <a href="#" className='text-dark '>
                                     <li className='fa fa-facebook'></li>
                                  </a>
                               </li>
                               <li className='list-inline-item'>
                                  <a href="#" className='text-dark '>
                                     <li className='fa fa-twitter'></li>
                                  </a>
                               </li>
                               <li className='list-inline-item'>
                                  <a href="#" className='text-dark '>
                                     <li className='fa fa-instagram'></li>
                                  </a>
                               </li>
                               <li className='list-inline-item'>
                                  <a href="#" className='text-dark '>
                                     <li className='fa fa-linkedin'></li>
                                  </a>
                               </li>
                          </ul>
                   </div> 
             </div>
        </div>
      </div>
    </>
  )
}
 