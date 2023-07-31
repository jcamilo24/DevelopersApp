import React from "react";

export const Getfiles = ({ files }) => {
  return (
    <table className="table table-striped">
      <thead className="table-dark">
        <tr>
          <th>Id</th>
          <th>Fecha</th>
          <th>Hora</th>
          <th>Funcionalidad Trabajada</th>
          <th>Tiempo Invertido(Horas)</th>
          <th>Desarrollador</th>
        </tr>
      </thead>
      <tbody className="">
        {files.map((file) => (
          <tr key={file.id}>
            <td>{file.id}</td>
            <td>{file.fecha}</td>
            <td>{file.hora}</td>
            <td>{file.funcionalidad_trabajada}</td>
            <td>{file.tiempo_invertido_horas}</td>
            <td>{file.desarrollador}</td>
            <td></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
