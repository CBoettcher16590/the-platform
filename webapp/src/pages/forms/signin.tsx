import React, { useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import { useAuthentication } from '../../data/useAuthentication';
import { Button } from "react-bootstrap";

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

    <form>
                <h3>Sign In</h3>

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

                <Button onClick = {Login} type="submit" className="btn btn-primary btn-block">
                    Sign In
                </Button>
                <p className="forgot-password text-right">
                    Forgot your Password ? <a href="forms/signin">Help</a>
                </p>
            </form>
        

        </MainLayout>
            
       </>
    }
