import React, { Component } from "react";
import MainLayout from "../../layouts/MainLayout";
import './style.css'
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Login from './signin'

export default function SignUp() {

    return <>
   <MainLayout>
        <form id="signForm">
            <h2>Sign Up</h2>

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
                <input type="email"
               className="form-control"
                placeholder="Enter email" />
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

            <Button  onClick= {} type="submit" className="btn btn-primary btn-block">
                Sign Up
            </Button>
            <p className="forgot-password text-right">
                Already registered <a href="./signin">sign in?</a>
            </p>
        </form>

    </MainLayout>
       
    </>

}