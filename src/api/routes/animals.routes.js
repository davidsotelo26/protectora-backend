const express = require('express');
const router = express.Router();


const { addAnimal, getAnimal, getAnimalById, updateAnimal, getAnimalByName, deleteAnimal } = require("../controllers/animals.controller")

router.post("/animal", addAnimal);
router.get("/animal", getAnimal);
router.get("/animal/:id", getAnimalById);
router.get("/animal/:name", getAnimalByName);
router.put("/animal/:id", updateAnimal);
router.delete("/animal/:id", deleteAnimal);

module.exports = router;