const Entities = require('../models/entities.model');

const addEntitiy = async (req, res) => {
    try {
        const newEntity = new Entity(req.body);
        const createdEntity = await newEntity.save();
        return res
            .status(200)
            .json({ message: "Entidad creada", data: createdEntity });
    } catch (error) {
        return res.status(500).json({ message: "Error", data: error });
    }
};

const getEntity = async (req, res) => {
    try {
        const entities = await Entities.find();
        return res.status(200).json(entities);
    } catch (error) { }
};

const getEntityById = async (req, res) => {
    try {
        const entity = await Entities.findById(req.params.id);
        return res.status(200).json(entity);
    } catch (error) { }
};

const getEntityByName = async (req, res) => {
    try {
        const entity = await Entities.findByName(req.params.name);
        return res.status(200).json(entity);
    } catch (error) { }
};

const updateEntity = async (req, res) => {
    try {
        const updateEntity = await Entities.findByIdAndUpdate(
            req.params.id, req.body, { new: true });
        return res.status(200).json({ message: "Entidad actualizada", data: updateEntity });
    } catch (error) {
        return res.status(500).json({ message: "Error", data: error });
    }
};

const deleteEntity = async (req, res) => {
    try {
        const deletedEntity = await Entities.findByIdAndDelete(req.params.id);
        return res.status(200).json({ message: "Entidad eliminada", data: deletedEntity });
    } catch (error) {
        return res.status(500).json({ message: "Error", data: error });
    }
};

module.exports = { addEntitiy, getEntity, getEntityById, getEntityByName, updateEntity, deleteEntity };