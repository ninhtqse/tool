// src/index.js
import express, { Express, Request, Response } from "express";
import cors from "cors";
import * as path from 'path';
import dotenv from "dotenv";
import routes from "./routes/web";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

// Allow CORS
app.use(cors());

// Sets up the view engine
app.set('view engine', 'tsx');
app.engine('tsx', require('express-react-views').createEngine());
//forms
app.set('views', path.join(__dirname, 'views'));

//public 
app.use(express.static(path.join(__dirname, 'public')));

// Parses JSON in body
app.use(express.json());

// Handles / routes
app.use('/', cors(), routes);

//Starts the app on the configured port, then calls the callback when
app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});