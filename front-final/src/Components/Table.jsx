import React from "react";

export const Table = () => {

  const {  user } = useContext(UserContext)

  const keys = Object.keys(user)

  return (
    <>
      <pre>{JSON.stringify(keys, null, 3)}</pre>

      <table>
        <thead>
          <tr>
            {keys.map((key) => {
              <th>{key}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          <Row />
        </tbody>
      </table>
    </>
  );
};
