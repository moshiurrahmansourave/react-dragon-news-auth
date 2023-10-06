import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const Register = () => {
    const {creatUser} = useContext(AuthContext);


    const handRegister = e =>{
        e.preventDefault();
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        const name = form.get('name')
        const photo = form.get('photo')
        console.log(email, password, name, photo);

        //create user
        creatUser(email, password)
        .then(result =>{
            console.log(result.user)
        })
        .catch(error =>{
            console.error(error)
        })
    }
    return (
        <div>
    <Navbar></Navbar>
    <h2 className="text-3xl text-center">Please Register</h2>
    
    <div className="lg:mx-40 items-center text-center ">
    <div className="">
        <div className="  ">
            <form onSubmit={handRegister}
             className="card-body">
                <div className="form-control">
                    <label className="label">
               <span className="label-text">Name</span>
                    </label>
                    <input 
                    name="name"
                 type="text" placeholder="your name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
               <span className="label-text">Photo URL</span>
                    </label>
                    <input 
                    name="=photo"
                 type="text" placeholder="Photo url" className="input input-bordered" required />
                </div>
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
                    <button className="btn btn-primary">Register</button>
                </div>
            </form>
            <p className="mb-8">Already have an account <Link className="text-green-600" to="/login">please Login</Link></p>
        </div>
    </div>
    </div>
    </div>
    );
};

export default Register;