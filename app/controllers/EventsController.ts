import { Request, Response } from "express";
import EventModel, { IEvent } from "../models/EventModel";


const index = async (_req: Request, res: Response) : Promise<Response> => {
    try {
        const events: IEvent[] = await EventModel.find({});
        return res.json(events);
    } catch (err: unknown) {
        const error = err as Error;
        return res.status(500).json({
            message: "Error while fetching Events",
            error: error.message,
        });
    }
};


const create = async (req: Request, res: Response) : Promise<Response> => {
    try {
        const event: IEvent = new EventModel({
            name: req.body.name,
            event: req.body.event,
            city: req.body.city,
        });

        const savedEvent: IEvent = await event.save();

        return res.status(201).json(savedEvent);
    } catch (err: unknown) {
        const error = err as Error;
        return res.status(500).json({
            message: "Error while creating Events",
            error: error.message,
        });
    }
};

const deleteEvent = async (req: Request, res: Response) : Promise<Response> => {
    const id: string = req.params.id;

    try {
        const deletedEvent: IEvent | null = await EventModel.findByIdAndDelete(id);

        if (!deletedEvent) {
            return res.status(404).json({
                message: "Event not found",
            });
        }

        return res.status(200).json({
            message: "Event deleted successfully",
            deletedEvent,
        });
    } catch (err: unknown) {
        const error = err as Error;
        return res.status(500).json({
            message: "Error while deleting Event",
            error: error.message,
        });
    }
};

export default {
    index,
    create,
    delete: deleteEvent,
};
