import { FaCheck, FaChevronDown, FaArrowLeft } from "react-icons/fa"
import { Link, useNavigate } from "react-router-dom"
import "./Domain.css";


const Name = (props) => {

    const navigate = useNavigate()

    return (
        <div className="container">


            <div className="row">
                <div className="col-md-6 mx-auto">
                    <div className="mt-5 mb-4    group">
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


            <div className="row d-flex justify-content-start align-items-start">
                <div className="col-auto mb-5">
                    <button onClick={navigate(-1)}><FaArrowLeft /></button>
                </div>
            </div>


            <div className="row">
                <div className="col-md-7 mx-auto">
                    <form action="" className="form row g-4">
                        <h2 className="Org-form-title text-center">Already have a Domain Name</h2>
                        <div className="form-group col-md-12 mt-3">
                            <label className="form-label">Enter your Domain Name</label>
                            <input
                                type="email"
                                className="form-control mt-1"
                                placeholder="e.g johndoe.com"
                            />
                        </div>
                        <p className="text-center"><Link to="/details" className="">I want to create a Domain Name with LetOut</Link></p>
                        <div className="d-grid gap-2 mt-3">
                            <a href="/" className="button">
                                Next
                            </a>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Name