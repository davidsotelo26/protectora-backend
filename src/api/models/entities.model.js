const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const animalSchema = new Schema({
    
    IDEntity: { type: String, require: true },
    Cif: { type: String, require: true },
    name: { type: String, require: true },
    phone: { type: String, require: true },
    ContactPerson: { type: String, require: true },
    email: { type: String, require: true },
    address: { type: String, require: true },
    Poblacion: { type: String, require: true }
}, {

    collection: "animal", timestamps: true
});

const Animal = mongoose.model("animal", animalSchema)
module.exports = Animal;