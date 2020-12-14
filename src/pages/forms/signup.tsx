import React, { Component } from "react";
import MainLayout from "../../layouts/MainLayout";

import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Login from './signin'


function randomRedirect():string{

    let randomNumber = Math.floor(Math.random() * 10 );
    let route3 ='/OrgHome';

      //if randomNumber is greater than 5 it will redirect to success
      //otherwise it will redirect to failure
      if(randomNumber>=5){
        let route = "/memberHome"
        return route;
      } 
      if(randomNumber>=4){
        let route = "/adminHome"
        return route;
      } 
      if(randomNumber>=3){
        let route = "/authorHome"
        return route;
      } 
      else{
        
        return route3;
      }
  }

export default function SignUp() {
// history is for checkout redirect
 let history = useHistory();

 const redirect = () => {
   history.push(randomRedirect())
 }
    return <>
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

            <Button  onClick= {redirect} type="submit" className="btn btn-primary btn-block">
                Sign Up
            </Button>
            <p className="forgot-password text-right">
                Already registered <a href="/signin">sign in?</a>
            </p>
        </form>

    </MainLayout>
       
    </>

}