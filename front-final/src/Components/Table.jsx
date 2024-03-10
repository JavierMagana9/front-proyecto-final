import React, { useContext, useEffect, useState } from "react";
import { Row } from "./Row";
import { UserContext } from "../context/UserContext";
import { apiTodosUsuarios } from "../helpers/apiTodosUsuarios";

export const Table = () => {
  
  const { users, setUsers } = useContext(UserContext);
  const [page, setPage] = useState(0);
  const [llaves, setLlaves] = useState([]);

  const totalPages = 5;

  const bringingUsers = async () => {
    
    const usuarios = await apiTodosUsuarios();
// console.log(usuarios)
    setUsers(usuarios.data);
  };

  useEffect(() => {
    bringingUsers();
  }, []);

  const gettingKeys = async () => {
    
    const keys = await Object.keys(users[0]);
    // console.log("gettingKeys",keys)
    setLlaves(keys);
    
  };

  useEffect(() => {
    gettingKeys();
  }, []);

  const handlerPreviousPage = () => {
    setPage(page - 1);
  };

  const handlerNextPage = () => {
    setPage(page + 1);
  };

  return (
    <>
      {/* <pre>{JSON.stringify(users, null, 3)}</pre> */}

      <table>
        <thead>
          <tr>
            {llaves.map((key) => {
              return <th key={key}>{key}</th>;
            })}
            <th>editar</th>
            <th>eliminar</th>
          </tr>
        </thead>
        <tbody>
          {users.map((userData) => {
            return <Row key={userData.id_usuario} userData={userData} />;
          })}
        </tbody>
      </table>
      <div>
        <button onClick={handlerPreviousPage} disabled={page <= 0}>
          {"<"}
        </button>
        <span>{page}</span>
        <button onClick={handlerNextPage} disabled={page >= totalPages}>
          {">"}
        </button>
      </div>
    </>
  );
};
