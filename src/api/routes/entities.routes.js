const express = require('express');
const { addEntitiy, getEntityById, getEntity, getEntityByName, updateEntity, deleteEntity } = require('../controllers/entities.controller');
const router = express.Router();


router.post("entity/register", addEntitiy);
router.get("/entity", getEntity);
router.get("/entity/:id", getEntityById);
router.get("/entity/:name", getEntityByName);
router.put("/entity/:id", updateEntity);
router.delete("/entity/:id", deleteEntity);

module.exports = router;