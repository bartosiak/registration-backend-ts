import config from "./config";
import express, { Express } from "express";
import cors from "cors";
import mongoose from "mongoose";
import eventsRoutes from "../app/routes/EventsRoutes";

const mongoUrl: string = `mongodb://${config.db.host}:${config.db.port}/${config.db.name}`;

mongoose
    .connect(mongoUrl, {})
    .then(() => {
        console.log("MongoDB is Connected!");
    })
    .catch((err: Error) => {
        throw err;
    });

const app: Express = express();
app.use(express.json());
app.use(cors());

app.use("/events", eventsRoutes());

app.listen(config.app.port, () => {
    console.log("Express server is up!");
});
