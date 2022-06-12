import React from 'react'; // niet per se nodig nu, toekomst wss wel
// import './Login.css';

import { AlertDismissibleExample } from '../Actions/alert';

export default function GetAlertMessage() {
    return (
        <>
            <h1>Alert</h1>
            <AlertDismissibleExample />
        </>
    );
}