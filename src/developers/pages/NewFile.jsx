import React from "react";
import { Formulario } from "../helpers/Formulario";
import { useState } from "react";

export const NewFile = () => {
  const [file, setfile] = useState({
    fecha: "",
    hora: "",
    funcionalidad_trabajada: "",
    tiempo_invertido_horas: 0,
    desarrollador: "",
  });
  return (
    <>
      <Formulario file={file} setfile={setfile} />
    </>
  );
};
