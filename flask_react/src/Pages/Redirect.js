/*
 * REDIRECT TO...
 * Redirects the user to the home page after logging in/out. A delay occurs
 * because it takes time for the cookies to be sent and received.
 */

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Redirect() {
  const navigate = useNavigate();
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(() => {
    async function makeRequest() {
      await delay(1000);

      navigate("/");
    }

    makeRequest();
  });

  return navigate("/");
}
