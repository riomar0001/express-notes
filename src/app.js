import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());


app.get("/", (request, response) => {
  console.log("Server is Runnning");
  return response.status(200).send({ meesage: "hello world!" });
});



app.use(notFound);
app.use(errorHandler);

export default app;