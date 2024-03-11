export const apiUsuario = async (body) => {
  

  const respuesta = await fetch(
    `${import.meta.env.VITE_URL_BASE}/users/crear-usuario`,
    {
      method: "POST", // or 'PUT'
      body: JSON.stringify(body), // data can be `string` or {object}!
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  if (!respuesta.ok) {

    throw new Error ('No se pudo registrar el usuario')
    
    }
 const data =  await respuesta.json();
  console.log(data)
};
