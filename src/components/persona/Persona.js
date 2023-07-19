import React from "react";
import { useNavigate, useParams } from "react-router";

export const Persona = () => {
  //valores por defecto en parametros opcionales
  //let { nombre = "Alejandro", apellido = "Pascual" } = useParams();
  let { nombre, apellido } = useParams();
  const navegar = useNavigate();
  const enviar = (e) => {
    e.preventDefault();
    let nombre = e.target.nombre.value;
    let apellido = e.target.apellido.value;
    let url = `/persona/${nombre}/${apellido}`

    if(nombre.length <= 0 && apellido.length <= 0){
        navegar("/inicio")
    }else if(nombre == "contacto"){
        navegar("/contacto")
    }else if(nombre == "articulos"){
        navegar("/articulos")
    }else{
        navegar(url)
    }

    // navegar(`/persona/${nombre}/${apellido}`);
  };
  return (
    <>
      {!nombre && <h1>No Hay nombre ni Apellidos que mostrar</h1>} :
      {nombre && (
        <h1>
          Persona:{nombre} {apellido}
        </h1>
      )}
      <p>Esta es la pagina de persona</p>
      <form onSubmit={enviar}>
        <input type="text" name="nombre" />
        <input type="text" name="apellido" />
        <button type="submit" name="enviar" value="enviar">
          Enviar
        </button>
      </form>
    </>
  );
};
