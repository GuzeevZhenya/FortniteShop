// //1.Почему в консоль логе отрисовывает компоненту 4 раза и через 2 сек еще 2 раза
// // (походу из за обновления useState)
// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { setErrorAC } from "../Redux/Reducers/app-reducer";

// export const ErrorComponent = () => {
//   const [errorMessage, setErrorMessage] = useState("");

//   const error = useSelector((state) => state.app.error);
//   const dispatch = useDispatch();
//   console.log(error);

//   useEffect(() => {
//     if (error) {
//       setErrorMessage(error.message);
//       setTimeout(() => {
//         dispatch(setErrorAC(null));
//       }, 5000);
//     }
//   }, [error]);

//   return (
//     <div style={{ position: "relative" }}>
//       {errorMessage && (
//         <div
//           style={{
//             position: "absolute",
//             top: "10px",
//             left: "10px",
//             padding: "5px",
//             backgroundColor: "red",
//             color: "white",
//             borderRadius: "5px",
//           }}
//         >
//           <p>{errorMessage}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export const HandleServerAppError = () => {
//   return <ErrorComponent />;
// };

import React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { setErrorAC } from "../../../Redux/Reducers/app-reducer";
import { useDispatch, useSelector } from "react-redux";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export function ErrorSnackbar() {
  const error = useSelector((state) => state.app.error);
  const dispatch = useDispatch();

  console.log(error);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(setErrorAC(null));
  };

  return (
    <Snackbar
      open={error !== null}
      autoHideDuration={6000}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
        {error}
      </Alert>
    </Snackbar>
  );
}
