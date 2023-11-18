const express = require('express');
const router = express.Router();


const { addAnimal, getAnimal, getAnimalById, putAnimal } = require("../controllers/Animal.controller")

router.post("/", addAnimal)
router.get("/", getAnimal)
router.get("/:id", getAnimalById)
router.put("/:id", putAnimal)

module.exports = router;