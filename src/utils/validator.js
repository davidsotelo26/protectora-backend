const User = require("../api/models/users.model")

const validatePassword = (pass) => {

    const regex = /[A-Za-z]{8,15}/; // 1 mayuscula, 1 minuscula,  minimo 8, maximo 15
    return regex.test(pass)
}

const validateEmailDB = async (emailUser) => {
    try {
        const validateEmail = await User.findOne({ email: emailUser })
        return validateEmail;
    } catch (error) {
        console.log(error)
    }

}
module.exports = { validateEmailDB, validatePassword }