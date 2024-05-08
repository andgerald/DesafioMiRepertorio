import express from "express";
import "dotenv/config";
import path from "path";

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
