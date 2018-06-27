
import { Schema, Model, model } from 'mongoose';
import { changeLogSchema } from './sharedSchema/changeLogSchema';
import { CONTACT_COLLECTION } from '../dbCollection';
import { CONTACT_MODEL } from '../dbModel';

/**
 * Contact Entity Model
 * Mongoose Model represents one collection in MongoDB
 */
const contactSchema: Schema = new Schema({
    company_name: {
        type: String,
        required: true
    },
    person_name: String,
    category: String,
    handphone: String,
    telephone: String,
    fax: String,
    email: String,
    address: String,
    notes: String,
    url: String,
    change_log: [changeLogSchema]
});

// Each Mongoose model instance represents one document in MongoDB
export const contactEM: Model<any> = model<any>(
    CONTACT_MODEL,
    contactSchema,
    CONTACT_COLLECTION
);
