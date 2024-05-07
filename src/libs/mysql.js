import mysql from "serverless-mysql";
// Como conectar una base de datos con NextJS en src creamos la carpeta libs y en dicha carpeta nuestro archivo
export const conn = mysql({
  config: {
    host: "mna97msstjnkkp7h.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "yrnmapz66r0wdm88",
    password: "ny7f0qnu63fcc4oz",
    port: "3306",
    database: "hjqazw0ynzxk0qbf",
  },
});
// Como conectar una base de datos con NextJS en src creamos la carpeta libs y en dicha carpeta nuestro archivo
// export const conn = mysql({
//   config: {
//     host: "localhost",
//     user: "root",
//     password: "NeroDiosa/Wa1fu",
//     port: "3306",
//     database: "bioseguridad",
//   },
// });
