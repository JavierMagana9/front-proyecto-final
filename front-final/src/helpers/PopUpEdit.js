import React from 'react'
import Swal from 'sweetalert2';

export const PopUpEdit = (userData) => {


    Swal.fire({
        title: 'Editar Usuario',
        
        html: `
          <input id="swal-nickname" class="swal2-input" value="${userData.nickname}" placeholder="Nickname">
          <input id="swal-email" class="swal2-input" value="${userData.email}" placeholder="Email">
          <input id="swal-rol" class="swal2-input" value="${userData.rol}" placeholder="Rol">
          <input id="swal-date" class="swal2-input" value="${userData.date}" placeholder="Fecha">
        `,
        focusConfirm: false,
        preConfirm: () => {
          return {
            nickname: document.getElementById('swal-nickname').value,
            email: document.getElementById('swal-email').value,
            rol: document.getElementById('swal-rol').value,
            date: document.getElementById('swal-date').value
          }
        },
        showCancelButton: true,
        confirmButtonText: 'Guardar',
        cancelButtonText: 'Cancelar',
      }).then((result) => {
        if (result.isConfirmed) {
          
          console.log(result.value); 
        }
      });
    
  return
}
