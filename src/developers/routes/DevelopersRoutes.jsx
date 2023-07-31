import { NavBar } from "../../ui";
import { Navigate, Route, Routes } from "react-router-dom";
import { DevelopersFile, DevelopersPage, NewFile } from "../../developers";

export const DevelopersRoutes = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="developers" element={<DevelopersPage />} />
          <Route path="developersfile" element={<DevelopersFile />} />
          <Route path="newfile" element={<NewFile />} />

          <Route path="/" element={<Navigate to={"/developers"} />} />
        </Routes>
      </div>
    </>
  );
};
