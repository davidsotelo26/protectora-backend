const express = require('express');
const router = express.Router();


const { addAnimal, getAnimal, getAnimalById, updateAnimal, getAnimalByName, deleteAnimal } = require("../controllers/animals.controller")

router.post("/", addAnimal);
router.get("/", getAnimal);
router.get("/id/:id", getAnimalById);
router.get("/name/:name", getAnimalByName);
router.put("/:id", updateAnimal);
router.delete("/:id", deleteAnimal);

module.exports = router;