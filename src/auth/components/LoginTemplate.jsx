import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const LoginTemplate = () => {
  const navigate = useNavigate();

  const [user, setuser] = useState({
    username: "",
    password: "",
  });

  const [users, setusers] = useState([]);
  const getUser = async () => {
    const url = `http://localhost:9000/api_users/`;
    const resp = await fetch(url);
    const data = await resp.json();
    setusers(data);
  };
  useEffect(() => {
    getUser();
  }, []);

  const validacionUsers = () => {
    const userFind = users?.find(
      (e) => e.email === user.username && e.contraseña === user.password
    );
    return !!userFind;
  };

  const OnLogin = () => {
    const isValidUser = validacionUsers();
    if (isValidUser) {
      setuser("");
      navigate("/", {
        replace: true,
      });
    } else {
      alert("no admitido");
    }
  };

  const handleRegister = () => {
    navigate("/newregister", {
      replace: true,
    });
  };
  return (
    <div className="d-flex flex-column align-items-center">
      <input
        type="text"
        placeholder="Username"
        value={user.username}
        onChange={(e) =>
          setuser((prev) => ({ ...prev, username: e.target.value }))
        }
        style={{
          width: "300px",
          height: "50px",
          borderRadius: "5px",
          fontFamily: "roboto",
          fontWeight: "500px",
          fontSize: "20px",
          paddingLeft: "15px",
          marginBottom: "20px",
        }}
      />
      <input
        type="password"
        placeholder="Password"
        value={user.password}
        onChange={(e) =>
          setuser((prev) => ({ ...prev, password: e.target.value }))
        }
        style={{
          width: "300px",
          height: "50px",
          borderRadius: "5px",
          fontFamily: "roboto",
          fontWeight: "500px",
          fontSize: "20px",
          paddingLeft: "15px",
        }}
      />
      <button onClick={OnLogin} className="btn btn-primary mt-5 mb-5">
        Login
      </button>
      <div>
        <b1>You do not have an account?</b1>
        <button
          className=""
          onClick={() => handleRegister()}
          style={{
            width: "100px",
            height: "30px",
            borderRadius: "5px",
            fontFamily: "roboto",
            fontWeight: "200px",
            fontSize: "17px",
            color: "#0F3EEA",
            border: "none",
            backgroundColor: "white",
          }}
        >
          <u>Register</u>
        </button>
      </div>
    </div>
  );
};
