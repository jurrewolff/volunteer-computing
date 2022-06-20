import React from 'react'; // niet per se nodig nu, toekomst wss wel

import './AlertMessage.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import { AlertDismissibleExample } from '../Actions/alert';

export default function GetAlertMessage() {
    return (
        <>
            <h1>Alert</h1>
            <AlertDismissibleExample />
        </>
    );
}