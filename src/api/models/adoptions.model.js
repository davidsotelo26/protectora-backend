const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const adoptionsSchema = new Schema({
    adoptionId: { type: Number, required: true },
    animalId: { type: Number, required: true },
    adoptionDate: { type: Date, required: true },
    status: { type: String, required: true },
    otherAnimals: { type: String, required: true },
    animalSpecies: { type: String, required: true },
    animalGeralongwith: { type: String, required: true },
    adoptionReason: { type: String, required: true },
    knowNeeds: { type: String, required: true },
    knowExpenses: { type: String, required: true },
    knowFood: { type: String, required: true },
    name: { type: String, required: true },
    lastname: { type: String, required: true },
    dni: { type: Number, required: true },
    email: { type: String, required: true },
    phone: { type: Number, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    housingType: { type: String, required: true },
    rentalHousing: { type: Boolean, required: true },
    allows: { type: Boolean, required: true },
    thoughtMoving: { type: Boolean, required: true },
    garden: { type: Boolean, required: true },
    liveAlone: { type: Boolean, required: true },
    theyOk: { type: Boolean, required: true },
    visitHome: { type: Boolean, required: true },
}, {
    collection: "adoptions"
});
//string, number, array, date, mixed, boolean,  ObjectId

const Adoptions = mongoose.model("adoptions", adoptionsSchema)
module.exports = Adoptions;
