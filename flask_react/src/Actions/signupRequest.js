// /*
//  * Voor het registreren van een gebruiker. Werkt nu alleen met mockup database,
//  * waarbij alleen username en ww vereist zijn.
//  * code 200: is goed, alle andere zijn erros.
//  */

import { useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import { Routes, Route, useNavigate } from "react-router-dom"
import DashBoard from "../Pages/Dashboard"


// TODO werkend maken

export const SignupRequest = (email, pass, uname, lname, fname, inst,
    backgr, isScientist) => {

    var is_Scientist = 0
    var l_name = lname
    var f_name = fname
    var institution = inst
    var background = backgr

    if (isScientist) {
        is_Scientist = 1
    }
    else {
        l_name = " "
        f_name = " "
        institution = " "
        background = " "
    }

    const requestOptions = {
        method: 'POST',
        headers: {
            'email': email,
            'password': pass,
            'username': uname,
            'lastname': l_name,
            'firstname': f_name,
            'institution': institution,
            'background': background,
            'is_researcher': is_Scientist
        }
    };

    console.log(requestOptions)


    return (fetch("/api/signup", requestOptions)
        .then((response) => response.json())
        .then((result) => {
            return result;
        })
    )
}