import express from "express";
import "dotenv/config";
import path from "path";
import { agregar, todos, eliminar, editar } from "./consultas/consultas.js";

const __dirname = path.resolve();
const app = express();
const { PORT } = process.env;

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/cancion", async (req, res) => {
  const { titulo, artista, tono } = req.body;
  const result = await agregar(titulo, artista, tono);
  res.json(result);
});

app.get("/canciones", async (req, res) => {
  const result = await todos();
  res.json(result);
});

app.delete("/cancion", async (req, res) => {
  const { id } = req.query;
  const result = await eliminar(id);
  res.json(result);
});

app.put("/cancion", async (req, res) => {
  const { id } = req.query;
  const result = await eliminar(id);
  res.json(result);
});

app.put("/cancion/:id", async (req, res) => {
  const { titulo, artista, tono } = req.body;
  const { id } = req.params;
  const result = await editar(titulo, artista, tono, id);
  console.log(result, "result");
  res.json(result);
});
