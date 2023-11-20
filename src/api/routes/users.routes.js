const express = require('express');
const {getUsers, getUserById, getUserByEmail, updateUser, deleteUser, registerUser, loginUser, profile } = require("../controllers/users.controller");
const { isAuth } = require("../../middleware/auth");
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", [isAuth], profile); 
router.get("/:id", getUserById);
router.get("/", getUsers);
router.get("/email/:email", getUserByEmail);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);


module.exports = router;
