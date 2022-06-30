import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


export default function Redirect() {
    const navigate = useNavigate();
    const delay = ms => new Promise(
        resolve => setTimeout(resolve, ms)
      );

    useEffect(() => {
        async function makeRequest() {

            await delay(1000);

            navigate('/');
        }

        makeRequest();
        });

    return navigate('/');
}
