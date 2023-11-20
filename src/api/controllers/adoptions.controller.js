const Adoptions = require('../models/adoptions.model');

const addAdoption = async (req, res) => {
    try {
        const newAdoption = new Adoptions(req.body);
        const createdAdoption = await newAdoption.save();
        return res
            .status(200)
            .json({ message: "Adoption created", data: createdAdoption });
    } catch (error) {
        return res.status(500).json({ message: "Error", data: error });
    }
};

const getAdoption = async (req, res) => {
    try {
        const adoptions = await Adoptions.find();
        return res.status(200).json(adoptions);
    } catch (error) { }
};

const getAdoptionById = async (req, res) => {
    try {
        const adoption = await Adoptions.findById(req.params.id);
        return res.status(200).json(adoption);
    } catch (error) { }
};

const getAdoptionByAnimalId = async (req, res) => {
    try {
        const adoption = await Adoptions.find({ animalId: req.params.animalId });
        return res.status(200).json(adoption);
    } catch (error) { }
};

const getAdoptionByUserId = async (req, res) => {
    try {
        const adoption = await Adoptions.find({ userId: req.params.userId });
        return res.status(200).json(adoption);
    } catch (error) { }
};

const updateAdoption = async (req, res) => {
    try {
        const updatedAdoption = await Adoptions.findByIdAndUpdate(
            req.params.id, req.body, { new: true });
        return res.status(200).json({ message: "Adopción actualizada", data: updatedAdoption });
    } catch (error) {
        return res.status(500).json({ message: "Error", data: error });
    }
};

const deleteAdoption = async (req, res) => {
    try {
        const deletedAdoption = await Adoptions.findByIdAndDelete(req.params.id);
        return res.status(200).json({ message: "Adopción eliminada", data: deletedAdoption });
    } catch (error) {
        return res.status(500).json({ message: "Error", data: error });
    }
};

module.exports = { addAdoption, getAdoption, getAdoptionById, getAdoptionByAnimalId, getAdoptionByUserId, updateAdoption, deleteAdoption };