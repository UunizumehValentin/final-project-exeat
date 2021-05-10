import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "../src/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import StudentsContextProvider from "./contexts/StudentsContext";
import UserContextProvider from "./contexts/UsersContext";

ReactDOM.render(
  <React.StrictMode>
    <StudentsContextProvider>
      <UserContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </UserContextProvider>
    </StudentsContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
