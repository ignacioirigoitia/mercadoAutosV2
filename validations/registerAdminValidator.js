const {check, body} = require("express-validator")
const {getAdmins} = require("../data/admins");
const admins = getAdmins()

module.exports = [
    check("username").notEmpty().withMessage("El campo requerido esta incompleto"),
    check("pass").isLength({min:3, max:8}).withMessage("El campo requerido esta incompleto"),
    body("username").custom(value => {
        let result = admins.find(admin => admin.username.toLowerCase() === value.toLowerCase().trim());;

        if (result) {
            return false
        }else{
            return true
        }
    }).withMessage("El usuario ya esta registrado")
]