import pool from "../config/dbConfig.js";
import { errors } from "../error.js";

let message = "";
let status = "";

export const agregar = async (titulo, artista, tono) => {
  try {
    const result = await pool.query(
      "INSERT INTO canciones (titulo,artista,tono) values($1,$2,$3) RETURNING *",
      [titulo, artista, tono]
    );

    return result.rows[0];
  } catch (e) {
    const error = errors(e.code, status, message);
    return e.code, error.status, error.message;
  }
};

export const todos = async () => {
  try {
    const result = await pool.query("SELECT * FROM canciones");
    return result.rows;
  } catch (e) {
    const error = errors(e.code, status, message);
    return e.code, error.status, error.message;
  }
};

export const eliminar = async (id) => {
  try {
    const result = await pool.query(
      "DELETE FROM canciones WHERE id=$1 RETURNING *",
      [id]
    );
    return result.rows[0];
  } catch (e) {
    const error = errors(e.code, status, message);
    return e.code, error.status, error.message;
  }
};

export const editar = async (titulo, artista, tono, id) => {
  try {
    const result = await pool.query(
      "UPDATE canciones  SET titulo = $1, artista = $2, tono = $3 WHERE id = $4  RETURNING *",
      [titulo, artista, tono, id]
    );
    return result.rows[0];
  } catch (e) {
    const error = errors(e.code, status, message);
    return e.code, error.status, error.message;
  }
};
