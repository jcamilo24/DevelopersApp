import React from "react";
import { useEffect, useState } from "react";
import { Getfiles } from "../components/";
import { useNavigate } from "react-router-dom";

export const DevelopersFile = () => {
  const [files, setfiles] = useState([]);
  const getfiles = async () => {
    const url = `http://localhost:9000/api_users/files/`;
    const resp = await fetch(url);
    const data = await resp.json();
    setfiles(data);
  };
  useEffect(() => {
    getfiles();
  }, []);

  const navigate = useNavigate();

  const onNewFile = () => {
    navigate("/newfile", {
      replace: true,
    });
  };

  return (
    <>
      <div className="container d-flex justify-content-center align-items-center">
        <div className="row">
          <div className="col-7">
            <h2
              style={{
                textAlign: "center",
                marginTop: "20px",
                marginBottom: "30px",
              }}
            >
              Files List
            </h2>
            <Getfiles files={files} />
            <button onClick={onNewFile} className="btn btn-primary">
              Add New File
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
