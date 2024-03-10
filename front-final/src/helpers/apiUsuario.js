export const apiUsuario = async () => {
  

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
  return await respuesta.json();
  // console.log(data)
};
