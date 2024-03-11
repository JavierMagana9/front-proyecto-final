// import Cookies from "universal-cookie";

export const apiUsuarioId = async (id_usuario) => {
 
 

  const res = await fetch(
    [`${import.meta.env.VITE_URL_BASE}/users/${id_usuario}`],
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  if (!res.ok) {

    throw new Error ('No se pudo encontrar el usuario')
    
    }
return await res.json();

  
};
