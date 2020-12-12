import React, { Component } from "react";
import MainLayout from "../../layouts/MainLayout";

export default function Login() {

    return (
<MainLayout>

    <form>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email </label>
                    <input type="email"
                    className="form-control"
                    placeholder="Enter email" />
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

                <button type="submit" className="btn btn-primary btn-block">
                    Sign In
                </button>
                <p className="forgot-password text-right">
                    Forgot your Password ? <a href="forms/signin">Help</a>
                </p>
            </form>

</MainLayout>

       
    );

}
