import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import {  Link, useNavigate } from "react-router-dom";
import app from "../fireabase/firebase.config";

const Register = () => {
   const auth =getAuth(app);

    const Handlelogin=e=>{
        e.preventDefault();
        const email=e.target.email.value;
        const password=e.target.password.value;
        console.log(email,password);
        // sing in
        createUserWithEmailAndPassword(auth,email,password)
        .then((result)=>{
            console.log(result.user);
            e.target.reset();
            nevigate('/login')
        })
        .catch((error)=>{
            console.error(error)
        })
    }
  

   
    const nevigate=useNavigate();
    const back = ()=>{
        nevigate(-1)
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={Handlelogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
        <button onClick={back}>Go back to Home</button>
      </form>
    <p>Already Have Account? Please <Link to='/login'>Login</Link></p>
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;