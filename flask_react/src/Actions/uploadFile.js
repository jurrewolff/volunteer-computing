/*
 * uploadFile Action component.
 * Handles the file upload and sends an api call to the back-end
 * via a http POST request.
 */
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import React from "react";
import { useNavigate } from "react-router-dom";

export const UploadRequest = (props) => {
  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate();

  {
    /*
    When the upload button is clicked, check if the valid_upload
    Boolean is true. If so, create a new FormData object and send
    relevant information to the upload api.
     */
  }
  useEffect(() => {
    if (clicked) {
      if (props.valid_upload) {
        const formData = new FormData();
        const codeFile = document.getElementById("file").files[0];
        const inputFile = document.getElementById("input").files[0];
        formData.append("file", codeFile);
        formData.append("input", inputFile);
        fetch("/api/upload", {
          method: "POST",
          headers: {
            name: props.name,
            description: props.description,
            quorum: props.quorum,
            always_check: props.always_check,
            trust_level: props.trust_level,
          },
          body: formData,
        })
          .then((response) => response.json())
          .then((result) => {
            console.log({ result });
          });
        navigate("/dashboard");
      }
      setClicked(false);
    }
  }, [clicked, props.valid_upload]);

  return (
    <div>
      <Button
        variant="contained"
        onClick={() => setClicked(true)}
        sx={{ mt: 3, ml: 1 }}
      >
        Upload!
      </Button>
    </div>
  );
};
