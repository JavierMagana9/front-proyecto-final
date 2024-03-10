// import React, { useContext } from 'react'
// import { Navigate, Route, Routes } from 'react-router-dom'
// import { UserContext } from '../context/UserContext'
// import { AdsDashPage, ReservationDashPage, UserDashPage } from '../Admin/pages'
// import { MyAdsPage, ProfilePage, ReservationPage } from '../User/pages'
// import { AdsFreePage, HomeFreePage } from '../Pages'
// import { MyAdsSubPage, ProfileSubPage } from '../UserSub'

// export const BaseRouter = () => {

//     const { user } = useContext(UserContext)

//   return (
//     <>
     
//     <Routes>
          
//         {/* {user.role === 'admin' ? ( */}
//           <>
//           <NavBarAdmin/>
//           {/* ruta logout */}
//             {/* <Route path="/" element={<HomeFreePage />} /> */}
//             <Route path="/tabla-usuarios" element={<UserDashPage />} />
//             <Route path="/tabla-anuncios" element={<AdsDashPage />} />
//             <Route path="/tabla-reservas" element={<ReservationDashPage />} />
//             <Route path="/*" element={<Navigate to='/tabla-usuarios' />} />
//           </>

//         {/* ) : user.role === 'user_reg' ? ( */}
//           <>
//             <Route path="/reservas" element={<ReservationPage />} />
//             <Route path="/anuncios" element={<AdsFreePage />} />
//             <Route path="/mis-anuncios" element={<MyAdsPage />} />
//             <Route path="/perfil" element={<ProfilePage />} />
//             <Route path="/*" element={<Navigate to='/reservas' />} />
//           </>
//         {/* ) : ( */}
//           <>
//             <Route path="/anuncios" element={<AdsFreePage />} />
//             <Route path="/mis-anuncios-sub" element={<MyAdsSubPage />} />
//             <Route path="/perfil-sub" element={<ProfileSubPage />} />
//             <Route path="/*" element={<Navigate to='/anuncios' />} />
//           </>
//         {/* )
//         } */}

//     </Routes>
//     </>
//   )
// }
