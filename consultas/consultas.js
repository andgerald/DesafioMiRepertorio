import pool from "../config/dbConfig.js";

//Funcion para agregar
export const agregar = async (titulo, artista, tono) => {
  const result = await pool.query(
    "INSERT INTO canciones (titulo,artista,tono) values($1,$2,$3) RETURNING *",
    [titulo, artista, tono]
  );

  return result.rows[0];
};

export const todos = async () => {
  const result = await pool.query("SELECT * FROM canciones");
  return result.rows;
};

export const eliminar = async (id) => {
  const result = await pool.query(
    "DELETE FROM canciones WHERE id=$1 RETURNING *",
    [id]
  );
  return result.rows[0];
};

export const editar = async (titulo, artista, tono, id) => {
  const result = await pool.query(
    "UPDATE canciones  SET titulo = $1, artista = $2, tono = $3 WHERE id = $4  RETURNING *",
    [titulo, artista, tono, id]
  );
  console.log(result.rows);
  return result.rows[0];
};
