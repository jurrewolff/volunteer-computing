import React from 'react'; // niet per se nodig nu, toekomst wss wel
import './Login.css';

import { LogginIn } from '../Actions/login';

export default function Login() {
    return (
        <>
            <h1>Login</h1>
            <LogginIn />
        </>
    );
}

// const Login = () => {
//     return <h1>Login</h1>;
// };

// export default Login;