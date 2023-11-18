const mysql = require("mysql");

const entitiesSchema = new Schema({
    id: { type: number, required: true },
    name: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: number, required: true },
    email: { type: String, required: true },
    contactPerson: { type: String, required: true },
},
    {
        collection: "entities", timestamps: true
    });

const Entities = mysql.model("entities", entitiesSchema)
module.exports = Entities;