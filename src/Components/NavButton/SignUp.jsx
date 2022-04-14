import React from 'react'

export default function SignUp() {
  return (
    <div>
       {/* <!-- Button trigger modal --> */}
       <button type="button" className="btn btn-outline-primary ms-auto ms-2" data-bs-toggle="modal" data-bs-target="#signupModal">
                <i className='fa fa-user-plus me-1'></i> Sign up
          </button>

          {/* <!-- Modal --> */}
          <div className="modal fade" id="signupModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                  <div className="modal-content">
                      <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">Sign up</h5>
                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                          <button className="btn btn-primary w-100 mb-4">
                             <span className='fa fa-google me-2'></span> Sign up in With Google
                          </button>
                          <button className="btn btn-primary w-100 mb-4">
                             <span className='fa fa-facebook me-2'></span> Sign up  in With Facebook
                          </button>
                          <form>
                              <div className="mb-3">
                                  <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
                                  <input type="text" className="form-control" />
                              </div>
                              <div className="mb-3">
                                  <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                  <input type="email" className="form-control"/>
                              </div>
                              <div className="mb-3">
                                  <label htmlFor="exampleInputPassword" className="form-label">Password</label>
                                  <input type="password" className="form-control" id="exampleInputPassword"/>
                              </div>
                              <div className="mb-3 form-check">
                                  <input type="checkbox" className="form-check-input" id="exampleCheck"/ >
                                      <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                              </div>
                              <button type="submit" className="btn btn-outline-dark w-100">Register</button>
                          </form>
                      </div> 
                     
                  </div>
              </div>
          </div>
    </div>
  )
}
