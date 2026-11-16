import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import cors from "cors";

app.use(cors());
app.use(express.json());

// Route d'accueil
app.get("/", (req, res) => {
  res.json({
    message: "Bienvenue sur le backend de Cyber Corp !",
  });
});

// Récupérer les articles
app.get("/api/article", (req, res) => {
  const articlePath = path.join(__dirname, "data", "article.json");

  const article = JSON.parse(fs.readFileSync(articlePath, "utf-8"));

  res.json(article);
});
// Récupérer le menu
app.get("/api/bar", (req, res) => {
  const menuPath = path.join(__dirname, "data", "menu.json");

  const menu = JSON.parse(fs.readFileSync(menuPath, "utf-8"));

  res.json(menu);
});
// Récupérer les events
app.get("/api/event", (req, res) => {
  const eventPath = path.join(__dirname, "data", "event.json");

  const event = JSON.parse(fs.readFileSync(eventPath, "utf-8"));

  res.json(event);
});
// Récupérer les computers
app.get("/api/computer", (req, res) => {
  const computerPath = path.join(__dirname, "data", "computer.json");

  const computer = JSON.parse(fs.readFileSync(computerPath, "utf-8"));

  res.json(computer);
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
});
