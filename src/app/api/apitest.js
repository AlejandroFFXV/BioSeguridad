// //Toda esta pagina es para practicar async con arrow functions
// async function getData() {
//   const respuesta = await fetch("https://unlink.com/users");
//   if (!respuesta.ok) {
//     throw new Error("No hay datos");
//   } else {
//     return respuesta.json();
//   }
// }
// const getUserData = async () => {};
// const dataAll = async (id) => {};
// async function getMoreData(data) {
//   return Promise.resolve(data + "more data");
// }

// async function getAll() {
//   const data = await getData();
//   const moreData = await getMoreData(data);
//   return `All the data: ${data}, ${moreData}`;
// }

// getAll().then((all) => {
//   console.log("all the data");
// });
// //metodo map para recorrer el "arreglo" y imprimirlo
// export default async function apitest() {
//   const [userInfo, moreUserInfo] = await Promise.all([
//     getData(),
//     getUserData(),
//   ]);
//   return (
//     <div>
//       {userInfo.map((info) => {
//         return <p key="id">{info.name}</p>;
//       })}
//       <div>
//         {moreUserInfo.map((inforU) => {
//           return <p key="id">{inforU.lastname}</p>;
//         })}
//       </div>
//     </div>
//   );
// }
