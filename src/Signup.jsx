import React from 'react'

const Signup = () => {


    
  return (
      <div className="Auth-form-container">
          <form className="Auth-form">
              <div className="Auth-form-content">
                  <h3 className="Auth-form-title">Sign In</h3>
                  <div className="text-center">
                      Already registered?{" "}
                      <span className="link-primary">
                          Sign In
                      </span>
                  </div>
                  <div className="form-group mt-3">
                      <label>What's your first name?</label>
                      <input
                          type="email"
                          className="form-control mt-1"
                          placeholder=""
                      />
                  </div>
                  <div className="form-group mt-3">
                      <label>What's your last name</label>
                      <input
                          type="email"
                          className="form-control mt-1"
                          placeholder="Email Address"
                      />
                  </div>
                  <div className="form-group mt-3">
                      <p className="">By clicking on next, <span className="text-primary">You agree to our terms and conditions</span> </p>
                  </div>
                  <div className="d-grid gap-2 mt-3">
                      <button type="submit" className="btn btn-primary">
                          Submit
                      </button>
                  </div>
                  <p className="text-center mt-2">
                      Forgot password?
                  </p>
              </div>
          </form>
      </div>
  )
}

export default Signup