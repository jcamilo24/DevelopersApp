import React from "react";
import { useState, useEffect } from "react";

export const Formulario2 = ({ developers, setdevelopers }) => {
  const [develop, setdevelop] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    contraseña: "",
  });

  const onInputChange = (evento) => {
    setdevelop({
      ...develop,
      [evento.target.name]: evento.target.value,
    });
  };

  // comparar desarrollador con lo de la api
  const validacionDevelopers = () => {
    const developFind = developers?.find((e) => e.nombre === develop.nombre);
    return !!developFind;
  };

  const onsubmit = () => {
    tiempo_invertido_horas = parseInt(tiempo_invertido_horas, 10);
    if (
      fecha === "" ||
      hora === "" ||
      funcionalidad_trabajada === "" ||
      tiempo_invertido_horas <= 0 ||
      desarrollador === ""
    ) {
      alert("Todos los campos son obligatorios");
      return;
    }

    const isValidUser = validacionDevelopers();
    if (isValidUser) {
      const requestInit = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(files),
      };
      fetch(`http://localhost:9000/api_users/update/` + nombre, requestInit)
        .then((res) => res.json())
        .then((res) => console.log(res));
      setfiles({
        fecha: "",
        hora: "",
        funcionalidad_trabajada: "",
        tiempo_invertido_horas: 0,
        desarrollador: "",
      });
    } else {
      alert("Desarrollador no encontrado");
    }
  };

  return (
    <form onSubmit={onsubmit}>
      <div className="mb-3">
        <label htmlFor="nombre" className="form-label">
          Nombre
        </label>
        <input
          type="text"
          id="nombre"
          className="form-control"
          placeholder="Nombre"
          name="nombre"
          autoComplete="off"
          onChange={onInputChange}
          value={develop.nombre}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="apellido" className="form-label">
          Apellido
        </label>
        <input
          type="text"
          id="apellido"
          className="form-control"
          placeholder="Apellido"
          name="apellido"
          autoComplete="off"
          onChange={onInputChange}
          value={develop.apellido}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="text"
          id="email"
          className="form-control"
          placeholder="Email"
          name="email"
          autoComplete="off"
          onChange={onInputChange}
          value={develop.email}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="telefono" className="form-label">
          Telefono
        </label>
        <input
          type="number"
          id="telefono"
          className="form-control"
          placeholder="Telefono"
          name="telefono"
          autoComplete="off"
          onChange={onInputChange}
          value={develop.telefono}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="contraseña" className="form-label">
          Contraseña
        </label>
        <input
          type="text"
          id="contraseña"
          className="form-control"
          placeholder="Contraseña"
          name="contraseña"
          autoComplete="off"
          onChange={onInputChange}
          value={develop.contraseña}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        {" "}
        Update{" "}
      </button>
    </form>
  );
};
