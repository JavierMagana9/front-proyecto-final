import React from "react";

export const RowAds = ({ ad }) => {
  return (
    <>
      <tr id={ad.titulo}>
        <td>{ad.titulo}</td>
        <td>{ad.descripcion}</td>
        <td>{ad.precio}</td>
        <td>{ad.email}</td>

        {/* <td>
          <button id="botonToggle" className={userData.estado==='true'?"btn btn-green":"btn btn-red"} onClick={handlerToggle}>
            {nombreBoton}
          </button>
        </td> */}
        <td>
          <button className="btn" 
        //   onClick={handlerEditar}
        >
            editar
          </button>
        </td>
        <td>
          <button className="btn btn-red" 
        //   onClick={handlerEliminar}
          >
            eliminar
          </button>
        </td>
      </tr>
    </>
  );
};
