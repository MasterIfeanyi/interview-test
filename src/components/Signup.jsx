import React from 'react'
import { FaArrowRight } from "react-icons/fa"
import { Link } from "react-router-dom"

const Signup = () => {
    
  return (

    <div className="container">
        <div className="row">
            {/* <div className="d-flex justify-content-center align-items-center">
                <div className="logo">
                    <div className="logo-outer"></div>
                </div>
            </div> */}
            <div className="Auth-form-container">
                <form className="Auth-form">
                    <div className="Auth-form-content">
                        <div className="d-flex justify-content-start aign-items-center mb-4">
                            <div className="divider active"></div>
                            <div className="divider"></div>
                            <div className="divider"></div>
                        </div>
                        <h3 className="Auth-form-title">Let's get to know you more..</h3>
                        <div className="form-group mt-3">
                            <label className='form-label'>What's your first name?</label>
                            <input
                                type="email"
                                className="form-control mt-1"
                                placeholder=""
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label className="form-label">What's your last name?</label>
                            <input
                                type="email"
                                className="form-control mt-1"
                                placeholder=""
                            />
                        </div>
                        <div className="form-group mt-3">
                            <p className="" style={{ fontSize: "12px", margin: "0px"}}>By clicking on next, you agree to our <span className="cta">Terms of Conditions</span></p>
                            <p className="text-center" style={{ fontSize: "12px" }}>and <span className="cta">Privacy Policy</span></p>
                        </div>
                        <div className="d-grid gap-2 mt-3">
                            <a href="/" className="button">
                                Next <div className="arrow">
                                    <i><FaArrowRight /></i>
                                </div>
                            </a>
                        </div>
                        <p className="text-center mt-2">
                            Already have an account? <Link to="/" className="cta">Login</Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Signup