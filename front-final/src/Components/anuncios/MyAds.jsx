import React from 'react'

export const MyAds = (ad) => {
  return (
    <article className="card">
      <div>
        <img src="" alt="" />
      </div>

      <h3>{ad.titulo}</h3>
      <p>{ad.descripcion}</p>
      <p>{ad.precio}</p>
      <p>{ad.email}</p>
    </article>
  )
}
