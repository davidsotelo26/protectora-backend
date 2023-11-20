const express = require('express');
const { addEntitiy, getEntityById, getEntity, getEntityByName, updateEntity, deleteEntity } = require('../controllers/entities.controller');
const router = express.Router();


router.post("/register", addEntitiy);
router.get("/", getEntity);
router.get("/id/:id", getEntityById);
router.get("/name/:name", getEntityByName);
router.put("/:id", updateEntity);
router.delete("/:id", deleteEntity);

module.exports = router;