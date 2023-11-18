const Adoptions = require('../models/adoption.model');

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
}