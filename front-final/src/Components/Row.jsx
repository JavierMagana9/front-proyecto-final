import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

export const Row = () => {
    

    const { users, user } = useContext(UserContext)

  return (
    <>
      <tr>
        {/* {user.map((value)=>{ */}

            <td>{}</td>

        {/* })} */}
        
      </tr>
    </>
  );
};
