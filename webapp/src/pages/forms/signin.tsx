import React, { useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import { useAuthentication } from '../../data/useAuthentication';
import LoginForm from '../../components/LoginForm'



export default function Login() {
    var mysql      = require('mysql');
   

    return <>
    <MainLayout>

    <LoginForm/>
        
    </MainLayout>
            
       </>
    }

