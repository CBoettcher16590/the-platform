import React, { useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import { useAuthentication } from '../../data/useAuthentication';
import { Button } from "react-bootstrap";


// function compaireEmails(memberData():any, DB.dbSignIn():any){
//   if(memberData === DB.dbSignIn){
//     console.log("MATCH!")
//   }
// }

// function memberData(email:string){

//   return email;
// }


export default function Login() {
    var mysql      = require('mysql');
   

    return <>
<MainLayout>

    <form id="signForm">
                <h2>Sign In</h2>

                <div className="form-group">
                    <label>Email </label>
                    <input value="memberData()" id="emailInput" type="email"
                    className="form-control"
                    placeholder="Enter email" />
                </div>
                <br />

                <div className="form-group">
                    <label>Password </label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>
                {/* <Button onClick = {Login} type="submit" className="btn btn-primary btn-block"> */}
                <Button type="submit" className="btn btn-primary btn-block">
                    Sign In
                </Button>
                <p className="forgot-password text-right">
                    Forgot your Password ? <a href="forms/signin">Help</a>
                </p>
            </form>
        

        </MainLayout>
            
       </>
    }

