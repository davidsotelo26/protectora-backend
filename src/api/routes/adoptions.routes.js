const express = require('express');
const router = express.Router();
const { addAdoption, getAdoption, getAdoptionById, getAdoptionByAnimalId, getAdoptionByUserId, updateAdoption, deleteAdoption } = require('../controllers/adoptions.controller');

router.post("/", addAdoption);
router.get("/", getAdoption);
router.get("/id/:id", getAdoptionById);
router.get("/:animalId", getAdoptionByAnimalId);
router.get("/:userId", getAdoptionByUserId);
router.put("/:id", updateAdoption);
router.delete("/:id", deleteAdoption);

module.exports = router;