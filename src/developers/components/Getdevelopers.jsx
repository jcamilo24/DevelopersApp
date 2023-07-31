import React from "react";

export const Getdevelopers = ({ developers }) => {
  return (
    <table className="table table-striped">
      <thead className="table-dark">
        <tr>
          <th>Id</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Email</th>
          <th>Telefono</th>
          <th>Contraseña</th>
        </tr>
      </thead>
      <tbody>
        {developers.map((develop) => (
          <tr key={develop.id}>
            <td>{develop.id}</td>
            <td>{develop.nombre}</td>
            <td>{develop.apellido}</td>
            <td>{develop.email}</td>
            <td>{develop.telefono}</td>
            <td>{develop.contraseña}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
