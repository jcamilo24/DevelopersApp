import React from "react";

export const Formulario = ({ file, setfile }) => {
  const onInputChange = (evento) => {
    setfile({
      ...file,
      [evento.target.name]: evento.target.value,
    });
  };

  let {
    fecha,
    hora,
    funcionalidad_trabajada,
    tiempo_invertido_horas,
    desarrollador,
  } = file;

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

    const requestInit = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(file),
    };
    fetch(`http://localhost:9000/api_users/add_files/`, requestInit)
      .then((res) => res.json())
      .then((res) => console.log(res));

    setfile({
      fecha: "",
      hora: "",
      funcionalidad_trabajada: "",
      tiempo_invertido_horas: 0,
      desarrollador: "",
    });
  };

  return (
    <form onSubmit={onsubmit}>
      <h1> Add New File </h1>
      <div className="mb-3">
        <label htmlFor="fecha" className="form-label">
          Fecha
        </label>
        <input
          type="text"
          id="date"
          className="form-control"
          placeholder="Fecha"
          name="fecha"
          autoComplete="off"
          onChange={onInputChange}
          value={fecha}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="hora" className="form-label">
          Hora
        </label>
        <input
          type="text"
          id="hour"
          className="form-control"
          placeholder="Hora"
          name="hora"
          autoComplete="off"
          onChange={onInputChange}
          value={hora}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="funcionalidad" className="form-label">
          Funcionalidad Trabajada
        </label>
        <input
          type="text"
          id="funtionality"
          className="form-control"
          placeholder="Funcionalidad"
          name="funcionalidad_trabajada"
          autoComplete="off"
          onChange={onInputChange}
          value={funcionalidad_trabajada}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="tiempo" className="form-label">
          Tiempo Invertido(Horas)
        </label>
        <input
          type="number"
          id="time"
          className="form-control"
          placeholder="Tiempo(horas)"
          name="tiempo_invertido_horas"
          autoComplete="off"
          onChange={onInputChange}
          value={tiempo_invertido_horas}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="desarrollador" className="form-label">
          Desarrollador
        </label>
        <input
          type="text"
          id="develop"
          className="form-control"
          placeholder="Desarrollador"
          name="desarrollador"
          autoComplete="off"
          onChange={onInputChange}
          value={desarrollador}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        {" "}
        Submit{" "}
      </button>
    </form>
  );
};
