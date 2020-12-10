import React, { Component } from "react";

export default function SignUp() {

    return (
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
            </div>
            <br />

            <div className="form-group">
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
            </div>
            <br />

            <div className="form-group">
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
    );

}