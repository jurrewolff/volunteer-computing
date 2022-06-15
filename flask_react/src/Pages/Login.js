/* Login page, waar nu alleen een textfield en een knop in staat */

import React from 'react';
import TextField from '@mui/material/TextField';
// import { Mf } from '../Actions/signupRequest'
import { LoginRequest } from '../Actions/loginRequest'



export default function Login() {
    return (
        <div>
            <h1>Login</h1>
            <form noValidate autoComplete="off">
                <TextField> test</TextField>
            </form>
            < LoginRequest />
        </div>
    );
}

{/* <div>
<Button>Test</Button> */}
{/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */ }
{/* </div> */ }