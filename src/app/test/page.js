/*import React from "react";

const getUsersData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!res.ok) {
    throw new Error("No fetch data");
  }

  return res.json();
};

export default async function test() {
  const users = await getUsersData();

  return (
    <div>
      {users.map((user) => {
        return <p key="user.id">{user.name}</p>;
      })}
    </div>
  );
}
*/
import DescripcionIA from "../Components/mainpage/DescripcionIA";
import ObjetivoIA from "../Components/mainpage/ObjetivoIA";
import ParaQueIA from "../Components/mainpage/ParaQueIA";
import QueEsSeguridad from "../Components/mainpage/QueEsSeguridad";
const page = () => {
  return (
    <>
      <ParaQueIA />
      <QueEsSeguridad />
      <DescripcionIA />
      <ObjetivoIA />
    </>
  );
};

export default page;
