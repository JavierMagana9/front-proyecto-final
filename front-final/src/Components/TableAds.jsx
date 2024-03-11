import React, { useEffect, useState } from 'react'
import { RowAds } from './RowAds';
import { useAds } from '../hook/useAds';

export const TableAds = () => {
    const [llaves, setLlaves] = useState([]);
    const {ads}=useAds()

const gettingKeys = async () => {
    
    const keys =  Object.keys(ads[0]);
    // console.log("gettingKeys",keys)
    setLlaves(keys);
    
  };

  useEffect(()=>{
    gettingKeys()
  }, [])

  return (
<>
    {/* <pre>{JSON.stringify(ads, null, 3)}</pre> */}

    <table className="table">
        <thead>
          <tr>
            {llaves.map((key) => {
              return <th key={key}>{key}</th>;
            })}
            <th>editar</th>
            <th>eliminar</th>
          </tr>
        </thead>
        <tbody >
          {ads.map((ad) => {
            return <RowAds key={ad.titulo} ad={ad} />;
          })}
        </tbody>
      </table>
      </>
  )
}
