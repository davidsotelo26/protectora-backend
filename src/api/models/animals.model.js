const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const animalsSchema = new Schema(
    {
        animalID: { type: Number, required: true },
        name: { type: String, required: true },
        city: { type: String, required: true },
        species: { type: String, required: true },
        birthDate: { type: Date, required: true },
        genre: { type: String, required: true },
        size: { type: String, required: true },
        weight: { type: Number, required: true },
        personality: { type: String, required: true },
        history: { type: String, required: true },
        status: { type: String, required: true },
        vaccinated: { type: Boolean, required: true },
        dewormed: { type: Boolean, required: true },
        sterilized: { type: Boolean, required: true },
        identified: { type: Boolean, required: true },
        microchip: { type: Boolean, required: true },
        adoptionRequirements: { type: String, required: true },
        rate: { type: Number, required: true },
        sendOtherCity: { type: Boolean, required: true },
        image: { type: String, required: true },
    },
    {
        collection: "animals",
    }
);

const Student = mongoose.model("animals", animalsSchema)
module.exports = Student;
