const mysql = require("mysql");



const usersSchema = new Schema({
    id: {type: number, required: true},
    dni: {type: number, required: true},
    address: { type: String, required: true },
    name: {type: String, required: true},
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, default: "user", enum: ["admin", "user", "entity"] },
},
{
    collection: "users", timestamps: true
});
//string, number, array, date, mixed, boolean,  ObjectId

const Users = mysql.model("users", usersSchema)
module.exports = Users;