import React, { useContext, useState } from "react";
import { UserContext } from "../context";
import { apiEliminarUsuario } from "../helpers/apiEliminarUsuario";
// import { UserContext } from "../UserContext";
import Swal from "sweetalert2";
import { PopUpEdit } from "../helpers/PopUpEdit";
import { apiEditarUsuarios } from "../helpers/apiEditarUsuarios";

export const Row = ({ userData }) => {
  const cambioNombre = userData.estado === "true" ? "Activo" : "Suspendido";

  const [toggle, setToggle] = useState(JSON.parse(userData.estado));
  const [btnColor, setBtnColor] = useState();
  const [nombreBoton, setNombreBoton] = useState(cambioNombre);

  let dataToggle = {};

  const handlerToggle = () => {
    const cambio = !toggle;


    setBtnColor(toggle ? "btn btn-green" : "btn btn-red")

    if (toggle === JSON.parse(userData.estado)) {
      setToggle(cambio);

      setNombreBoton("Activo");
      console.log(nombreBoton);
      dataToggle = { ...userData, estado: userData.estado };

      apiEditarUsuarios(userData.id_usuario, dataToggle);
    } else {
      setToggle(cambio);

      setNombreBoton("Suspendido");
      // console.log(nombreBoton)
      dataToggle = { ...userData, estado: toggle.toString() };
      apiEditarUsuarios(userData.id_usuario, dataToggle);
    }

    if (nombreBoton === "Activo") {
      setBtnColor("btn btn-green");
    } else {
      setBtnColor("btn btn-red");
    }
  };

  const handlerEditar = () => {
    const userDataYestado = { ...userData, estado: userData.estado };
    PopUpEdit(userDataYestado);
  };

  const handlerEliminar = () => {
    apiEliminarUsuario(userData.id_usuario);

    // console.log(userData);
  };

  return (
    <>
      <tr id={userData.id_usuario}>
        <td>{userData.id_usuario}</td>
        <td>{userData.nickname}</td>
        <td>{userData.email}</td>
        <td>{userData.rol}</td>
        <td>{userData.date}</td>

        <td>
          <button id="botonToggle" className={btnColor} onClick={handlerToggle}>
            {nombreBoton}
          </button>
        </td>
        <td>
          <button className="btn" onClick={handlerEditar}>
            editar
          </button>
        </td>
        <td>
          <button className="btn btn-red" onClick={handlerEliminar}>
            eliminar
          </button>
        </td>
      </tr>
    </>
  );
};
