import {FaCheck, FaChevronDown} from "react-icons/fa"
import {Link} from "react-router-dom"
import "./Domain.css";


const Domain = (props) =>  {

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
                            <div className="circle circle-blue">
                                <p className="text-primary">2</p>
                                <div className="circle-divider"></div>
                            </div>
                            <div className="circle dash-circle">
                                <p className="text-primary">3</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            

            <div className="row">
                <div className="col-md-7 mx-auto">
                    <form action="" className="form row g-4">
                        <h2 className="Org-form-title text-center">Create a domain with <span className="cta">LetOut</span></h2>
                        <div className="form-group col-md-9 mt-3">
                            <label className="form-label">Enter your Domain Name</label>
                            <input
                                type="email"
                                className="form-control mt-1"
                                placeholder="e.g mywebsite"
                            />
                        </div>
                        <div className="form-group col-md-3 mt-3">
                            <label className="form-label">Select Extension</label>
                            <div className="input-field">
                                <i className="icon"><FaChevronDown /></i>
                                <select name="" id="" className="form-control mt-1">
                                    <option value="com">.com</option>
                                </select>
                            </div>
                        </div>
                        <p className="text-center"><Link to="/domain" className="">Already have an existing domain ?</Link></p>
                        <div className="d-grid gap-2 mt-3">
                            <Link to="/details" className="button">
                                Next
                            </Link>
                        </div>
                    </form>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <div style={{ height: "10vh" }}></div>
                </div>
            </div>

        </div>
    )
}

export default Domain