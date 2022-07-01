/*
 * signupRequest Action component.
 * Handles the signup request to the back-end via a http POST request.
 * Also immediately signs in a user via the loginrequest function.
 */

// Package and functionality imports
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { Routes, Route, useNavigate } from "react-router-dom";
import DashBoard from "../Pages/Dashboard";
import { LoginRequest } from "../Actions/loginRequest";

// Props contain the textfield data provided by the signup page
export const SignupRequest = (props) => {
  const [clickedsignup, setClicked] = useState(false);
  const navigate = useNavigate();

  {
    /*
     * Handles the signup http POST request when the button is clicked.
     * If the props.authenticated boolean is true, make api request for
     * signup. Next, make the login request and navigate to redirect.
     */
  }
  useEffect(() => {
    if (clickedsignup) {
      if (props.authenticated) {
        const requestOptions = {
          method: "POST",
          headers: {
            username: props.username,
            password: props.pass,
            email: props.eMail,
            firstname: props.fName,
            lastname: props.lName,
            institution: props.inst,
            is_researcher: props.isResearcher,
            background: props.background,
          },
        };
        fetch("/api/signup", requestOptions).then((result) => {
          console.log(result);
        });
        LoginRequest(props.username, props.pass).then((response) => {
          console.log(response.code);
        });
        navigate("/redirect");
      }
      setClicked(false);
    }
  }, [clickedsignup, props.authenticated]);

  return (
    <div>
      <Button
        variant="contained"
        onClick={() => setClicked(true)}
        sx={{ mt: 3, ml: 1 }}
      >
        Sign up
      </Button>
      <Routes>
        <Route key="/" element={<DashBoard />} />
      </Routes>
    </div>
  );
};
