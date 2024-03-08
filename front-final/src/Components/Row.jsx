import React, { useContext } from "react";
import { UserContext } from "../context";
import { apiEliminarUsuario } from "../helpers/apiEliminarUsuario";
// import { UserContext } from "../UserContext";
import Swal from 'sweetalert2'
import { PopUpEdit } from "../helpers/PopUpEdit";


export const Row = ({ userData }) => {
    const { users, setUsers } = useContext(UserContext);

   const handlerToggle = () => {


   }

  const handlerEditar = () => {
    PopUpEdit(userData)
  };


  const handlerEliminar = () => {

    apiEliminarUsuario(userData.id_usuario)

    console.log(userData);
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
          <button onClick={handlerToggle}></button>
        </td>
        <td>
          <button onClick={handlerEditar} >
            editar
          </button>
        </td>
        <td>
          <button onClick={handlerEliminar} >
            eliminar
          </button>
        </td>
      </tr>
    </>
  );
};
