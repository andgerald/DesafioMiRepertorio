import pool from "../config/dbConfig.js";

//Funcion para agregar
export const agregar = async ({ titulo, artista, tono }) => {
  const result = await pool.query(
    "INSERT INTO canciones (titulo,artista,tono) values($1,$2,$3) RETURNING *",
    [titulo, artista, tono]
  );
  console.log(result);
  console.log("Registro agregado con exito", result.rows);
  return result.rows[0];
};

export const todos = async () => {
  const result = await pool.query("SELECT * FROM canciones");
  return result.rows;
};
