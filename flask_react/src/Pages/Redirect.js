import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


export default function Redirect() {
    const navigate = useNavigate();
    const delay = ms => new Promise(
        resolve => setTimeout(resolve, ms)
      );

    useEffect(() => {
        async function makeRequest() {
            console.log('before');

            await delay(1000);

            console.log('after');
            navigate('/');
        }

        makeRequest();
        });

    return navigate('/');
}
