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

import React from "react";

const Feed = () => {
  return <div>Feed</div>;
};

export default Feed;
