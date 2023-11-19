const express = require('express');
const {getUsers, getUserById, getUserByEmail, updateUser, deleteUser, registerUser, loginUser, profile } = require("../controllers/users.controller");
const { isAuth } = require("../../middleware/auth");
const router = express.Router();

router.post("/user/register", registerUser);
router.post("/user/login", loginUser);
router.get("/user/profile", [isAuth], profile); 
router.get("/user/:id", getUserById);
router.get("/user", getUsers);
router.get("/user/:email", getUserByEmail);
router.put("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);


module.exports = router;
