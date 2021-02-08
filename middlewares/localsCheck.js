module.exports = (req, res, next) => {
    if(req.session.userAdmin){
        res.locals.userAdmin = req.session.userAdmin                         // EL OBJETO LOCALS CORRESPONDE A RES
    }
    next();
};