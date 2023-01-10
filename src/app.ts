import express from "express";
import db from "./config/dbConnect.js";
import routes from "./routes/index.js";

db.on("error", console.log.bind(console, "Connection error"));
db.once("open", () => {
  console.log("Successfully connected");
});

const app = express();

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server listening in the port http://localhost:${port}`);
});

routes(app)