import {FaArrowRight, FaEye} from "react-icons/fa"
import {Link} from "react-router-dom"



const Auth = (props) =>  {

    return (
        <div className="container">
            <div className="row">
                {/* <div className="d-flex justify-content-center align-items-center">
                    <div className="logo">
                        <div className="logo-outer"></div>
                    </div>
                </div> */}
                <div className="col-12 Auth-form-container">
                    <div className="">
                        <form className="Auth-form form">
                            <div className="Auth-form-content">
                                <h2 className="Auth-form-title">Login to your account</h2>
                                <div className="form-group mt-3">
                                    <label className="form-label">Email Address</label>
                                    <input
                                        type="email"
                                        className="form-control mt-1"
                                        placeholder=""
                                    />
                                </div>
                                <div className="form-group mt-3">
                                    <label className="form-label">Password</label>
                                    <div className="input-field">
                                        <i className="icon"><FaEye /></i>
                                        <input
                                            type="password"
                                            className="form-control mt-1"
                                            placeholder=""
                                        />
                                    </div>
                                </div>
                                <Link to="/signup" className="cta"><p>Don't have an account ?</p></Link>
                                <div className="d-grid gap-2 mt-3">
                                    <a href="/" className="button">
                                        Login <div className="arrow">
                                            <i><FaArrowRight /></i>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth