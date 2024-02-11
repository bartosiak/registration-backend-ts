import mongoose, { Document, Schema } from "mongoose";

export interface IEvent extends Document {
    name: string;
    event: {
        key: string;
        val: string;
    };
    city: {
        key: string;
        val: string;
    };
}

const EventSchema = new Schema<IEvent>({
    name: {
        type: String,
        required: true,
    },
    event: {
        key: {
            type: String,
            required: true,
        },
        val: {
            type: String,
            required: true,
        },
    },
    city: {
        key: {
            type: String,
            required: true,
        },
        val: {
            type: String,
            required: true,
        },
    },
});

export default mongoose.model<IEvent>("Event", EventSchema);
