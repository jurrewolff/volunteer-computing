/*
 * Maakt het mogelijk om in te loggen.
 * POST request voor login.
 * in var worden de variabelen meegegeven voor de username en ww, is voor nu
 * nog gehardcoded voor testen.
 *
 */

import { useState, useEffect } from 'react'

export const ProjectsRequest = () => {

    const [data, setData] = useState([{}])

    useEffect(() => {
            fetch("/projects")
                .then(res => res.json())
                .then(data => {
                    setData(data)
                    console.log(data)
                })
    }, []);

    return (
        <div>
            <div>
                <h1>Hoi</h1>
                <h2>{data.name}</h2>
                <h2>{data.description}</h2>
                <br />
            </div>
        </div>
    );
}