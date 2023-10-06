import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const Login = () => {

    const {singIn} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    console.log('location in the login page', location)
    const handleLogin = e =>{
        e.preventDefault();
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password);
        singIn(email, password)
        .then(result =>{
            console.log(result.user)

            //navigate after login
            navigate(location?.state ? location.state : '/'  )
        })
        .catch(error =>{
            console.error(error)
        })
    }

return (
        <div>
            <Navbar></Navbar>
            <h2 className="text-3xl text-center">Please login</h2>
            
            <div className="lg:mx-40 items-center text-center ">
                <div className="">
                    <div className="  ">
                        <form onSubmit={handleLogin}
                         className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input 
                                name="email"
                                type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                name="password"
                                type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <p className="mb-8">Don not have an account <Link className="text-green-600" to="/register">please register</Link></p>
     </div>
        </div>
    </div>
    </div>
        
  );
};

export default Login;