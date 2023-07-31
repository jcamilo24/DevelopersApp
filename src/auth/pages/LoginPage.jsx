import React from "react";

import { LoginTemplate } from "../components/LoginTemplate";

export const LoginPage = () => {
  return (
    <div className="container mt-5 justify-content-center d-flex flex-column align-items-center">
      <h1> Login </h1>
      <hr />
      <LoginTemplate />
    </div>
  );
};
