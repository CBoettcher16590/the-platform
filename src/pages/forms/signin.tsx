import React, { Component } from "react";
<<<<<<< HEAD
import MainLayout from "../../layouts/MainLayout";

export default function SignUp() {

    return (
<MainLayout>

    <form>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First name </label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="First name"
                    />
                </div>
                <br />

                <div className="form-group">
                    <label>Last name </label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>
                <br />

                <div className="form-group">
                    <label>Email </label>
                    <input type="email" placeholder="Enter email" />
=======

export default class Login extends Component {
    render() {
        return (
            <form>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email </label>
                    <input type="email" className="form-control" placeholder="Enter email" />
>>>>>>> 8ec54fd3e3b0efe39eb63bbc5c12fa9c79eb6afa
                </div>
                <br />

                <div className="form-group">
<<<<<<< HEAD
                    <label>Email </label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Confirm email"
                    />
                </div>
                <br />

                <div className="form-group">
                    <label>Phone Number </label>
                    <input
                        type="phone number"
                        className="form-control"
                        placeholder="Enter Phone number"
                    />
                </div>

                <br />

                <div className="form-group">
                    <label>Password </label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                    />
=======
                    <label>Password </label>
                    <input type="password" className="form-control" placeholder="Enter password" />
>>>>>>> 8ec54fd3e3b0efe39eb63bbc5c12fa9c79eb6afa
                </div>
                <br />

                <div className="form-group">
<<<<<<< HEAD
                    <label>Password </label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Confirm password"
                    />
                </div>
                <br />

                <button type="submit" className="btn btn-primary btn-block">
                    Sign Up
                </button>
                <p className="forgot-password text-right">
                    Already registered <a href="forms/signin">sign in?</a>
                </p>
            </form>

</MainLayout>

       
    );

}
=======
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                    <br />

                </div>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
        );
    }
}

>>>>>>> 8ec54fd3e3b0efe39eb63bbc5c12fa9c79eb6afa
