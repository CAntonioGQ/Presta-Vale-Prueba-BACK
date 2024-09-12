import "reflect-metadata";
import express from "express";
import cors from "cors";
import database from "./config/database/database";
import productRouter from "./core/infrastructure/rest/routes/product.routes";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.DB_PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

database.initialize()
  .then(() => console.log("Database connected"))
  .catch(console.error);

app.use('/api', productRouter);

app.listen(PORT, () => {
  console.log('App executing on port: ' + PORT);
});