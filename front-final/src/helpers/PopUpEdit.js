import React from 'react'
import Swal from 'sweetalert2';
import { apiEditarUsuarios } from './apiEditarUsuarios';
import "../sweetalertCustom.css";

export const PopUpEdit = async (userDataYestado) => {

    try {
        const result = await Swal.fire({
          title: 'Editar Usuario',
          html: `
            <form id="editUserForm" class="align-center display-flex">
              <label>nickname</label>
              <input id="swal-nickname" class="swal2-input" value="${userDataYestado.nickname}" placeholder="Nickname">
              <label>email</label>
              <input id="swal-email" class="swal2-input" value="${userDataYestado.email}" placeholder="Email">
              <label>rol</label>
              <input id="swal-rol" class="swal2-input" value="${userDataYestado.rol}" placeholder="Rol">
             
              
          `,
          focusConfirm: false,
          preConfirm: () => {
            return {
              nickname: document.getElementById('swal-nickname').value,
              email: document.getElementById('swal-email').value,
              rol: document.getElementById('swal-rol').value,
            
            }
          },
          showCancelButton: true,
          confirmButtonText: 'Guardar',
          cancelButtonText: 'Cancelar',
        });


        if (result.value) {
            const datosUsuario = {
              ...result.value,
              estado: userDataYestado.estado,
            };
            console.log("estado",userDataYestado.estado)
            console.log(datosUsuario)
            const response = await apiEditarUsuarios(userDataYestado.id_usuario, datosUsuario);
            console.log('Usuario actualizado', response);
            
          }
        } catch (error) {
          console.error('Error al actualizar el usuario', error);
         
        }
}
