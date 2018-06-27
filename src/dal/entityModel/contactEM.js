"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const changeLogSchema_1 = require("./sharedSchema/changeLogSchema");
const dbCollection_1 = require("../dbCollection");
const dbModel_1 = require("../dbModel");
/**
 * Contact Entity Model
 * Mongoose Model represents one collection in MongoDB
 */
const contactSchema = new mongoose_1.Schema({
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
    change_log: [changeLogSchema_1.changeLogSchema]
});
// Each Mongoose model instance represents one document in MongoDB
exports.contactEM = mongoose_1.model(dbModel_1.CONTACT_MODEL, contactSchema, dbCollection_1.CONTACT_COLLECTION);
