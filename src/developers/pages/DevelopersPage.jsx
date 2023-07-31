import { React, useEffect, useState } from "react";
import { Getdevelopers } from "../components";
import { Formulario2 } from "../helpers/Formulario2";

export const DevelopersPage = () => {
  const [developers, setdevelopers] = useState([]);
  const getdevelop = async () => {
    const url = `http://localhost:9000/api_users/`;
    const resp = await fetch(url);
    const data = await resp.json();
    setdevelopers(data);
  };
  useEffect(() => {
    getdevelop();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-7">
          <h2
            style={{
              marginTop: "40px",
              marginBottom: "30px",
            }}
          >
            Developers List
          </h2>
          <Getdevelopers developers={developers} />
        </div>
        <div className="col-5">
          <h2
            style={{
              textAlign: "center",
              marginTop: "40px",
              marginBottom: "30px",
            }}
          >
            Developer Form
          </h2>
          <Formulario2 developers={developers} setdevelopers={setdevelopers} />
        </div>
      </div>
    </div>
  );
};
