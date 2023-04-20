import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProviders/AuthProviders";

const Login = () => {
  const { signInUser, googleSignIn } = useContext(AuthContext);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const form = e.target;

    const email = e.target.email.value;
    const pass = e.target.password.value;

    console.log(email, pass);

    signInUser(email, pass)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleGoogleLogin = () => {
    googleSignIn().then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser).catch((err) => {
        console.log(err);
      });
    });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <div className="text-center ">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmitForm} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter Your Password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div>
              <p>
                Don't have a account Please{" "}
                <Link className="btn btn-link " to="/register">
                  Registers
                </Link>{" "}
              </p>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <div className="form-control mt-6">
              <button onClick={handleGoogleLogin} className="btn btn-warning">
                Sign With Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
