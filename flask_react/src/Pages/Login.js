import React from 'react';
import TextField from '@mui/material/TextField';
// import { Mf } from '../Actions/signupRequest'
import { SignupRequest } from '../Actions/signupRequest'



export default function Login() {
    return (
        <div>
            <h1>Login</h1>
            <form noValidate autoComplete="off">
                <TextField> test</TextField>
            </form>
            < SignupRequest />
        </div>
    );
}

{/* <div>
<Button>Test</Button> */}
{/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */ }
{/* </div> */ }