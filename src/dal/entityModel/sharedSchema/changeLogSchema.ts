import { Schema } from 'mongoose';

export const changeLogSchema: Schema = new Schema({
    user: {
        type: String,
        required: true
    },
    timestamp: {
        type: Number,
        required: true
    }
});
