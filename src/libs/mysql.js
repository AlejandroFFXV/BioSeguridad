import mysql from "serverless-mysql";
// Como conectar una base de datos con NextJS en src creamos la carpeta libs y en dicha carpeta nuestro archivo
export const conn = mysql({
  config: {
    host: "Tus credenciales",
    user: "Tus credenciales",
    password: "Tus credenciales",
    port: "Tus credenciales",
    database: "Tus credenciales",
  },
});
