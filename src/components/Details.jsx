import React from 'react'
import { FaCheck, FaChevronDown } from "react-icons/fa"
import { Link } from "react-router-dom";
import "./Details.css";
import flag from "../img/Flag_of_Nigeria.png";

const Details = () => {
    
  return (

    <div className="container">

          
        <div className="row">
            <div className="col-md-6 mx-auto">
                <div className="my-5 group">
                    <div className="d-flex align-items-center loader">
                        <div className="circle circle-green">
                            <FaCheck />
                            <div className="circle-divider"></div>
                        </div>
                        <div className="circle circle-green">
                            <FaCheck />
                            <div className="circle-divider"></div>
                        </div>
                        <div className="circle circle-blue">
                            <p className="text-primary">3</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

          
        <div className="row">
            <div className="col-md-6 mx-auto">
                <form action="" className="form row g-4">
                    <h3 className="Org-form-title">Organization Details</h3>
                    <div className="form-group col-md-12 mt-3">
                        <label className='form-label'>Name of Organization</label>
                        <input
                            type="email"
                            className="form-control mt-1"
                            placeholder="Enter Name of Organization"
                        />
                    </div>
                    <div className="form-group col-md-12 mt-3">
                        <label className="form-label">Organization's Email</label>
                        <input
                            type="email"
                            className="form-control mt-1"
                            placeholder="Enter Office Address"
                        />
                    </div>
                    <div className="form-group col-md-6 mt-3">
                        <label className="form-label">Company's Size</label>
                        <div className="input-field">
                            <i className="icon"><FaChevronDown /></i>
                            <select name="" id="" className='form-control mt-1'>
                                <option value="orange">{""}</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group col-md-6 mt-3">
                        <label className="form-label">Designation</label>
                        <div className="input-field">
                            <i className="icon"><FaChevronDown /></i>
                            <select name="" id="" className='form-control mt-1'>
                                <option value="orange">{""}</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group col-md-12 mt-3">
                        <label className="form-label">Phone Number</label>
                        <div className="input-field">
                            <img src={flag} alt="" style={{width: "20px", height: "15px", borderRadius: "4px"}} />
                            <i className="icon"><FaChevronDown /></i>
                            <input
                                type="text"
                                className="form-control mt-1"
                                placeholder="e.g 08023942413"
                                />
                        </div>
                    </div>
                    <div className="form-group col-md-4 mt-3">
                        <label className="form-label">State</label>
                        <div className="input-field">
                            <i className="icon"><FaChevronDown /></i>
                            <select name="" id="" className='form-control mt-1'>
                                <option value="orange">{""}</option>
                            </select> 
                        </div>
                    </div>
                    <div className="form-group col-md-4 mt-3">
                        <label className="form-label">City</label>
                        <div className="input-field">
                            <i className="icon"><FaChevronDown /></i>
                            <select name="" id="" className='form-control mt-1'>
                                <option value="orange">{""}</option>
                            </select>
                        </div>
                    </div>
                    <div className="d-grid gap-2 mt-3 text-center">
                        <Link to="/domain" className="button">
                            Next
                        </Link>
                    </div>
                </form>
            </div>              
        </div>

        <div className="row">
            <div className="col-12">
                <div style={{height: "10vh"}}></div>
            </div>
        </div>

          
    </div>
  )
}

export default Details