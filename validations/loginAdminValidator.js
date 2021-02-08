const {check} = require("express-validator");

module.exports = [
    check("username").notEmpty().withMessage("El campo requerido esta incompleto"),
    check("pass").notEmpty().withMessage("El campo requerido esta incompleto")  
]