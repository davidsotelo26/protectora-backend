const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    dni: { type: String, required: true, unique: true },
    nameSurname: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, default: "user", enum: ["admin", "user", "company"] },
},
{
    collection: "user", timestamps: true
});

const User = mongoose.model("user", userSchema)
module.exports = User;


