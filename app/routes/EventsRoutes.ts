import express, { Router } from "express";
import EventsController from "../controllers/EventsController";

const router = express.Router();

const routes = (): Router => {
    router.get("/", EventsController.index);

    router.post("/add", EventsController.create);

    router.delete("/delete/:id", EventsController.delete);

    return router;
};

export default routes;
