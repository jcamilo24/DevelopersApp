import React from "react";
import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth/pages/LoginPage";
import { DevelopersRoutes } from "../developers";
import { RegisterPage } from "../developers/pages/RegisterPage";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/*" element={<DevelopersRoutes />} />
        <Route path="/newregister" element={<RegisterPage />} />
      </Routes>
    </>
  );
};
