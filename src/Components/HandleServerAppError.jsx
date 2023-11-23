import React, { useState, useEffect } from "react";

export const ErrorComponent = ({ error }) => {
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (error) {
      setErrorMessage(error.message);
      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
    }
  }, [error]);

  return (
    <div style={{ position: "relative" }}>
      {errorMessage && (
        <div
          style={{
            position: "absolute",
            top: "10px",
            left: "10px",
            padding: "5px",
            backgroundColor: "red",
            color: "white",
            borderRadius: "5px",
          }}
        >
          <p>{errorMessage}</p>
        </div>
      )}
    </div>
  );
};

export const HandleServerAppError = (props) => {
  return <ErrorComponent error={props.error} />;
};
