const mysql = require("mysql");


const animalsSchema = new Schema({
    especies: {type: String, required: true},
    birth_date: { type: String, required: true },
    sex: { type: String, required: true },
    size: { type: String, required: true},
    weight: {type: String, required: true},
    personality: {type: String, required: true},
    history: {type: String, required: true},
    Status: {type: String, required: true},
    vaccinated: {type: String, required: true},
    dewormed: {type: String, required: true},
    sterilized: {type: String, required: true},
    identified: {type: String, required: true},
    microchip: {type: String, required: true},
},
{
    collection: "animals", timestamps: true
});
//string, number, array, date, mixed, boolean,  ObjectId

const Animals = mysql.model("animals", animalsSchema)
module.exports = Animals;