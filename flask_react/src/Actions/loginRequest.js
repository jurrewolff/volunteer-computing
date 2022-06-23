/*
 * Maakt het mogelijk om in te loggen.
 * POST request voor login.
 * in var worden ed variabelen meegegeven voor de username en ww, is voor nu
 * nog gehardcoded voor testen.
 *
 */

import { useState, useEffect } from 'react'

import { Routes, Route, useNavigate } from "react-router-dom"
import DashBoard from "../Pages/Dashboard"
import Navbar from "../Components/Navbar"

import Button from '@mui/material/Button';

import Cookies from 'js-cookie';

export const LoginRequest = (props) => {
    let db_response = { msg: "verkeerde shit", code: 200 }
    const requestOptions = {
        method: 'POST',
        headers: {
            'username': props.uName,
            'password': props.pass
        }
    };

    fetch("/login", requestOptions)
        .then((response) => response.json())
        .then((result) => {
            console.log(result)
            // db_response = result
            // console.log({ result }) //DELETE
        })

    return (
        db_response
    );
}