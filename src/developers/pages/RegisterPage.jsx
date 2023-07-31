import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const RegisterPage = () => {
  const navigate = useNavigate();

  const [user, setuser] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    contraseña: "",
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

  //   const [users, setusers] = useState([]);
  const addUser = () => {
    const userExist = users?.some((e) => e.nombre === user.nombre);
    if (!userExist) {
      const requestInit = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      };
      fetch(`http://localhost:9000/api_users/add_profile/`, requestInit)
        .then((res) => res.json())
        .then((res) => console.log(res));

      setuser({
        nombre: "",
        apellido: "",
        email: "",
        telefono: "",
        contraseña: "",
      });
      navigate("/login", {
        replace: true,
      });
      JSON.stringify(users);
    } else {
      alert("El usuario ya existe");
    }
  };

  const onBack = () => {
    navigate("/login", {
      replace: true,
    });
  };

  return (
    <form onSubmit={addUser}>
      <div className="d-flex flex-column align-items-center mt-5">
        <h1 className="mb-5"> Register </h1>
        <input
          type="text"
          placeholder="Nombre"
          value={user.nombre}
          onChange={(e) =>
            setuser((prev) => ({ ...prev, nombre: e.target.value }))
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
          type="text"
          placeholder="Apellido"
          value={user.apellido}
          onChange={(e) =>
            setuser((prev) => ({ ...prev, apellido: e.target.value }))
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
          type="text"
          placeholder="Email"
          value={user.email}
          onChange={(e) =>
            setuser((prev) => ({ ...prev, email: e.target.value }))
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
          type="text"
          placeholder="Telefono"
          value={user.telefono}
          onChange={(e) =>
            setuser((prev) => ({ ...prev, telefono: e.target.value }))
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
          placeholder="Contraseña"
          value={user.contraseña}
          onChange={(e) =>
            setuser((prev) => ({ ...prev, contraseña: e.target.value }))
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
        <div className="container d-flex justify-content-center">
          <button
            type="submit"
            className="btn btn-primary"
            style={{
              textAlign: "center",
              marginRight: "30px",
              marginBottom: "30px",
            }}
          >
            Register
          </button>
          <button
            onClick={onBack}
            className="btn btn-primary"
            style={{
              textAlign: "center",
              marginLeft: "30px",
              marginBottom: "30px",
            }}
          >
            Back
          </button>
        </div>
      </div>
    </form>
  );
};
