const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const usersSchema = new Schema({
    name: {type: String, required: true},
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, default: "user", enum: ["admin", "user", "entity"] },
},
{
    collection: "users", timestamps: true
});
//string, number, array, date, mixed, boolean,  ObjectId

const Users = mongoose.model("users", usersSchema)
module.exports = Users;