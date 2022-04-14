import React from 'react'
import aboutImage from '../image/about.png'
import { NavLink } from 'react-router-dom'

export default function About() {
  return (
    <div>
      <div className="container">
         <div className="row">
             <div className="col-md-6">
                 <h1 className='text-primary fw-bold mb-4 mt-5'>About Us</h1>
                 <p className="lead">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                     Quisquam corrupti nam obcaecati eu m? Perferendis, 
                     perspiciatis tempore, consequuntur nostrum obcaecati, 
                     blanditiis quis sint et nihil molestiae rerum voluptatibus! 
                     Tenetur, a excepturi? In, quisquam. Id quibusdam architecto 
                     deleniti modi ad rem excepturi! Molestias doloremque vero, 
                     provident adipisci enim harum, laudantium eius necessitatibus assumenda, 
                     atque modi? Inventore excepturi reprehenderit hic corrupti ullam laudantium 
                     ratione necessitatibus cum officiis. Amet itaque accusantium tenetur voluptatum 
                     quas nostrum consectetur, nulla illo reiciendis velit quis quibusdam! Corrupti sed, 
                     delectus repellendus quasi quis mollitia facere neque. Voluptas quo expedita alias qui 
                     voluptate neque odio reiciendis optio dolor eveniet.
                 </p>
                 <NavLink to="/contact" className='btn btn-outline-primary px-3'>Contact Us</NavLink>
             </div>
             <div className="col-md-6 d-flex justify-content-center">
                 <img src={aboutImage} alt="About Us"
                      height="400px" width="400px"/>
             </div>
         </div>
      </div>
    </div>
  )
}
